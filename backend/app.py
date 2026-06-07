from fastapi import FastAPI, UploadFile, File
from dotenv import load_dotenv
import os
import subprocess
import hashlib
import requests

load_dotenv()

VT_API_KEY = os.getenv("VT_API_KEY")

app = FastAPI()

DANGEROUS_KEYWORDS = [
    "bank",
    "banking",
    "wallet",
    "otp",
    "sms",
    "contact",
    "admin",
    "root",
    "spy",
    "hack",
    "stealer",
    "bitcoin"
]


@app.get("/")
def home():
    return {"message": "ThreatLens Backend Running"}


@app.post("/analyze")
async def analyze_apk(file: UploadFile = File(...)):

    upload_dir = "uploads"
    output_dir = "decompiled"

    os.makedirs(upload_dir, exist_ok=True)
    os.makedirs(output_dir, exist_ok=True)

    apk_path = os.path.join(upload_dir, file.filename)

    with open(apk_path, "wb") as f:
        content = await file.read()
        f.write(content)

    filename = file.filename.lower()

    risk_score = 20
    findings = []

    # Keyword Analysis
    for keyword in DANGEROUS_KEYWORDS:
        if keyword in filename:
            risk_score += 10
            findings.append(f"Suspicious keyword detected: {keyword}")

    # APKTool Decompilation
    decompile_status = "Not Attempted"

    if filename.endswith(".apk"):
        try:
            apk_name = os.path.splitext(file.filename)[0]

            subprocess.run(
                [
                    "java",
                    "-jar",
                    r"C:\apktool\apktool_3.0.2.jar",
                    "d",
                    apk_path,
                    "-o",
                    os.path.join(output_dir, apk_name),
                    "-f"
                ],
                check=True
            )

            decompile_status = "Success"

        except Exception as e:
            decompile_status = f"Failed: {str(e)}"

    # VirusTotal Lookup
    vt_result = "Not Checked"
    vt_malicious = 0

    try:
        sha256_hash = hashlib.sha256(content).hexdigest()

        headers = {
            "x-apikey": VT_API_KEY
        }

        url = f"https://www.virustotal.com/api/v3/files/{sha256_hash}"

        response = requests.get(url, headers=headers)

        if response.status_code == 200:

            data = response.json()

            stats = data["data"]["attributes"]["last_analysis_stats"]

            vt_malicious = stats.get("malicious", 0)

            vt_result = "Found"

            risk_score += min(vt_malicious * 5, 40)

            findings.append(
                f"VirusTotal malicious detections: {vt_malicious}"
            )

        else:
            vt_result = "File not found in VirusTotal"

    except Exception as e:
        vt_result = f"Error: {str(e)}"

    # Verdict
    if risk_score >= 70:
        verdict = "High Risk"
    elif risk_score >= 40:
        verdict = "Suspicious"
    else:
        verdict = "Safe"

    return {
        "filename": file.filename,
        "risk_score": risk_score,
        "verdict": verdict,
        "decompile_status": decompile_status,
        "virustotal_status": vt_result,
        "virustotal_malicious_count": vt_malicious,
        "findings": findings
    }