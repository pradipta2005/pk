"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface PremiumRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
    type?: "fade" | "blur" | "text-mask";
}

export const PremiumReveal = ({
    children,
    width = "fit-content",
    delay = 0,
    direction = "up",
    className = "",
    type = "fade"
}: PremiumRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getVariants = () => {
        if (type === "blur") {
            return {
                hidden: { opacity: 0, filter: "blur(10px)" },
                visible: { opacity: 1, filter: "blur(0px)" },
            };
        }

        if (type === "text-mask") {
            return {
                hidden: { y: "100%" },
                visible: { y: 0 },
            };
        }

        // Default fade with direction
        let x = 0, y = 0;
        switch (direction) {
            case "up": y = 40; break;
            case "down": y = -40; break;
            case "left": x = 40; break;
            case "right": x = -40; break;
        }

        return {
            hidden: { opacity: 0, x, y },
            visible: { opacity: 1, x: 0, y: 0 },
        };
    };

    if (type === "text-mask") {
        return (
            <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ width }}>
                <motion.div
                    variants={getVariants()}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
                >
                    {children}
                </motion.div>
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            variants={getVariants()}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.9, delay, ease: [0.25, 1, 0.5, 1] }}
            className={className}
            style={{ width, willChange: "opacity, transform" }}
        >
            {children}
        </motion.div>
    );
};
