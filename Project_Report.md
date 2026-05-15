# Project Report: InAmigos Foundation Digital UI Overhaul

**Date:** May 15, 2026  
**Project:** InAmigos Foundation Official Donation Website  
**Focus Area:** UI/UX Engineering & Frontend Development  

---

## 1. Executive Summary
The objective of this project was to revamp the digital donation interface for the **InAmigos Foundation** while remaining completely faithful to their established brand identity. The original website utilized a direct link to Razorpay without a dedicated, trustworthy landing page. This project successfully delivered a highly professional single-page application (SPA) that acts as an integrated Donation Hub.

## 2. UI/UX Strategy & Design Decisions

### A. Color Psychology & Brand Accuracy
- **Primary Brand Color (Vibrant Green - #00CC83):** Through DOM analysis of the official site, this exact hex code was extracted and implemented exclusively for Calls to Action (CTAs) and active states to perfectly match the real InAmigos branding.
- **Secondary Color (Dark Theme - #1E1F26):** Used for typography, footers, and secondary UI elements to match their official stylesheets.
- **Typography:** The modern but highly readable combination of `'Quicksand'` and `'Poppins'` was utilized across all headers and paragraph text, explicitly mirroring the original site's font-family declarations.

### B. Visual Asset Enhancement
- **Removal of Emojis:** Standard emojis were removed from the platform to maintain a corporate and highly professional standard.
- **Integration of SVGs:** Custom, scalable vector graphics (SVGs) were thoughtfully chosen for the foundation's 6 core initiatives to ensure resolution independence and fast load times.

### C. Layout Architecture (The Rubric)
The architecture rigorously follows the required structural rubric while preserving the traditional NGO aesthetic:
1. **Homepage / Hero:** Classic full-width hero banner featuring the organization's mission statement and direct action buttons.
2. **About Us:** Details the founder's mission (Mr. Govind Shukla) and vital NGO certifications (80G/12A/CSR-1) using the organization's official verbatim text.
3. **Services:** A 6-card grid layout detailing Project Sewa, Bachpanshala, Jeev, Udaan, Prakriti, and Vikas.
4. **Donation Section:** Dedicated interactive payment simulation with preset amounts.
5. **Contact Page:** Accessible communication form with headquarters information.
6. **Additional Sections:** A dedicated "Volunteer" pipeline integrating directly with Google Forms.

## 3. Project Documentation (README)
*As requested, below are the complete details of the project's README file to be preserved within this report:*

---

### InAmigos Foundation - Official Donation Website

**Overview:**
A premium, modern, and completely faithful landing page designed for the InAmigos Foundation. This project was developed as a comprehensive solution to streamline the donation process while beautifully showcasing the NGO's core initiatives and certifications.

**🌟 Features:**
- **100% Brand Accuracy:** Matches the official InAmigos Foundation theme perfectly (Vibrant Green `#00CC83` & Dark Theme `#1E1F26`).
- **Classic NGO Architecture:** Features a full-width hero banner and dedicated sections mapped identically to the original website's content flow.
- **Interactive Causes Grid:** Features all 6 authentic core initiatives using clean, professional SVG vector graphics instead of generic emojis.
- **Trust Indicators & Verbatim Text:** Prominently displays 80G, 12A, NITI Aayog, and ISO 9001:2015 certifications alongside the official founding text.
- **Razorpay Integration Simulation:** A fully styled form that calculates the donation amount and seamlessly prepares for Razorpay payment processing.

**🛠️ Technology Stack:**
- **HTML5:** Semantic architecture for accessibility and SEO.
- **CSS3:** Custom properties (CSS Variables) matching the exact InAmigos stylesheet.
- **Vanilla JavaScript:** Handles the interactive donation amount selection, smooth scrolling, and form submission state changes.

**🚀 How to Run Locally:**
1. Clone or download this repository.
2. Open the `index.html` file in any modern web browser.
3. No backend server or build process is required!

---

## 4. Conclusion
The newly developed InAmigos Donation Website represents a significant upgrade in digital professionalism. By focusing on authentic brand adherence, clean typography, and seamless interaction design, the platform is now highly optimized for engagement, volunteering, and secure lead generation while staying completely true to the foundation's original aesthetic.
