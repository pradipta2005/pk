"use client";
import React, { useEffect, useRef } from "react";

export default function DeepOceanAndBubbles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Mouse state with history for smooth trails
        const mouse = { x: -1000, y: -1000, pX: -1000, pY: -1000, vX: 0, vY: 0 };

        // Configuration
        const CONFIG = {
            particleCount: Math.min(Math.floor((width * height) / 12000), 100),
            connectionRadius: 150,
            mouseForce: 0.05,
            friction: 0.96
        };

        interface Particle {
            x: number;
            y: number;
            r: number;
            vx: number;
            vy: number;
            baseAlpha: number;
            color: string;
            isGold: boolean;
        }

        let particles: Particle[] = [];

        const initParticles = () => {
            particles = [];
            const count = CONFIG.particleCount;
            for (let i = 0; i < count; i++) {
                const isGold = Math.random() > 0.8; // 20% are luxury gold bubbles
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 2 + 0.5,
                    vx: 0,
                    vy: Math.random() * -0.5 - 0.1, // Slow upward drift
                    baseAlpha: Math.random() * 0.4 + 0.1,
                    color: isGold ? "212, 175, 55" : "100, 200, 255", // Gold vs Cyan
                    isGold: isGold
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.pX = mouse.x;
            mouse.pY = mouse.y;
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Calculate mouse velocity for "throwing" particles
            mouse.vX = mouse.x - mouse.pX;
            mouse.vY = mouse.y - mouse.pY;
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        // Sonar Pulses
        let pulses: { x: number; y: number; r: number; alpha: number }[] = [];

        const handleClick = (e: MouseEvent) => {
            pulses.push({
                x: e.clientX,
                y: e.clientY,
                r: 10,
                alpha: 0.8
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleClick); // Add click listener
        window.addEventListener("resize", handleResize);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // 1. Clear Canvas
            ctx.clearRect(0, 0, width, height);

            // Background is now handled by CSS to save GPU cycles

            // 2. Draw "Divine Light" from Cursor
            const glow = ctx.createRadialGradient(
                mouse.x, mouse.y, 0,
                mouse.x, mouse.y, 180
            );
            glow.addColorStop(0, "rgba(212, 175, 55, 0.15)");
            glow.addColorStop(0.5, "rgba(0, 255, 255, 0.05)");
            glow.addColorStop(1, "transparent");

            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, width, height);
            ctx.restore();

            // 3. Draw Sonar Pulses
            for (let i = 0; i < pulses.length; i++) {
                const p = pulses[i];
                p.r += 3; // Expand
                p.alpha -= 0.015; // Fade

                if (p.alpha <= 0) {
                    pulses.splice(i, 1);
                    i--;
                    continue;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(0, 255, 255, ${p.alpha * 0.5})`;
                ctx.lineWidth = 2;
                ctx.stroke();

                // Inner Gold Ring
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * 0.8, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(212, 175, 55, ${p.alpha * 0.3})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // 4. Update & Draw Particles
            particles.forEach(p => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Check pulse interaction
                pulses.forEach(pulse => {
                    const dPulse = Math.abs(dist - pulse.r);
                    if (dPulse < 20) {
                        // Push particles out with pulse
                        const angle = Math.atan2(p.y - pulse.y, p.x - pulse.x);
                        p.vx += Math.cos(angle) * 0.5;
                        p.vy += Math.sin(angle) * 0.5;
                    }
                });

                // --- PREMIUM PHYSICS: Fluid Swirl ---
                if (dist < CONFIG.connectionRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (CONFIG.connectionRadius - dist) / CONFIG.connectionRadius;

                    // A. Attraction
                    const attractionStrength = 0.02;
                    p.vx += Math.cos(angle) * force * attractionStrength;
                    p.vy += Math.sin(angle) * force * attractionStrength;

                    // B. Rotation
                    const rotStrength = 0.5;
                    p.vx += -Math.sin(angle) * force * rotStrength;
                    p.vy += Math.cos(angle) * force * rotStrength;

                    // C. Connection Lines
                    if (p.isGold || dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(${p.color}, ${force * 0.4})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }

                    p.r = Math.min(p.r + 0.2, 4);
                } else {
                    p.r = Math.max(p.r - 0.1, Math.random() * 2 + 0.5);
                }

                // Physics update
                p.x += p.vx;
                p.y += p.vy;

                // Friction
                p.vx *= CONFIG.friction;
                p.vy = (p.vy * CONFIG.friction) - 0.02;

                // Bounds wrap
                if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;

                // Draw Particle
                // Fast Glow Effect (Replacing expensive shadowBlur)
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${p.color}, 0.2)`;
                    ctx.fill();
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.baseAlpha + (dist < 200 ? 0.4 : 0)})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        initParticles();
        const animId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleClick);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <>
            {/* Static Background Gradient (CSS) - Removes load from Canvas */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,20,40,0.4)_0%,_rgba(0,5,10,0.8)_100%)] z-0 pointer-events-none" />

            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
                style={{ width: "100%", height: "100%" }}
            />
        </>
    );
}
