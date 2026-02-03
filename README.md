# Golden Intelligence

A high-fidelity minimalist portfolio engineered for performance and visual depth. This project focuses on distinctive typography, fluid motion, and hardware-accelerated graphics to deliver a refined user experience.

![Next.js](https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=flat-square&logo=tailwind-css)

---

## Architecture & Design System

The application is built on a composable architecture where visual fidelity meets technical precision. The design system prioritizes content legibility while maintaining an encompassing ambient atmosphere.

### 1. Motion Nuances
Fluidity is achieved not through CSS transitions alone, but through physics-based rendering.
-   **Inertia Scrolling**: Implemented via `@studio-freight/lenis`. This replaces the default browser scroll with a momentum-based system, normalizing the experience across distinct input devices (trackpad vs. mouse).
-   **Orchestrated Entry**: Uses `framer-motion` for stagger-based component reveals. Elements do not simply appear; they translate into view based on scroll velocity and viewport intersection.

### 2. The Visual Core (WebGL)
The background is not a static video or GIF. It is a live simulation.
-   **Component**: `LiquidEther.tsx` / `ColorBends.tsx`
-   **Implementation**: Utilizes **OGL** (a minimal WebGL library) or **Three.js** logic to compute fluid dynamics in real-time. It renders a mesh that deforms based on perlin noise and time variables, creating a non-repeating, organic liquid effect that runs on the GPU.

### 3. Glassmorphism & Surface Material
UI components rely on optical layering rather than solid opacity.
-   **Component**: `Navbar.tsx` / `GlassCard`
-   **Technique**: heavily utilizes `backdrop-filter: blur()` combined with semi-transparent white/black layers (`bg-white/5`). This mimics frosted glass, ensuring content remains legible while preserving context of the background movement.

---

## Key UI Components

A breakdown of the specialized components engineered for this project:

| Component | Function & Implementation |
| :--- | :--- |
| **`LiquidEther`** | **Core Background.** A WebGL canvas handling the fluid distortion effect. It manages its own render loop outside of React's main cycle for maximum frame rate. |
| **`DeepOceanBubbles`** | **Ambient Interaction.** A particle system where "bubbles" rise and react to cursor proximity. Implemented using canvas drawing for performance over DOM nodes. |
| **`LuxuryNavbar`** | **Navigation.** A floating dock that detects scroll direction. It hides on scroll-down to maximize view area and reappears on scroll-up. |
| **`SignatureName`** | **Branding.** A simplified SVG path animation that mimics handwriting, serving as a unique digital signature. |
| **`ProjectCards`** | **Grid Layout.** Interactive cards featuring 3D tilt effects or scale-on-hover. They utilize `transform: translateZ` to enforce hardware acceleration. |

---

## Tech Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Server-side rendering for immediate First Content Paint (FCP) and robust routing. |
| **Language** | **TypeScript** | Strict type safety to prevent runtime errors in complex aesthetic logic. |
| **Styling** | **Tailwind CSS v4** | Atomic CSS engine for rapid, co-located styling without bundle bloat. |
| **Motion** | **Framer Motion** | Declarative animation library for complex layout transitions and gesture handling. |
| **3D/Canvas** | **OGL / React-Three-Fiber** | Lightweight WebGL bindings for the background fluid simulation. |
| **Scrolling** | **Lenis** | smooth scroll normalization library. |

---

## Setup & Deployment

### Local Development
Clone the repository and install dependencies to start the local development server.

```bash
npm install
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production
Create an optimized production build.

```bash
npm run build
npm start
```
This compilation step ensures all assets are minified and static pages are pre-rendered.

### Deployment
This project is configured for seamless deployment on **Vercel**.
1. Import repository.
2. Framework preset: **Next.js**.
3. Deploy.
