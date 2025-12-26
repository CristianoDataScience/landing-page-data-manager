from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

# Allow CORS for the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    company: str
    message: str

@app.post("/api/contact")
async def contact_form_submission(form_data: ContactForm):
    # In a real application, you would send an email or save to a database here.
    print(f"New contact form submission:")
    print(f"Name: {form_data.name}")
    print(f"Email: {form_data.email}")
    print(f"Company: {form_data.company}")
    print(f"Message: {form_data.message}")
    
    return {"status": "success", "message": "Contact form received."}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
