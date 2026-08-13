# 🌟 QSSC³ 2026 — Educational Time Structuring & Gamified Web Platform

> **A High-Performance Web Application Built on Cognitive Ergonomics, Time Structuring & Gamified Engagement**  
> *Developed for University of Algiers 1 - Faculty of Sciences (Quanta Club)*

[![Live Web Application](https://img.shields.io/badge/Live%20Demo-Firebase%20Hosting-0284c7?style=for-the-badge&logo=firebase)](https://qssc3-d300f.web.app)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Architecture](https://img.shields.io/badge/Architecture-Single%20Page%20App-purple?style=for-the-badge)](https://qssc3-d300f.web.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📌 Platform Overview & Core Vision

**QSSC³ 2026** (Quanta Club Summer Camp 3rd Edition) is a modern, single-page educational web platform engineered to transform intensive STEM camps into a structured, engaging, and predictable digital experience.

Large-scale events frequently struggle with **cognitive overload, scheduling disorientation, and participant disengagement**. This platform addresses these challenges through **cognitive ergonomics, temporal anchoring, and gamified progress tracking**.

---

## 🎨 Design System & Visual Ergonomics

* **Voxel & Dark Glassmorphism Aesthetic**: Deep midnight navy blue (`#023047`) combined with high-contrast amber gold (`#FFB703`) and vibrant cyan (`#0284c7`) visual accents.
* **Responsive Mobile-First Architecture**: Custom-built responsive layouts optimized for smartphone viewports and desktop displays.
* **Micro-Animations & Micro-Interactions**: Smooth state transitions, interactive card hover effects, and real-time rank updates to foster user engagement.

---

## 🎯 Key Platform Modules

1. **Gamified XP Leaderboard & Ranking System**:
   * Tracks participant progress across 10 interactive STEM workshop modules.
   * Visual badge indicators for Top Champions (1st, 2nd, 3rd Place) and Top 10 distinction tiers.
2. **Temporal Workshop Timeline & Interactive Agenda**:
   * Structured 10-day event calendar dividing complex subjects into predictable daily milestones:
     * **Day 1**: Introduction to STEM & Calculator Beat
     * **Day 2**: Scientific Content Creation & Career Building
     * **Day 3**: Robotics 101 & Hardware Interfacing
     * **Day 5**: Healthy Food & Medical Diagnosis
     * **Day 6**: Beekeeping, Bee Anatomy & Botany 101
     * **Day 8**: Vibe Coding 101 & AI Tools
     * **Day 9**: Introduction to 3D Printing & Additive Manufacturing
     * **Day 10**: The Central Science in Action (Chemistry)
3. **Digital Certificate Verification Portal**:
   * Real-time verification engine allowing instant validation of official credentials via unique certificate hashes.
4. **Interactive Administrative Management Panel**:
   * Integrated controls for real-time schedule management, XP updates, and portal system monitoring.

---

## 🛠️ Tech Stack & Technologies

* **Frontend Engine**: HTML5, Vanilla CSS3 Custom Properties, React 18, `@babel/standalone`.
* **Hosting Infrastructure**: Firebase Hosting with global CDN edge caching.
* **Performance**: Lightweight client-side bundling, fast page load speeds, optimized asset rendering.

---

## 📁 Repository Structure

```
GITHUB_REPO/
├── public/                            # Web application static assets, styles & scripts
│   ├── index.html                     # Core Single Page Application HTML entry point
│   ├── asset-calendar.png             # UI icons & assets
│   ├── asset-chemistry.png
│   ├── asset-microscope.png
│   └── asset-team.png
├── .firebaserc                        # Firebase target project mapping
├── firebase.json                      # Firebase Hosting configuration & rewrite rules
├── package.json                       # Project dependencies & build configurations
└── README.md                          # Platform documentation
```

---

## 🚀 Getting Started & Local Development

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/QSSC3-2026.git
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

## 📜 Accreditation & Live Demo

* **Live Platform URL**: [https://qssc3-d300f.web.app](https://qssc3-d300f.web.app)
* **Organization**: Quanta Club — Faculty of Sciences, University of Algiers 1
* **Event**: Quanta Club Summer Camp 3rd Edition (QSSC³ 2026)
