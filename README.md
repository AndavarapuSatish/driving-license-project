# Driving License Management System (DLMS)

A full-stack web application that digitizes and automates the complete Driving License process — from Learner's License application to Driving License issuance, renewal, and download.

## 🔗 Live Demo
> Coming soon

---

## 📌 Project Overview

This system simulates the end-to-end government Driving License workflow with separate portals for Users and Admins. It covers eligibility checks, eKYC via Aadhaar, document uploads, online payments, written exams, driving skill tests, and digital license card generation with QR codes.

---

## ✨ Features

### User Portal
- **Aadhaar-based eKYC** — eligibility check and auto-fill of personal details from Aadhaar database
- **Account registration** with password strength validation and CAPTCHA
- **Forgot password** with OTP verification via email
- **Learner's License (LL) Application** — form submission, signature upload, live photo capture via webcam
- **Online payment** with GST calculation, QR code generation, and email receipt
- **LL Exam** — 20-question timed quiz (20 minutes), auto-evaluated with pass/fail email notification
- **Digital LL Card** — downloadable front/back card with QR code embedded with user details
- **LL Renewal** — expiry check, payment, and renewed card download
- **DL Application** — one-month LL validity check before proceeding
- **DL Slot Booking** — date/time slot selection with confirmation email
- **Driving Skill Test** — admin-evaluated checklist with email notification
- **Digital DL Card** — downloadable front/back card with QR code and photo
- **DL Renewal** — expiry check, payment, and renewed card download

### Admin Dashboard
- **Summary metrics** — LL pending/completed, DL pending/completed, today's slot count
- **User management** — view all registered users
- **LL Applications** — view, verify, or reject with reason (incorrect data, signature issue, photo issue)
- **Exam credentials** — auto-generate exam ID and password on verification, sent via email
- **Exam status** — track passed and failed candidates
- **Payment tracking** — LL and DL fee records
- **DL process management** — driving skill test evaluation per candidate
- **Response forms** — embedded Google Sheets for payment verification

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | HTML5, CSS3, JavaScript, jQuery, Bootstrap 5 |
| Backend | Node.js, Express.js |
| Database | MongoDB (via MongoClient + Mongoose) |
| Email | SMTP.js (automated email notifications) |
| File Handling | Multer (signature and photo uploads as binary) |
| QR Code | QRious.js (embedded in license cards) |
| PDF Export | html2pdf.js |
| Authentication | LocalStorage sessions, OTP via email |

---

## 🗄️ Database Collections

| Collection | Purpose |
|-----------|---------|
| `tbl_main` | Aadhaar master data (eKYC source) |
| `tbl_Users` | Registered user accounts |
| `tbl_LLForm` | Learner's License application data |
| `tbl_Uploads` | Signature images (binary) |
| `tbl_CapturedPhoto` | Webcam-captured user photos (binary) |
| `tbl_feesPayment` | LL fee payment records |
| `tbl_examDetails` | Exam credentials (verified users) |
| `tbl_examNotVerifiedUsers` | Rejected applications with reason |
| `tbl_examStatus` | Passed exam records with unique LL ID |
| `tbl_failedUserDetails` | Failed exam records |
| `tbl_quizQuestions` | LL exam question bank |
| `tbl_DLSlotBookings` | DL driving test slot bookings |
| `tbl_DLFeePayment` | DL fee payment records |
| `tbl_DLCapturedPhoto` | DL process webcam photos (binary) |
| `tbl_DLDetails` | Issued DL records with DL number |
| `tbl_LLrenew` | LL renewal records |
| `tbl_DLrenewDetails` | DL renewal records |
| `tbl_admin` | Admin credentials |

---

## 🔄 Application Flow

```
User Registration (Aadhaar eKYC)
        ↓
LL Application Form + Signature Upload + Photo Capture
        ↓
Fee Payment (GST calculated, QR code, email receipt)
        ↓
Admin Verification → Exam Credentials sent via email
        ↓
Online LL Exam (20 questions, 20-minute timer)
        ↓
Pass → Download LL Card (valid 6 months)
Fail → Re-exam after 7 days
        ↓
After 1 month → DL Application
        ↓
Slot Booking → Driving Skill Test at RTO
        ↓
DL Fee Payment + Photo Capture
        ↓
Download DL Card (valid 15 years)
        ↓
Renewal available when expired
```

---

## 📧 Automated Email Notifications

The system sends automated emails at every key step:

- Account registration confirmation
- LL application reference number
- LL payment receipt with reference number
- Exam credentials (ID + password) after admin verification
- Application rejected notification with reason
- LL exam pass — unique LL ID + validity dates
- LL exam fail — retry instructions
- DL slot booking confirmation with reference number
- Driving skill test pass/fail notification
- DL payment receipt
- LL/DL renewal confirmation

---

## 📁 Project Structure

```
driving-license-project/
├── client/
│   └── public/
│       ├── index.html          # Login + eligibility check
│       ├── main.html           # LL/DL selection hub
│       ├── LL-application.html # LL form + uploads + photo
│       ├── payment.html        # LL fee payment
│       ├── exam.html           # Online LL exam
│       ├── license.html        # LL card preview
│       ├── lic.html            # LL card download
│       ├── llrenew.html        # LL renewal payment
│       ├── DL-application.html # DL slot booking + fee
│       ├── DL-Process.html     # Driving skill test (admin)
│       ├── DLlicense.html      # DL card preview
│       ├── DLlic.html          # DL card download
│       ├── dlrenew.html        # DL renewal payment
│       ├── admin-dashboard.html
│       ├── admin-dashboard.js
│       ├── css/
│       └── icons/
└── server/
    └── server.js               # Express backend + all API routes
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/AndavarapuSatish/driving-license-project.git
cd driving-license-project

# Install dependencies
cd server
npm install

# Start the server
node server.js
```

Server runs on `http://localhost:4000`

Open `client/public/index.html` in a browser (use Live Server or similar).

### Environment Variables (optional)
```
MONGODB_URI=mongodb://127.0.0.1:27017/Driving-License-Db
PORT=4000
```

---

## 📸 Key Screens

- Login / Eligibility Check / Registration
- LL Application Form (auto-filled from Aadhaar)
- Webcam photo capture
- Fee calculator with GST
- Online exam with countdown timer
- Digital license card (front + back, hover to flip)
- Admin dashboard with verification workflow

---

## 👨‍💻 Author

**Andavarapu Satish**
- GitHub: [@AndavarapuSatish](https://github.com/AndavarapuSatish)
- LinkedIn: [andavarapu-satish](https://linkedin.com/in/andavarapu-satish)
- Email: ssati753@gmail.com

---

## 📄 License

This project is for educational and portfolio purposes.
