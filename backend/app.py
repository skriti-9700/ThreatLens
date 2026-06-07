from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.get("/")
def home():
    return {"message": "ThreatLens Backend Running"}

@app.post("/analyze")
async def analyze_apk(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "status": "uploaded successfully",
        "risk_score": 78,
        "verdict": "Suspicious"
    }