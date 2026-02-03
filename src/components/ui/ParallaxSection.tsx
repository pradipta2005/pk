"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Particles from "./Particles";

interface ParallaxSectionProps {
    children: React.ReactNode;
    backgroundImage: string;
    id?: string;
    className?: string;
}

export default function ParallaxSection({ children, backgroundImage, id, className = "" }: ParallaxSectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect: Move background slower than content
    // We increase the height of the background container to allow for movement without showing whitespace
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    // Subtle scale effect for extra premium feel
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]);

    return (
        <section ref={ref} id={id} className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${className}`}>
            {/* Parallax Background */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 will-change-transform"
            >
                <div className="relative w-full h-full">
                    <Image
                        src={backgroundImage}
                        alt="Section Background"
                        fill
                        className="object-cover opacity-60"
                        priority={false}
                        quality={85}
                        sizes="100vw"
                    />
                    {/* Premium Overlays for Depth and Readability */}
                    <div className="absolute inset-0 bg-obsidian/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/50 to-obsidian" />

                    {/* Interactive Particles for "Alive" Feel */}
                    <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none">
                        <Particles
                            quantity={40}
                            staticity={50}
                            ease={50}
                            size={0.4}
                            color="#FFD700"
                            vx={0.05}
                            vy={0.05}
                        />
                    </div>
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </section>
    );
}
