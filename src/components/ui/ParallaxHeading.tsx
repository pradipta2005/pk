"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxHeadingProps {
    children: React.ReactNode;
    className?: string;
    speed?: number; // 0 to 1, higher is faster movement
}

export default function ParallaxHeading({ children, className = "", speed = 0.5 }: ParallaxHeadingProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}
