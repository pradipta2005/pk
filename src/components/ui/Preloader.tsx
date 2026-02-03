"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const words = ["Welcome", "to", "my", "Portfolio"];

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });

        const sequence1 = setTimeout(() => {
            setIndex(1);
        }, 3000); // Show logo for 3s

        const sequence2 = setTimeout(() => {
            setIsLoading(false);
        }, 5500); // Total time 5.5s

        return () => {
            clearTimeout(sequence1);
            clearTimeout(sequence2);
        };
    }, []);

    // Paths for the curve animation (Liquid Wipe)
    const flatPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;
    const curvedPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;

    const curveVariants: Variants = {
        initial: {
            d: flatPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as any },
        },
        exit: {
            d: curvedPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as any, delay: 0.2 },
        },
    };

    // Text reveal variants
    const greetingVariants: Variants = {
        initial: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)"
        },
        enter: (i: any) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.1 * i
            }
        }),
        exit: {
            opacity: 0,
            y: -20,
            filter: "blur(10px)",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        }
    };

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-obsidian cursor-none"
                    exit={{ top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
                >
                    {/* Cinematic Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                    {/* Content Container (Handles switching between Logo and Greeting) */}
                    <motion.div
                        className="relative z-10 w-full h-full flex items-center justify-center"
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    >
                        <AnimatePresence mode="wait">
                            {index === 0 && (
                                <motion.div
                                    key="logo"
                                    className="flex flex-col items-center justify-center"
                                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.5 } }}
                                >
                                    {/* Animated 'PK' SVG Logo */}
                                    <div className="relative">
                                        <svg
                                            viewBox="0 0 400 200"
                                            className="w-[300px] h-[150px] md:w-[600px] md:h-[300px]"
                                        >
                                            <defs>
                                                <linearGradient id="gold-gradient-preloader" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#B8860B" />
                                                    <stop offset="50%" stopColor="#FFD700" />
                                                    <stop offset="100%" stopColor="#B8860B" />
                                                </linearGradient>
                                            </defs>

                                            {/* Layer 1: Stroke Animation */}
                                            <motion.text
                                                x="50%"
                                                y="50%"
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                className="font-serif font-bold tracking-tighter"
                                                style={{
                                                    fontSize: "clamp(6rem, 15vw, 12rem)",
                                                    fontFamily: "var(--font-serif)",
                                                }}
                                                initial={{
                                                    strokeDasharray: 1000,
                                                    strokeDashoffset: 1000,
                                                    fill: "transparent",
                                                    stroke: "#FFD700",
                                                    strokeWidth: 2
                                                }}
                                                animate={{
                                                    strokeDashoffset: 0,
                                                    stroke: "transparent",
                                                }}
                                                transition={{
                                                    strokeDashoffset: { duration: 2.0, ease: "easeInOut" },
                                                    stroke: { duration: 0.5, delay: 1.8, ease: "easeOut" }
                                                }}
                                            >
                                                PK
                                            </motion.text>

                                            {/* Layer 2: Fill Animation */}
                                            <motion.text
                                                x="50%"
                                                y="50%"
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                className="font-serif font-bold tracking-tighter"
                                                style={{
                                                    fontSize: "clamp(6rem, 15vw, 12rem)",
                                                    fontFamily: "var(--font-serif)",
                                                }}
                                                initial={{
                                                    fill: "url(#gold-gradient-preloader)",
                                                    opacity: 0,
                                                    stroke: "none"
                                                }}
                                                animate={{
                                                    opacity: 1
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                    delay: 1.5,
                                                    ease: "easeOut"
                                                }}
                                            >
                                                PK
                                            </motion.text>
                                        </svg>

                                        {/* Shimmer Effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                            initial={{ x: "-100%" }}
                                            animate={{ x: "100%" }}
                                            transition={{ duration: 1.5, delay: 2.0, ease: "easeInOut" }}
                                            style={{ skewX: -20, mixBlendMode: "overlay" }}
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {index === 1 && (
                                <motion.div
                                    key="greeting"
                                    className="flex flex-col items-center justify-center text-center p-4"
                                >
                                    <div className="overflow-hidden flex flex-wrap justify-center gap-x-3 md:gap-x-6">
                                        {words.map((word, i) => (
                                            <motion.span
                                                key={i}
                                                custom={i}
                                                variants={greetingVariants}
                                                initial="initial"
                                                animate="enter"
                                                exit="exit"
                                                className="text-3xl md:text-6xl lg:text-7xl font-serif font-medium text-ivory tracking-tight"
                                            >
                                                {word === "Portfolio" ? (
                                                    <span className="text-gold italic">{word}.</span>
                                                ) : (
                                                    word
                                                )}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100px" }}
                                        exit={{ width: 0 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className="h-[1px] bg-gold/50 mt-6"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* SVG Curve for Liquid Wipe Effect */}
                    {dimension.width > 0 && (
                        <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none z-20 overflow-visible"
                            style={{ top: '100%' }}
                        >
                            <motion.path
                                variants={curveVariants}
                                initial="initial"
                                exit="exit"
                                fill="#050505"
                                className="absolute top-0 w-full"
                            ></motion.path>
                        </svg>
                    )}

                </motion.div>
            )}
        </AnimatePresence>
    );
}
