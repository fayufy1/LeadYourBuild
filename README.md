# 🏗️ LeadYourBuild

**A construction contract analysis web application** that empowers clients to better understand their building contracts, estimate costs, and upskill through structured learning — all from one place.

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fleadyourbuild.com.au)](https://leadyourbuild.com.au)
[![GitHub license](https://img.shields.io/github/license/fayufy1/LeadYourBuild)](LICENSE)
[![Made with Firebase](https://img.shields.io/badge/made%20with-Firebase-orange)](https://firebase.google.com/)
[![Deployed with Vercel](https://img.shields.io/badge/hosted%20on-Vercel-black)](https://vercel.com/)

---

## 🌐 Live Site

🔗 [https://leadyourbuild.com.au](https://leadyourbuild.com.au)

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Firebase & Auth](#-firebase--auth)
- [TalentLMS Integration](#-talentlms-integration)
- [Getting Started](#-getting-started)
- [Deployment on Vercel](#-deployment-on-vercel)
- [Folder Structure](#-folder-structure)
- [Project Roles](#-project-roles)
- [How to Add Courses in TalentLMS](#-how-to-add-courses-in-talentlms)

---

## 🧩 Overview

**LeadYourBuild** is a web platform that helps users:
- Analyze construction contracts using AI
- Access educational content on contracts
- Estimate pricing for building services
- Interact with a clean, secure sign-up/login system

The app was developed as part of an academic capstone project and is intended to support **builders, homeowners, legal consultants**, and industry stakeholders with practical digital tools.

---

## ✨ Features

✅ Firebase-authenticated login/signup system  
✅ Role-based access (Admin vs. Learner)  
✅ Google Reviews integration from Quod Architecture  
✅ Contract analyzer upload system  
✅ TalentLMS-powered online courses  
✅ Secure backend data handling  
✅ Mobile and responsive design  
✅ Hosting via GitHub + Vercel  
✅ Domain: `leadyourbuild.com.au`

---

## 🔧 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Authentication:** Firebase Authentication
- **Backend Storage:** Firebase Database
- **Hosting:** Vercel
- **Course Module:** [TalentLMS](https://www.talentlms.com/)
- **Version Control:** Git + GitHub

---

## 🔐 Firebase & Auth

The app uses Firebase to:

- **Securely store user credentials**
- Allow **only registered users** to access protected features
- Handle **email verification and input validation**

To configure Firebase:

1. Open `firebase-init.js`
2. Replace the existing config with your Firebase app credentials
3. Ensure API keys are stored securely (not exposed to frontend users)

> 🔐 _See the "Handover Guide" PDF in this repo for more details on managing Firebase credentials properly._

---

## 🎓 TalentLMS Integration

Courses on construction contract analysis are hosted through **TalentLMS**.

### Default Login Accounts:

- **Administrator Login**  
  - Email: `shamiben23@gmail.com`  
  - Password: `super1234`

- **Learner Login**  
  - Username: `graham`  
  - Password: `super1234`

Admins can create new courses and manage users. Learners can only access assigned training modules.

> 🎯 _We recommend creating your own TalentLMS admin account for full control going forward._

---

## 🚀 Getting Started

### 1. Clone this repository
```bash
git clone https://github.com/fayufy1/LeadYourBuild.git
cd LeadYourBuild    
```

---

## 🌍 Deployment on Vercel

To host the site on your own domain:

1. Push the full project to GitHub
2. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub
3. Click **“New Project”** and import your repo
4. After deploying, go to **Settings → Domains**
5. Add your custom domain (e.g., `leadyourbuild.com.au`)
6. Update DNS settings in your domain registrar (e.g., Hostinger):

```text
ns1.vercel-dns.com  
ns2.vercel-dns.com
```
## 🗂️ Folder Structure

| File/Folder          | Description                     |
|----------------------|---------------------------------|
| `index.html`         | Home page                       |
| `login.html`         | Login form                      |
| `signup.html`        | Sign-up form                    |
| `work.html`          | Contract Analyzer               |
| `lms.html`           | Learning modules                |
| `contact.html`       | Contact page                    |
| `analyzerHome.html`  | Analyzer dashboard              |
| `firebase-init.js`   | Firebase config                 |
| `auth-check.js`      | Auth session checker            |
| `app.js`             | Core application logic          |
| `script.js`          | UI interactivity                |
| `styles.css`         | Global styling                  |
| `README.md`          | Project documentation (this file) |


## 👥 Project Roles

| Team Member             | Role & Responsibility                                   |
|-------------------------|----------------------------------------------------------|
| **Fayaaz Chowdhury**    | Backend, Firebase Auth, LMS research/setup, security     |
| **Dharman Popat**       | Frontend design, login/signup integration                |
| **Fuad Ali**            | AI tool/API research, contract analyzer concept          |
| **Otto Appleton-Miles** | Project management, Trello, documentation, sprint setup  |


## 📘 How to Add Courses in TalentLMS

1. Visit [https://talentlms.com](https://talentlms.com) and log in with the **admin account**
2. Click on **"Courses"** in the top navigation
3. Select **"Add Course"**
4. Fill in the following details:
   - 📝 **Course Title**
   - 📂 **Course Category**
   - 🧾 **Course Description**
5. Add learning units such as:
   - 📄 **Text content**
   - 🎥 **Video lectures**
   - 🧠 **Quizzes**
   - 📁 **File downloads**
6. Go to the **Users** tab to create or assign learners
7. Click **"Save and Publish"**

> 💡 **Tip:** Admins can manage everything, while learners can only access the courses assigned to them.

