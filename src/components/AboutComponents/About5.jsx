import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' }
    })
}

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' }
    })
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, delay: i * 0.15, ease: 'easeOut' }
    })
}

/* ── Awards Data ── */
const awards = [
    {
        year: '2021',
        title: 'US Green – Top 5 Sustainable Design',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 sm:w-12 sm:h-12">
                <circle cx="24" cy="24" r="9" stroke="#FFB703" strokeWidth="2" fill="none" />
                <path d="M24 4v6M24 38v6M4 24h6M38 24h6" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" />
                <path d="M9.86 9.86l4.24 4.24M33.9 33.9l4.24 4.24M9.86 38.14l4.24-4.24M33.9 14.1l4.24-4.24" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" />
            </svg>
        )
    },
    {
        year: '2022',
        title: 'Boston Award for Architecture',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 sm:w-12 sm:h-12">
                <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="2.5" fill="none" />
                <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="2" fill="none" />
            </svg>
        )
    },
    {
        year: '2023',
        title: 'AIAG – Best Domestic Design',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 sm:w-12 sm:h-12">
                <path d="M24 6a18 18 0 0118 18" stroke="#FFB703" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M42 24a18 18 0 01-18 18" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M24 42A18 18 0 016 24" stroke="#FFB703" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M6 24A18 18 0 0124 6" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M30 18l-3 9h-6l-3-9" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        year: '2024',
        title: 'Eco Vision – Top 10 Green Architecture',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 sm:w-12 sm:h-12">
                <path d="M16 12a16 16 0 0116 16" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M32 28a16 16 0 01-16 16" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M16 44A16 16 0 010 28" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M0 28A16 16 0 0116 12" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M22 24l-4 8M26 24l4 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        )
    }
]

const About5 = () => {
    return (
        <section className="overflow-hidden">
            <div className="relative">
                {/* Split background: top white, bottom dark */}
                <div className="absolute inset-0">
                    <div className="h-1/2 bg-white"></div>
                    <div className="h-1/2 bg-[#0A0A0A]"></div>
                </div>

                {/* Banner content centered over the split */}
                <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16 py-10 md:py-14">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={0}
                        className="relative w-full rounded-sm overflow-hidden"
                    >
                        {/* Banner Background Image */}
                        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
                            <img
                                src="/about-worker.png"
                                alt="Construction workers with blueprints"
                                className="w-full h-full object-cover object-top"
                            />
                            {/* Dark gradient overlay from right */}
                            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                            {/* Banner Content – right side */}
                            <div className="absolute inset-0 flex items-center justify-end pr-8 sm:pr-12 md:pr-16 lg:pr-20">
                                <div className="text-right">
                                    <motion.h3
                                        variants={fadeInRight}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={1}
                                        className="font-heading font-black text-white text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] uppercase leading-[1.1] tracking-[-0.01em] mb-6 md:mb-8"
                                    >
                                        Exclusive Deals On<br />
                                        Building Services
                                    </motion.h3>
                                    <motion.a
                                        variants={fadeInRight}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={2}
                                        href="#"
                                        className="inline-flex items-center gap-2.5 bg-[#FFB703] hover:bg-[#E5A503] text-[#111] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.14em] px-5 py-3 transition-all duration-300 group"
                                    >
                                        <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        Discover Now
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ═══════ AWARDS SECTION (dark bg continues) ═══════ */}
            <div className="bg-[#0A0A0A]">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-24 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN – Text + Crane Image */}
                    <div className="flex flex-col">
                        {/* Badge */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={0}
                            className="mb-5"
                        >
                            <span className="bg-[#FFB703] text-[#111] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-[6px] inline-block">
                                // Awarded for Quality
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                            className="font-heading font-black text-white text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.08] tracking-[-0.01em] uppercase mb-6"
                        >
                            Honoring Quality<br />
                            And Excellence
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={2}
                            className="text-white/50 text-[14px] sm:text-[15px] leading-[1.75] max-w-[420px] mb-7"
                        >
                            Our numerous awards and achievements showcase
                            our dedication, expertise, and commitment to
                            delivering <span className="text-white/80 underline decoration-[#FFB703]/50 underline-offset-2">exceptional quality</span> and <span className="text-white/80 underline decoration-[#FFB703]/50 underline-offset-2">lasting value</span>.
                        </motion.p>

                        {/* CTA */}
                        <motion.a
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={3}
                            href="#"
                            className="group inline-flex items-center gap-2.5 text-white font-bold text-[13px] uppercase tracking-[0.14em] hover:text-[#FFB703] transition-colors duration-300 mb-10 lg:mb-14"
                        >
                            <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            Join Us Now
                        </motion.a>

                        {/* Construction Crane Image */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            custom={4}
                            className="max-w-[380px] lg:max-w-[420px]"
                        >
                            <img
                                src="/about-construction.png"
                                alt="Construction crane vehicle"
                                className="w-full h-auto object-contain opacity-90 mix-blend-lighten grayscale brightness-150 contrast-125"
                            />
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN – Awards 2×2 Grid */}
                    <div className="grid grid-cols-2 gap-[1px] bg-[#222] rounded-sm overflow-hidden">
                        {awards.map((award, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={i + 2}
                                className="bg-[#111] p-6 sm:p-8 lg:p-9 flex flex-col group hover:bg-[#1A1A1A] transition-colors duration-500 cursor-default"
                            >
                                {/* Icon */}
                                <div className="mb-6 lg:mb-8 transition-transform duration-500 group-hover:scale-110">
                                    {award.icon}
                                </div>

                                {/* Year Badge */}
                                <span className="text-[#FFB703] text-[11px] sm:text-[12px] font-bold tracking-[0.12em] mb-2">
                                    {award.year}
                                </span>

                                {/* Award Title */}
                                <h4 className="font-heading font-extrabold text-white text-[12px] sm:text-[13px] lg:text-[14px] uppercase tracking-[0.08em] leading-[1.4]">
                                    {award.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
            </div>
        </section>
    )
}

export default About5
