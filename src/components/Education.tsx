"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { PremiumReveal } from "./ui/PremiumReveal";
import ParallaxHeading from "./ui/ParallaxHeading";
import MagneticButton from "./ui/MagneticButton";
import TiltCard from "./ui/TiltCard";

const educationData = [
    {
        degree: "B.Tech — Computer Science Engineering",
        specialization: "(Data Science)",
        institution: "NSHM Knowledge Campus, Durgapur (MAKAUT)",
        score: "7.8",
        scoreScale: "/ 10",
        year: "2022 — June 2026",
        icon: GraduationCap,
    },
    {
        degree: "Higher Secondary (Science)",
        specialization: "",
        institution: "Palaspai Anchal Ramkrishna Vidya Mandir (WBCHSE)",
        score: "92.6",
        scoreScale: "%",
        year: "2022",
        icon: Award,
    }
];

export default function Education() {
    return (
        <section className="w-full py-32 relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    {/* Header Column */}
                    <div className="lg:col-span-4 sticky top-32">
                        <PremiumReveal direction="right">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-[1px] w-12 bg-gold/60"></span>
                                <span className="text-gold-light text-xs tracking-[0.3em] uppercase font-sans">Academic Timeline</span>
                            </div>
                        </PremiumReveal>

                        <div className="mb-8">
                            <PremiumReveal type="text-mask" delay={0.1}>
                                <ParallaxHeading speed={0.2}>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory leading-[1.1]">
                                        Cultivating
                                    </h2>
                                </ParallaxHeading>
                            </PremiumReveal>
                            <PremiumReveal type="text-mask" delay={0.2}>
                                <ParallaxHeading speed={0.4}>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold italic leading-[1.1]">
                                        Intellect.
                                    </h2>
                                </ParallaxHeading>
                            </PremiumReveal>
                        </div>

                        {/* Pure Visual Emblem */}
                        <PremiumReveal delay={0.3} direction="none">
                            <div className="relative w-40 h-40 flex items-center justify-center mt-12">
                                {/* Geometric Orbit 1 */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border border-t-gold/30 border-r-transparent border-b-gold/10 border-l-transparent"
                                />

                                {/* Geometric Orbit 2 */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 rounded-full border border-dashed border-gold/20 opacity-60"
                                />

                                {/* Central Artifact */}
                                <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/5 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                                    <div className="absolute inset-0 bg-gold/5 blur-xl rounded-full" />
                                    <BookOpen strokeWidth={1} className="w-10 h-10 text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
                                </div>
                            </div>
                        </PremiumReveal>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {educationData.map((item, index) => (
                            <PremiumReveal
                                key={index}
                                delay={index * 0.15}
                                direction="up"
                                width="100%"
                            >
                                <TiltCard className="rounded-sm">
                                    <div className="group relative">
                                        {/* Glass Card */}
                                        <div className="relative z-10 bg-black/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 transition-all duration-500 group-hover:border-gold/30 group-hover:bg-black/90 rounded-sm">
                                            <div className="flex flex-col md:flex-row gap-8 justify-between items-stretch">

                                                <div className="space-y-6 flex-1">
                                                    {/* Mobile Year Badge */}
                                                    <div className="md:hidden inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-widest border border-gold/20 px-3 py-1 rounded-full mb-2">
                                                        <span>{item.year.replace(' - Present', '')}</span>
                                                    </div>

                                                    <div>
                                                        <h3 className="text-2xl md:text-3xl font-serif text-ivory group-hover:text-gold transition-colors duration-300">
                                                            {item.degree}
                                                        </h3>
                                                        {item.specialization && (
                                                            <p className="text-lg text-ivory/50 font-light mt-2 italic">
                                                                {item.specialization}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="flex items-center gap-3 text-ivory/70 pt-2">
                                                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                                                        <p className="text-sm md:text-base font-sans tracking-wide uppercase text-white/60">
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Right Side Stats - Vertical Separator on Desktop */}
                                                <div className="flex flex-col justify-center shrink-0 md:border-l border-white/10 md:pl-10 min-w-[180px]">

                                                    {/* Year Pill */}
                                                    <div className="hidden md:flex justify-end mb-6">
                                                        <MagneticButton strength={0.2}>
                                                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-[11px] font-bold tracking-[0.2em] group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                                                                {item.year.replace(' - Present', '')}
                                                            </div>
                                                        </MagneticButton>
                                                    </div>

                                                    {/* Score Display */}
                                                    <div className="flex flex-col items-end">
                                                        <div className="flex items-baseline gap-1 relative">
                                                            <span className="text-5xl md:text-6xl font-serif font-medium text-white tracking-tighter drop-shadow-2xl group-hover:text-gold transition-colors duration-300">
                                                                {item.score}
                                                            </span>
                                                            <span className="text-2xl md:text-3xl font-serif text-white/30 italic">
                                                                {item.scoreScale}
                                                            </span>

                                                            {/* Subtle Glow behind number */}
                                                            <div className="absolute -inset-4 bg-gold/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                                        </div>

                                                        <span className="text-[10px] text-gold font-bold tracking-[0.4em] uppercase mt-2 opacity-80">
                                                            Final Score
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Glow Effect behind card */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md -z-10" />
                                    </div>
                                </TiltCard>
                            </PremiumReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
