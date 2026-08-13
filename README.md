# ⛏️ QSSC³ 2026 — Gamified Educational Platform & Time Structuring System

> **An Immersive Voxel-Styled Educational Web Ecosystem Built on Behavioral Psychology, XP Gamification & Operational Management**  
> *Developed for University of Algiers 1 - Faculty of Sciences (Quanta Club)*

[![Live Web Application](https://img.shields.io/badge/Live%20Demo-Firebase%20Hosting-0284c7?style=for-the-badge&logo=firebase)](https://qssc3-d300f.web.app)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Architecture](https://img.shields.io/badge/Style-Minecraft%20Voxel-green?style=for-the-badge)](https://qssc3-d300f.web.app)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](LICENSE)

---

## 📌 High-Level Platform Overview & Purpose

**QSSC³ 2026** (Quanta Club Summer Camp 3rd Edition) is a full-stack educational web portal designed to transform intensive academic summer camps into an organized, highly motivating, and gamified digital adventure.

Traditional educational camps often encounter **participant burnout, unequal engagement, and administrative overhead**. QSSC³ solves these challenges by unifying **User (Student) Engagement** and **Admin (Management) Control** into a seamless, voxel-styled digital atmosphere.

---

## 🎮 The Minecraft / Voxel Aesthetic & Design Ergonomics

Instead of intimidating, sterile academic interfaces, QSSC³ adopts a nostalgic, vibrant **Minecraft & Voxel Visual Language**:

* **Playful Immersiveness**: Dark navy backgrounds (`#023047`) paired with pixelated block icons, glowing amber gold highlights (`#FFB703`), and vibrant cyan accents (`#0284c7`).
* **Lowering Cognitive Barriers**: The familiar, game-like design language reduces academic intimidation, making complex STEM concepts, coding, and scientific challenges feel like quest levels.
* **Micro-Animations & Visual Haptics**: Interactive card hover states, pulsing XP counters, and animated badge unlocks provide continuous tactile feedback.

---

## 🧠 Behavioral Psychology & Gamification Architecture

The core of QSSC³ is built around **Behavioral Psychology and Self-Determination Theory (Autonomy, Competence, and Relatedness)**:

### 1. Experience Points (XP) & Positive Feedback Loops
* Every workshop activity, challenge, and daily quiz rewards participants with **Experience Points (XP)**. 
* Instant feedback triggers dopamine release and establishes an intrinsic desire to learn and participate actively.

### 2. Low-Stakes Interactive Quizzes
* Rather than stressful high-stakes exams, participants engage in interactive, gamified quizzes. This shifts the psychological mindset from "test anxiety" to "quest progression".

### 3. Gamified Reward Badges & Leaderboard
* Live rank progression (Top Champions & Distinction Badges) provides clear status recognition while fostering healthy team motivation and collective pride ("The QSSC Family").

---

## 🖥️ Platform Modules & Tab Breakdown

QSSC³ is split into two specialized hubs: the **Participant Portal** and the **Admin Control Dashboard**.

### 👤 1. Participant Portal (Student Hub)
* **Dashboard & Quest Overview**: Real-time personal XP counter, current rank placement, and quick access to daily activities.
* **Live XP Leaderboard**: Dynamic ranking board showing overall standings, top performers, and badge achievements.
* **Interactive Quizzes & Challenges**: Embedded quiz modules where students answer questions, receive instant scoring, and earn XP rewards.
* **Event Schedule & Timeline**: Structured daily rhythm outlining upcoming sessions, locations, and interactive workshops.
* **Certificate Verification Portal**: Self-service portal where participants can view, verify, and download their official credential certificates.

### ⚙️ 2. Admin Control Dashboard (Management Hub)
* **Attendance & Roster Management**: Real-time logging of daily participant check-ins and session presence.
* **XP & Score Dispatcher**: Admin control panel for awarding bonus XP, adjusting quiz scores, and updating leaderboard rankings in real time.
* **Quiz Creator & Auto-Grader**: Interface for publishing daily quiz challenges and configuring instant automated grading rules.
* **Participant Database & Access Control**: Centralized overview of participant profiles, distinction awards, and system permissions.
* **Certificate Management System**: Administrative suite for bulk generating, validating, and issuing official digital certificates.

---

## 🛠️ Tech Stack & Infrastructure

* **Frontend Engine**: HTML5, Vanilla CSS3 Custom Properties, React 18, `@babel/standalone`.
* **Hosting Infrastructure**: Firebase Hosting with global CDN edge caching.
* **Architecture**: Single Page Application (SPA) with responsive mobile-first layouts.

---

## 📁 Repository Structure

```
GITHUB_REPO/
├── public/                            # Web application static assets, voxel styles & icons
│   ├── index.html                     # Main Single Page Application HTML entry point
│   ├── asset-calendar.png             # Voxel UI icons & graphics
│   ├── asset-chemistry.png
│   ├── asset-microscope.png
│   └── asset-team.png
├── .firebaserc                        # Firebase target project mapping
├── firebase.json                      # Firebase Hosting configuration & rewrite rules
├── package.json                       # Dependencies & scripts
└── README.md                          # Platform documentation
```

---

## 🚀 Getting Started & Local Development

### 1. Clone the Repository
```bash
git clone https://github.com/ayoubsarri/QSSC3-2026.git
cd QSSC3-2026
```

### 2. Install Dependencies & Run Development Server
```bash
npm install
npm run dev
```

### 3. Deploy to Firebase Hosting
```bash
npx firebase-tools deploy --only hosting
```

---

## 📜 Accreditation & Live Platform

* **Live Demo Portal**: [https://qssc3-d300f.web.app](https://qssc3-d300f.web.app)
* **Organization**: Quanta Club — Faculty of Sciences, University of Algiers 1
* **Event**: Quanta Club Summer Camp 3rd Edition (QSSC³ 2026)
