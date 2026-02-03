"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2 } from "lucide-react";
import DeepOceanAndBubbles from "./ui/DeepOceanAndBubbles";
import { PremiumReveal } from "./ui/PremiumReveal";
import ParallaxHeading from "./ui/ParallaxHeading";
import TiltCard from "./ui/TiltCard";
import MagneticButton from "./ui/MagneticButton";

const experiences = [
    {
        company: "ZIDIO Development",
        role: "Data Science Intern",
        period: "Aug 2024 – Nov 2024",
        type: "Remote",
        description: [
            "Analyzed structured datasets to generate insights supporting project and business decisions.",
            "Built and evaluated supervised machine learning models for prediction use cases.",
            "Improved data quality through preprocessing, validation, and feature engineering."
        ]
    },
    {
        company: "Next24Tech",
        role: "Data Science Intern",
        period: "Mar 2024 – May 2024",
        type: "Remote",
        description: [
            "Conducted exploratory data analysis (EDA) to identify trends, patterns, and anomalies.",
            "Presented insights using clear visualizations and concise stakeholder-friendly summaries."
        ]
    },
    {
        company: "CodesOnBytes",
        role: "Data Science Intern",
        period: "Sep 2023 – Oct 2023",
        type: "Remote",
        description: [
            "Transformed raw datasets into structured insights through analysis and visualization."
        ]
    }
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="w-full min-h-screen py-40 relative z-10 px-4 md:px-0 flex flex-col justify-center">

            {/* Deep Ocean Atmosphere - Now Golden Ether */}
            <div className="absolute inset-0 z-0">
                <DeepOceanAndBubbles />
            </div>

            <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10">

                {/* Floating Header */}
                <div className="mb-40 flex flex-col items-center">
                    <PremiumReveal direction="up">
                        <span className="text-gold/80 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 inline-block border border-gold/30 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md">
                            Career Limits: None
                        </span>
                    </PremiumReveal>

                    <PremiumReveal delay={0.1} type="text-mask">
                        <ParallaxHeading speed={0.4}>
                            <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tight relative z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                                Deep <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">Impact.</span>
                            </h2>
                        </ParallaxHeading>
                    </PremiumReveal>
                </div>

                {/* The Abyssal Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Depth Line (Golden Thread) */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2 z-0">
                        <div className="h-full w-full bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0" />
                    </div>

                    <div className="space-y-32">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-10 md:gap-20 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Glowing Core Node - Magnetic Interaction */}
                                <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-[15px] md:-translate-x-1/2 flex items-center justify-center z-10">
                                    <PremiumReveal delay={0.2 + index * 0.1} type="fade">
                                        <MagneticButton strength={0.3}>
                                            <div className="relative flex items-center justify-center cursor-pointer group/node">
                                                <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.8)] animate-pulse group-hover/node:scale-150 transition-transform duration-300" />
                                                <div className="absolute w-12 h-12 rounded-full border border-gold/20 animate-ping-slow" />
                                                <div className="absolute w-24 h-24 bg-gold/5 rounded-full blur-xl opacity-0 group-hover/node:opacity-100 transition-opacity duration-500" />
                                            </div>
                                        </MagneticButton>
                                    </PremiumReveal>
                                </div>

                                {/* Glass Prism Card with 3D Tilt */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 group ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <PremiumReveal
                                        direction={index % 2 === 0 ? "left" : "right"}
                                        delay={index * 0.1}
                                        width="100%"
                                    >
                                        <TiltCard className="rounded-2xl">
                                            <div className={`relative p-8 md:p-12 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-gold/30 transition-all duration-700 backdrop-blur-md hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] overflow-hidden h-full group/card`}>

                                                {/* Wet Shimmer Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-y-full group-hover/card:translate-y-[-100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                                                {/* Role & Company */}
                                                <div className="relative z-10 mb-8">
                                                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 group-hover/card:text-gold transition-colors duration-500">
                                                        {exp.role}
                                                    </h3>
                                                    <div className={`flex items-center gap-3 text-gold/60 text-sm font-medium tracking-wider uppercase ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                                        <Building2 className="w-4 h-4" />
                                                        <span>{exp.company}</span>
                                                    </div>
                                                </div>

                                                {/* Period Badge */}
                                                <div className={`mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-[10px] md:text-xs text-gold/80 uppercase tracking-widest ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                                                    {exp.period}
                                                </div>

                                                {/* Content */}
                                                <div className="relative text-white/70 text-sm md:text-base font-light leading-relaxed space-y-4">
                                                    {exp.description.map((point, i) => (
                                                        <p key={i} className={`flex gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                                                            {point}
                                                        </p>
                                                    ))}
                                                </div>

                                            </div>
                                        </TiltCard>
                                    </PremiumReveal>
                                </div>

                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
