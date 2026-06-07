from fastapi import FastAPI, UploadFile, File

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
    "hack"
]


@app.get("/")
def home():
    return {"message": "ThreatLens Backend Running"}


@app.post("/analyze")
async def analyze_apk(file: UploadFile = File(...)):

    filename = file.filename.lower()

    risk_score = 20
    findings = []

    for keyword in DANGEROUS_KEYWORDS:
        if keyword in filename:
            risk_score += 10
            findings.append(f"Suspicious keyword detected: {keyword}")

    if risk_score >= 70:
        verdict = "High Risk"
    elif risk_score >= 40:
        verdict = "Suspicious"
    else:
        verdict = "Low Risk"

    return {
        "filename": file.filename,
        "risk_score": risk_score,
        "verdict": verdict,
        "findings": findings
    }