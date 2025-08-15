# Email Service (Serverless Framework)

This project is a REST API built with the Serverless Framework that sends emails using Nodemailer.  
It runs **offline** for local development.

---

## 🚀 Features
- Send emails via a POST request.  
- Accepts the following fields in JSON:
  - `receiver_email` – Recipient email address  
  - `subject` – Email subject  
  - `body_text` – Email body  
- Returns proper HTTP status codes:
  - `200` – Email sent successfully  
  - `400` – Missing required fields or invalid JSON  
  - `500` – Internal server error  
- Works locally using `serverless-offline`.

---

## 📦 Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd email-service

2. Install dependencies:

npm install

3. (Optional) Setup environment variables if you integrate a real email service:

Create a .env file in the project root:

EMAIL_USER=youremail@gmail.com
EMAIL_PASS=yourapppassword


⚠️ Make sure “Less Secure Apps” is off and use an App Password if 2FA is enabled on Gmail.

▶️ Run Offline
serverless offline


The API will start at:

http://localhost:3000/send


📮 Example Request (cURL)
curl -X POST http://localhost:3000/send \
-H "Content-Type: application/json" \
-d '{
  "receiver_email": "receiver@example.com",
  "subject": "Hello",
  "body_text": "This is a test email."
}'

---

## 🛠 Tech Stack

- Node.js

- Serverless Framework

- serverless-offline