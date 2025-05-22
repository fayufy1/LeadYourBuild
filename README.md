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
- [Acknowledgements](#-acknowledgements)
- [How to Add Courses in TalentLMS](#-how-to-add-courses-in-talentlms)
- [License](#-license)

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



