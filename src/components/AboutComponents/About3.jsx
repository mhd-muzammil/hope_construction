import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.18, ease: 'easeOut' }
    })
}

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: i * 0.18, ease: 'easeOut' }
    })
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 1, delay: i * 0.15, ease: 'easeOut' }
    })
}

const About3 = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* ===== MAIN HERO BLOCK ===== */}
            <div className="relative w-full min-h-[600px] md:min-h-[680px] lg:min-h-[720px]">
                {/* Background Image */}
                <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/about_hero_bg.png"
                        alt="Construction workers reviewing blueprints"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Dark Overlay with gradient */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                {/* Content */}
                <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16 h-full flex items-center py-20 md:py-24 lg:py-28">
                    <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                        {/* LEFT: Text Content */}
                        <div className="max-w-[620px]">
                            {/* Badge */}
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={0}
                                className="mb-6"
                            >
                                <span className="bg-[#FFB703] text-[#111] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-[7px] inline-block">
                                    // Quality Construction
                                </span>
                            </motion.div>

                            {/* Heading */}
                            <motion.h2
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={1}
                                className="font-heading font-black text-white text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.06] tracking-[-0.02em] uppercase mb-7"
                            >
                                Trusted Construction<br />
                                Solutions For All
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={2}
                                className="text-white/70 text-[14px] sm:text-[15px] leading-[1.75] max-w-[420px] mb-9"
                            >
                                We provide trusted construction solutions designed to
                                meet diverse project needs with efficiency, precision,
                                and consistent quality.
                            </motion.p>

                            {/* CTA Link */}
                            <motion.a
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={3}
                                href="#"
                                className="group inline-flex items-center gap-2.5 text-white font-bold text-[13px] uppercase tracking-[0.14em] hover:text-[#FFB703] transition-colors duration-300"
                            >
                                <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                About Us Now
                            </motion.a>
                        </div>

                        {/* RIGHT: Experience Badge */}
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={3}
                            className="self-end lg:self-auto"
                        >
                            <div className="bg-[#FFB703] px-8 sm:px-10 py-7 sm:py-8 min-w-[260px] sm:min-w-[300px] relative overflow-hidden group cursor-default">
                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#E5A503]/40 clip-triangle"></div>

                                <div className="relative z-10">
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-[#111] font-heading font-black text-[3rem] sm:text-[3.5rem] leading-none">
                                            30
                                        </span>
                                        <span className="text-[#111] font-heading font-black text-[2rem] sm:text-[2.2rem] leading-none">
                                            +
                                        </span>
                                    </div>
                                    <h4 className="font-heading font-extrabold text-[#111] text-[13px] sm:text-[14px] uppercase tracking-[0.14em] mb-2">
                                        Years of Experience
                                    </h4>
                                    <p className="text-[#111]/70 text-[12px] sm:text-[13px] leading-[1.5] font-medium italic">
                                        Decades of expertise providing<br />
                                        trusted construction services.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ===== CAUTION TAPE - Scrolling Right in Loop ===== */}
            <div className="relative w-full overflow-hidden">
                {/* Top caution tape strip */}
                <div className="w-full h-[28px] sm:h-[32px] md:h-[36px] relative overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full flex caution-tape-scroll-right"
                        style={{ width: '200%' }}
                    >
                        <div
                            className="h-full flex-1"
                            style={{
                                background: `repeating-linear-gradient(
                                    -45deg,
                                    #FFB703,
                                    #FFB703 12px,
                                    #111111 12px,
                                    #111111 24px
                                )`
                            }}
                        ></div>
                        <div
                            className="h-full flex-1"
                            style={{
                                background: `repeating-linear-gradient(
                                    -45deg,
                                    #FFB703,
                                    #FFB703 12px,
                                    #111111 12px,
                                    #111111 24px
                                )`
                            }}
                        ></div>
                    </div>
                </div>

                {/* Bottom thin accent line */}
                <div className="w-full h-[4px] bg-[#FFB703]"></div>
            </div>

            {/* Inline animations */}
            <style>{`
                .caution-tape-scroll-right {
                    animation: tapeScrollRight 10s linear infinite;
                }

                @keyframes tapeScrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }

                .clip-triangle {
                    clip-path: polygon(100% 0, 0 0, 100% 100%);
                }
            `}</style>
        </section>
    )
}

export default About3
