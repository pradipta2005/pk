"use client";
import React, { useRef, useEffect } from "react";

export default function WaterRipple() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Store ripples: x, y, radius, opacity, speed
        let ripples: { x: number; y: number; r: number; opacity: number; speed: number }[] = [];

        const addRipple = (x: number, y: number) => {
            ripples.push({
                x,
                y,
                r: 0,
                opacity: 0.6, // Start slightly transparent
                speed: 1 + Math.random() // Varied speed for realism
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Add ripple only occasionally on move to prevent chaos
            if (Math.random() > 0.9) {
                addRipple(e.clientX, e.clientY);
            }
        };

        const handleClick = (e: MouseEvent) => {
            addRipple(e.clientX, e.clientY);
            // Add a second smaller one for effect
            setTimeout(() => addRipple(e.clientX, e.clientY), 100);
        };

        // Auto-rain effect (random drops)
        const rainInterval = setInterval(() => {
            if (Math.random() > 0.95) {
                addRipple(Math.random() * width, Math.random() * height);
            }
        }, 100);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);
        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < ripples.length; i++) {
                const r = ripples[i];
                r.r += r.speed; // Expand
                r.opacity -= 0.005; // Fade slowly

                if (r.opacity <= 0) {
                    ripples.splice(i, 1);
                    i--;
                    continue;
                }

                // Draw standard ripple (Stroke)
                ctx.beginPath();
                ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255, 255, 255, ${r.opacity * 0.2})`; // White gloss
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Draw gold accent ripple (inner)
                ctx.beginPath();
                ctx.arc(r.x, r.y, r.r * 0.85, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(212, 175, 55, ${r.opacity * 0.15})`; // Subtle gold
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            requestAnimationFrame(animate);
        };

        const animId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            clearInterval(rainInterval);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay"
            style={{ width: "100%", height: "100%" }}
        />
    );
}
