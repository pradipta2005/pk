"use client";
// Forced update to clear cache
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { BarChart2, Brain, Sigma, Terminal } from "lucide-react";
import { PremiumReveal } from "./ui/PremiumReveal";
import ParallaxHeading from "./ui/ParallaxHeading";

export default function Skills() {
    return (
        <section className="w-full py-32 relative z-10 px-4 md:px-0">
            <div className="container mx-auto px-4 md:px-12 lg:px-20">

                {/* Header */}
                <div className="mb-24 flex flex-col items-center text-center">
                    <PremiumReveal direction="up">
                        <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
                            Tactical Arsenal
                        </span>
                    </PremiumReveal>
                    <PremiumReveal delay={0.1} type="text-mask">
                        <ParallaxHeading speed={0.25}>
                            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
                                Technical <span className="text-gold italic">Mastery.</span>
                            </h2>
                        </ParallaxHeading>
                    </PremiumReveal>
                    <PremiumReveal delay={0.2} direction="none">
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto"></div>
                    </PremiumReveal>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* 1. Programming (Wide - 7 Cols) */}
                    <SpotlightCard
                        className="lg:col-span-7 bg-black/40"
                        delay={0}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-60 transition-opacity duration-700">
                            <Terminal className="w-10 h-10 text-white font-thin" strokeWidth={1} />
                        </div>

                        <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-gold transition-colors duration-500">
                            Programming
                        </h3>
                        <p className="text-white/40 text-sm tracking-wide mb-12 uppercase">Core Architecture</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Python */}
                            <div className="relative pl-6 border-l border-white/10 group-hover:border-gold/30 transition-colors duration-500">
                                <h4 className="text-xl text-white font-medium mb-3">Python</h4>
                                <div className="flex flex-col gap-2">
                                    <span className="text-white/50 text-xs tracking-wider uppercase">Pandas • NumPy</span>
                                    <span className="text-white/50 text-xs tracking-wider uppercase">Data Structures</span>
                                </div>
                            </div>

                            {/* SQL */}
                            <div className="relative pl-6 border-l border-white/10 group-hover:border-gold/30 transition-colors duration-500">
                                <h4 className="text-xl text-white font-medium mb-3">SQL</h4>
                                <div className="flex flex-col gap-2">
                                    <span className="text-white/50 text-xs tracking-wider uppercase">MySQL • PostgreSQL</span>
                                    <span className="text-white/50 text-xs tracking-wider uppercase">Query Optimization</span>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* 2. Machine Learning (Narrow - 5 Cols) - Highlight */}
                    <SpotlightCard
                        className="lg:col-span-5 bg-gradient-to-b from-white/[0.03] to-transparent"
                        delay={0.1}
                        noBorder
                    >
                        {/* Golden Glow Effect */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-gold/20 transition-all duration-700" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <Brain className="w-8 h-8 text-gold opacity-80" strokeWidth={1} />
                                    <span className="text-[10px] text-gold border border-gold/30 px-2 py-1 rounded-full uppercase tracking-widest">
                                        Advanced
                                    </span>
                                </div>
                                <h3 className="text-3xl font-serif text-white mb-2 leading-tight">
                                    Machine <br /><span className="italic text-gold">Learning.</span>
                                </h3>
                            </div>

                            <div className="mt-10 space-y-6">
                                <div>
                                    <p className="text-white text-lg font-light mb-1">Scikit-learn</p>
                                    <div className="h-[1px] w-full bg-white/10 group-hover:bg-gold/30 transition-colors duration-500 mb-2" />
                                    <div className="flex gap-4">
                                        <span className="text-xs text-white/40 uppercase tracking-widest">Linear Regression</span>
                                        <span className="text-xs text-white/40 uppercase tracking-widest">Decision Trees</span>
                                    </div>
                                </div>
                                <p className="text-white/60 text-sm font-light leading-relaxed">
                                    Deploying predictive models to forecast trends and optimize decision-making logic.
                                </p>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* 3. Statistics (Narrow - 5 Cols) */}
                    <SpotlightCard
                        className="lg:col-span-5 bg-black/40"
                        delay={0.2}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-60 transition-opacity duration-700">
                            <Sigma className="w-10 h-10 text-white font-thin" strokeWidth={1} />
                        </div>

                        <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-gold transition-colors duration-500">
                            Statistics
                        </h3>
                        <p className="text-white/40 text-sm tracking-wide mb-12 uppercase">Analytical Rigor</p>

                        <ul className="space-y-4">
                            {["Regression Analysis", "Hypothesis Testing", "EDA", "Probability"].map((item, i) => (
                                <li key={i} className="flex items-center justify-between group/item cursor-default">
                                    <span className="text-white/70 font-light group-hover/item:text-white transition-colors">{item}</span>
                                    <span className="h-[1px] flex-grow mx-4 bg-white/5 group-hover/item:bg-gold/20 transition-colors" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover/item:bg-gold transition-colors" />
                                </li>
                            ))}
                        </ul>
                    </SpotlightCard>

                    {/* 4. Data Viz (Wide - 7 Cols) */}
                    <SpotlightCard
                        className="lg:col-span-7 bg-black/40"
                        delay={0.3}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-60 transition-opacity duration-700">
                            <BarChart2 className="w-10 h-10 text-white font-thin" strokeWidth={1} />
                        </div>

                        <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-gold transition-colors duration-500">
                            Visualization
                        </h3>
                        <p className="text-white/40 text-sm tracking-wide mb-12 uppercase">Visual Storytelling</p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {/* Power BI */}
                            <div className="group/tool">
                                <span className="block w-8 h-[1px] bg-gold/50 mb-4 group-hover/tool:w-12 transition-all duration-500" />
                                <h4 className="text-lg text-white font-medium mb-2">Power BI</h4>
                                <p className="text-xs text-white/40 uppercase tracking-widest">Dashboarding</p>
                            </div>

                            {/* Excel */}
                            <div className="group/tool">
                                <span className="block w-8 h-[1px] bg-gold/50 mb-4 group-hover/tool:w-12 transition-all duration-500" />
                                <h4 className="text-lg text-white font-medium mb-2">Excel</h4>
                                <div className="space-y-1">
                                    <p className="text-xs text-white/40 uppercase tracking-widest">Pivot Tables</p>
                                    <p className="text-xs text-white/40 uppercase tracking-widest">VLOOKUP • Charts</p>
                                </div>
                            </div>

                            {/* Python */}
                            <div className="group/tool">
                                <span className="block w-8 h-[1px] bg-gold/50 mb-4 group-hover/tool:w-12 transition-all duration-500" />
                                <h4 className="text-lg text-white font-medium mb-2">Python Viz</h4>
                                <p className="text-xs text-white/40 uppercase tracking-widest">Matplotlib • Seaborn</p>
                            </div>
                        </div>
                    </SpotlightCard>

                </div>

            </div>
        </section >
    );
}

function SpotlightCard({ children, className = "", delay = 0, noBorder = false }: { children: React.ReactNode; className?: string; delay?: number; noBorder?: boolean }) {
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay }}
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden text-left rounded-xl ${className} hover:shadow-[0_0_40px_rgba(212,175,55,0.05)] transition-shadow duration-700`}
        >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

            {/* Glowing Orbs for ambient light */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-700" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors duration-700" />

            {/* Floating Particles (CSS Animation) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold rounded-full animate-float-slow opacity-60" />
                <div className="absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-white rounded-full animate-float-medium opacity-40" />
                <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-gold/50 rounded-full animate-float-fast opacity-50" />
            </div>

            {/* Border */}
            {!noBorder && (
                <div className="absolute inset-0 border border-white/10 group-hover:border-gold/30 rounded-xl transition-colors duration-500 z-20 pointer-events-none" />
            )}

            {/* Hover Spotlight Reveal */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-10 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={style}
            />

            <div className="relative z-30 p-6 md:p-14 h-full">
                {children}
            </div>
        </motion.div>
    );
}
