"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { BadgeCheck, Award, FileBadge, ShieldCheck } from "lucide-react";
import React, { MouseEvent } from "react";

const certifications = [
    {
        title: "TATA Data Visualization",
        organization: "Forage",
        year: "2024",
        type: "Professional Simulation",
        icon: Award,
        description: "Mastered the art of translating complex datasets into compelling business narratives using advanced BI tools.",
        color: "from-blue-400 to-cyan-300"
    },
    {
        title: "Deloitte Australia Data Analytics",
        organization: "Forage",
        year: "2025",
        type: "Strategic Analysis",
        icon: ShieldCheck,
        description: "Executed high-level strategic problem solving in simulated real-world scenarios, optimizing data-driven decision making.",
        color: "from-green-400 to-emerald-300"
    },
    {
        title: "Effective Writing",
        organization: "NPTEL (IIT Roorkee)",
        year: "2023",
        type: "Academic Excellence",
        icon: FileBadge,
        description: "Refined technical communication skills, ensuring clarity, precision, and rhetorical impact in professional documentation.",
        color: "from-purple-400 to-pink-300"
    },
    {
        title: "Problem Solving Through Programming in C",
        organization: "NPTEL (IIT Kharagpur)",
        year: "2023",
        type: "Core Engineering",
        icon: BadgeCheck,
        description: "Deepened understanding of algorithmic thinking, memory management, and low-level system optimization.",
        color: "from-orange-400 to-red-300"
    },
];

export default function Certifications() {
    return (
        <div className="w-full py-24 relative z-10 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
                >
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-px w-8 bg-gold" />
                            <span className="text-gold tracking-[0.4em] font-medium text-xs uppercase">Hall of Credentials</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-serif text-white leading-none">
                            Verified <br />
                            <span className="italic text-white/20">Excellence.</span>
                        </h2>
                    </div>
                    <p className="text-white/50 text-lg max-w-md font-light leading-relaxed text-right md:text-left">
                        A curated vault of professional validations, underscoring a commitment to continuous mastery and technical precision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                    {certifications.map((cert, index) => (
                        <PremiumCertCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function PremiumCertCard({ cert, index }: { cert: any; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            onMouseMove={handleMouseMove}
            className="group relative h-full min-h-[320px] rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden"
        >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

            {/* Hover Spotlight Reveal */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-10 bg-white/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500"
                style={style}
            />

            <div className="relative z-20 p-8 md:p-12 h-full flex flex-col justify-between">

                {/* Top Section */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                        <span className={`inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${cert.color}`}>
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cert.color}`} />
                            {cert.type}
                        </span>
                        <h3 className="text-3xl font-serif text-white group-hover:text-gold transition-colors duration-300">
                            {cert.title}
                        </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 bg-white/5 group-hover:scale-110 group-hover:border-gold/50 group-hover:text-gold transition-all duration-500">
                        <cert.icon className="w-5 h-5" />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8">
                    <p className="text-white/60 font-light leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                        {cert.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase text-white/30 tracking-wider">Issued By</span>
                            <span className="text-sm font-medium text-white">{cert.organization}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] uppercase text-white/30 tracking-wider">Date</span>
                            <span className="text-sm font-mono text-gold">{cert.year}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Active Border */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-gold/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
        </motion.div>
    );
}
