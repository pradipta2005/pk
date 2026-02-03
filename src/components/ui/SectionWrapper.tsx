"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function SectionWrapper({ children, className = "", delay = 0 }: SectionWrapperProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            // whileInView="visible"
            // viewport={{ once: true, margin: "-10%" }} // Trigger slightly earlier for smoother feel
            variants={{
                hidden: { opacity: 0, y: 30 }, // Reduced distance for less "jumpy" feel
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        staggerChildren: 0.15,
                        delayChildren: delay
                    }
                }
            }}
            className={`relative z-10 ${className}`}
        >
            {children}
        </motion.div>
    );
}
