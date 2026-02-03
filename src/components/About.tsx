"use client";
import { motion } from "framer-motion";
import TextReveal from './ui/TextReveal';
import WaterWave from './ui/WaterWave';
import { PremiumReveal } from './ui/PremiumReveal';
import TiltCard from './ui/TiltCard';

export default function About() {
    return (
        <section id="about" className="relative w-full py-20 lg:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Visual Column */}
                    <div className="lg:col-span-5 relative">
                        <PremiumReveal delay={0.1} direction="none" width="100%">
                            <TiltCard>
                                <div className="relative w-full aspect-[3/5] overflow-hidden rounded-[2px] transform transition-transform duration-1000">
                                    <WaterWave imageUrl="/images/profile_about.jpg" />

                                    {/* Premium border frame */}
                                    <div className="absolute inset-0 border border-gold/30 pointer-events-none" />
                                </div>
                            </TiltCard>
                        </PremiumReveal>

                        {/* Decorative refining element */}
                        <PremiumReveal delay={0.3} direction="right" className="absolute -bottom-8 -left-8 hidden lg:block">
                            <div className="w-24 h-24 border-l border-b border-gold/20" />
                        </PremiumReveal>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center pt-8">
                        <div className="mb-8">
                            <PremiumReveal delay={0.1} direction="right">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[1px] w-12 bg-gold/60"></span>
                                    <span className="text-gold-light text-xs tracking-[0.3em] uppercase font-sans">Profile</span>
                                </div>
                            </PremiumReveal>

                            <div className="mb-6 relative">
                                <PremiumReveal type="text-mask" delay={0.2}>
                                    <span className="block text-ivory/50 text-2xl md:text-3xl mb-2 font-light italic">The Art of</span>
                                </PremiumReveal>
                                <PremiumReveal type="text-mask" delay={0.3}>
                                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ivory leading-[1.1]">
                                        Data Strategy &
                                    </h2>
                                </PremiumReveal>
                                <PremiumReveal type="text-mask" delay={0.4}>
                                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-gold italic leading-[1.1]">
                                        Precision.
                                    </h2>
                                </PremiumReveal>
                            </div>
                        </div>

                        <div className="prose prose-lg prose-invert text-ivory/80 font-light leading-relaxed max-w-2xl space-y-6">
                            <PremiumReveal delay={0.5} type="blur">
                                <p>
                                    I am a <span className="text-white font-normal">Final-year Data Science student</span> crafting the bridge between raw code and strategic insight. My expertise lies not just in executing queries, but in architecting solutions that drive decision-making.
                                </p>
                            </PremiumReveal>
                            <PremiumReveal delay={0.6} type="blur">
                                <p>
                                    With a robust foundation in <span className="text-gold/90">SQL, Python, and Power BI</span>, I transform complex datasets into clear, actionable narratives. My approach is disciplined, analytical, and relentlessly focused on quality.
                                </p>
                            </PremiumReveal>
                            <PremiumReveal delay={0.7} type="blur">
                                <p>
                                    Currently seeking <span className="italic text-white">Data Analyst</span> or <span className="italic text-white">SQL Developer</span> roles where precision matches innovation.
                                </p>
                            </PremiumReveal>
                        </div>

                        <PremiumReveal delay={0.8} direction="up" width="100%">
                            <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between max-w-md">
                                <div>
                                    <p className="text-xs tracking-widest text-gold uppercase mb-1">Location</p>
                                    <p className="text-ivory font-serif">Howrah, India</p>
                                </div>
                                <div>
                                    <p className="text-xs tracking-widest text-gold uppercase mb-1">Status</p>
                                    <p className="text-ivory font-serif">Open for Opportunities</p>
                                </div>
                            </div>
                        </PremiumReveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
