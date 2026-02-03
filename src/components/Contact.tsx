"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowRight, MapPin, Phone, Globe, Terminal } from "lucide-react";

import { useState, MouseEvent, useRef } from "react";
import DeepOceanAndBubbles from "./ui/DeepOceanAndBubbles";
import { PremiumReveal } from "./ui/PremiumReveal";
import MagneticButton from "./ui/MagneticButton";

export default function Contact() {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 3D Tilt Logic
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const xPct = mouseX / width - 0.5;
            const yPct = mouseY / height - 0.5;
            x.set(xPct);
            y.set(yPct);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Simple validation: Ensure required fields are not empty
    const isValid = formData.name.trim() !== "" && formData.email.trim() !== "" && formData.message.trim() !== "";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid) return;

        setIsSubmitting(true);

        // Simulate network delay for premium feel
        setTimeout(() => {
            const subject = formData.subject || `New Inquiry from ${formData.name}`;
            const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

            // Open default mail client
            window.location.href = `mailto:pradiptakhan005@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

            setIsSubmitting(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 1500);
    };

    return (
        <section className="w-full min-h-screen relative z-10 px-4 md:px-0 flex flex-col justify-center overflow-hidden py-32 perspective-1000">

            {/* Background Atmosphere - Muted for Professional Clarity */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <DeepOceanAndBubbles />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20 pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-30 flex justify-center perspective-[2000px]">

                {/* The "Glass Fortress" with 3D Tilt */}
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-5xl bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-[0_0_40px_rgba(212,175,55,0.05)] relative overflow-hidden group/fortress"
                >

                    {/* Dynamic Holographic Surface Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover/fortress:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay z-0" />

                    {/* Decorative Tech Grid Lines */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 transform-style-3d">

                        {/* Left: Statement & Info */}
                        <div className="flex flex-col justify-between h-full transform transition-transform duration-500" style={{ transform: "translateZ(40px)" }}>
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="flex items-center gap-3 mb-8"
                                >
                                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                                    <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gold">
                                        Open for Collaboration
                                    </span>
                                </motion.div>

                                <div className="mb-12">
                                    <PremiumReveal type="text-mask" delay={0.2}>
                                        <h2 className="text-5xl md:text-7xl font-serif text-white leading-[0.9] tracking-tighter shadow-black drop-shadow-lg">
                                            Let’s Engineer
                                        </h2>
                                    </PremiumReveal>
                                    <PremiumReveal type="text-mask" delay={0.3}>
                                        <h2 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold via-white/80 to-gold italic leading-[1.1] pb-2">
                                            The Future.
                                        </h2>
                                    </PremiumReveal>
                                </div>

                                <PremiumReveal delay={0.4} type="blur">
                                    <p className="text-white/70 text-lg font-light leading-relaxed max-w-md mb-12 border-l-2 border-gold/30 pl-6">
                                        Seeking visionary partners. Available for high-impact projects where precision meets data strategy.
                                    </p>
                                </PremiumReveal>
                            </div>

                            <div className="space-y-6">
                                <PremiumReveal delay={0.5} direction="right">
                                    <ContactItem
                                        icon={Mail}
                                        label="Direct Line"
                                        value="pradiptakhan005@gmail.com"
                                        href="mailto:pradiptakhan005@gmail.com"
                                    />
                                </PremiumReveal>
                                <PremiumReveal delay={0.6} direction="right">
                                    <ContactItem
                                        icon={Linkedin}
                                        label="Professional Network"
                                        value="Connect on LinkedIn"
                                        href="https://linkedin.com"
                                    />
                                </PremiumReveal>
                                <PremiumReveal delay={0.7} direction="right">
                                    <div className="flex items-center gap-6 p-4 rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                                        <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                                            {/* Rotating Globe Effect */}
                                            <div className="absolute inset-0 rounded-full border border-gold/30 animate-[spin_10s_linear_infinite]" />
                                            <div className="absolute inset-2 rounded-full border border-dashed border-white/20 animate-[spin_15s_linear_infinite_reverse]" />
                                            <MapPin className="w-4 h-4 text-gold relative z-10" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gold/60 mb-1">Global Base</p>
                                            <p className="text-base text-white font-light">Howrah, India <span className="text-white/30 text-xs ml-2">(Remote Capable)</span></p>
                                        </div>
                                    </div>
                                </PremiumReveal>
                            </div>
                        </div>

                        {/* Right: Pro Form */}
                        <div className="bg-[#D4AF37]/[0.02] backdrop-blur-md p-6 md:p-10 rounded-3xl border border-[#D4AF37]/10 relative shadow-xl transition-transform duration-500" style={{ transform: "translateZ(20px)" }}>
                            {isSubmitting && (
                                <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center rounded-3xl">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                                        <div className="text-gold text-xs uppercase tracking-widest font-bold animate-pulse">Transmitting...</div>
                                    </div>
                                </div>
                            )}

                            <div className="absolute top-0 right-0 p-6 opacity-30">
                                <Terminal className="w-6 h-6 text-white" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <ProInput
                                        label="Name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        focused={focusedField === 'name'}
                                        setFocus={setFocusedField}
                                        required
                                    />
                                    <ProInput
                                        label="Email"
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        focused={focusedField === 'email'}
                                        setFocus={setFocusedField}
                                        required
                                    />
                                </div>

                                <ProInput
                                    label="Subject"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Type / Inquiry"
                                    focused={focusedField === 'subject'}
                                    setFocus={setFocusedField}
                                />

                                <div className="relative group/input">
                                    <label className={`block text-[10px] tracking-[0.2em] font-bold uppercase mb-3 transition-colors duration-300 ${focusedField === 'message' ? 'text-gold' : 'text-white/40'}`}>
                                        Message
                                    </label>
                                    <div className={`relative transition-all duration-300 rounded-lg p-[1px] ${focusedField === 'message' ? "bg-gradient-to-r from-gold/50 via-white/20 to-gold/50" : "bg-white/5"}`}>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your vision..."
                                            className="w-full bg-black/20 rounded-lg p-4 text-white placeholder:text-white/20 text-base font-light focus:outline-none focus:bg-black/40 transition-all duration-300 resize-none block"
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                        />
                                    </div>
                                </div>

                                <MagneticButton strength={0.05} className="w-full">
                                    <button
                                        disabled={!isValid || isSubmitting}
                                        className={`w-full py-5 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 rounded-lg flex items-center justify-center gap-3 overflow-hidden relative group
                                            ${isValid
                                                ? "bg-white text-black hover:bg-gold cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                                                : "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"
                                            }`}
                                    >
                                        <span className="relative z-10">{isValid ? "Initiate Sequence" : "Complete Form"}</span>
                                        {isValid && <Send size={14} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}

                                        {/* Button Fill Animation */}
                                        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0 ease-[0.22,1,0.36,1]" />
                                    </button>
                                </MagneticButton>
                            </form>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ContactItem({ icon: Icon, label, value, href, delay }: any) {
    return (
        <MagneticButton strength={0.1}>
            <motion.a
                href={href}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-6 group cursor-pointer p-4 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5 bg-white/[0.01]"
            >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-white/80 group-hover:text-gold group-hover:scale-110 transition-all duration-500 shadow-inner border border-white/5">
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1 group-hover:text-gold/60 transition-colors">{label}</p>
                    <p className="text-lg text-white font-light group-hover:text-white transition-colors">{value}</p>
                </div>
            </motion.a>
        </MagneticButton>
    );
}

function ProInput({ label, id, type = "text", value, onChange, placeholder, focused, setFocus, required }: any) {
    return (
        <div className="relative group/input">
            <label className={`block text-[10px] tracking-[0.2em] font-bold uppercase mb-3 transition-colors duration-300 ${focused ? "text-gold" : 'text-white/40'}`}>
                {label} {required && <span className="text-gold/50">*</span>}
            </label>

            {/* Holographic Border Wrap */}
            <div className={`relative transition-all duration-500 rounded-lg p-[1px] ${focused ? "bg-gradient-to-r from-gold/50 via-white/20 to-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.1)]" : "bg-white/5 group-hover/input:bg-[#D4AF37]/20"}`}>
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full bg-black/20 border-none rounded-lg p-4 text-white placeholder:text-white/20 text-base font-light focus:outline-none focus:bg-black/40 transition-all duration-300 block relative z-10"
                    onFocus={() => setFocus(id)}
                    onBlur={() => setFocus(null)}
                />
            </div>
        </div>
    );
}
