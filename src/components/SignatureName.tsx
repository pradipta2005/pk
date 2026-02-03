"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SignatureName() {
    const [isHovered, setIsHovered] = useState(false);
    const [showPrecision, setShowPrecision] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    // Initial Load Animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasLoaded(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Hover Logic with Delay
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isHovered) {
            timer = setTimeout(() => {
                setShowPrecision(true);
            }, 300); // 300ms delay before revealing Precision
        } else {
            setShowPrecision(false);
        }
        return () => clearTimeout(timer);
    }, [isHovered]);

    return (
        <div className="flex items-center justify-center gap-4 md:gap-6 relative">
            {/* Pradipta / Precision Container */}
            <div
                className="relative cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {!showPrecision ? (
                            <motion.span
                                key="pradipta"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className={`block font-serif font-bold text-ivory tracking-tight relative z-10 ${hasLoaded ? "animate-shimmer" : ""}`}
                                style={{
                                    backgroundImage: "linear-gradient(to right, #FFF5C2 0%, #FFD700 50%, #FFF5C2 100%)",
                                    backgroundSize: "200% auto",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    animation: hasLoaded ? "shimmer 2s linear forwards" : "none",
                                }}
                            >
                                Pradipta
                            </motion.span>
                        ) : (
                            <motion.span
                                key="precision"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="block font-serif font-bold tracking-tight"
                                style={{
                                    color: "#FFF5C2", // Brighter Champagne Gold
                                    textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 0 30px rgba(255, 215, 0, 0.6)" // Bright Gold glow
                                }}
                            >
                                Precision
                            </motion.span>
                        )}
                    </AnimatePresence>

                    {/* Gold Underline Sweep */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-gold w-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{
                            scaleX: showPrecision || (!hasLoaded && isHovered) ? 1 : (hasLoaded ? 0 : 1)
                        }}
                    />
                    {/* Load Sweep Overlay */}
                    {!hasLoaded && (
                        <motion.div
                            className="absolute bottom-0 left-0 h-[2px] bg-gold w-full"
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: [0, 1, 0], originX: [0, 0, 1] }}
                            transition={{ duration: 1.5, ease: "easeInOut", times: [0, 0.5, 1] }}
                        />
                    )}
                </div>
            </div>

            {/* Khan Container */}
            <AnimatePresence>
                {!showPrecision && (
                    <motion.span
                        key="khan"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="font-serif font-bold text-gold ml-3 relative z-10"
                        style={{
                            textShadow: "0 0 30px rgba(255,215,0,0.4)"
                        }}
                    >
                        Khan
                    </motion.span>
                )}
            </AnimatePresence>

            <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
        </div>
    );
}
