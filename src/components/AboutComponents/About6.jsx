import React, { useState } from 'react'
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

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' }
    })
}

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' }
    })
}

/* ── Progress Bar Data ── */
const progressBars = [
    { label: 'Timely Execution', value: 80 },
    { label: 'Structures', value: 85 },
    { label: 'Project Foundation', value: 90 }
]

/* ── Animated Progress Bar ── */
const ProgressBar = ({ label, value, index }) => {
    const [inView, setInView] = useState(false)

    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={index + 5}
            onViewportEnter={() => setInView(true)}
            className="mb-5 last:mb-0"
        >
            {/* Label + Value */}
            <div className="flex items-center justify-between mb-2.5">
                <span className="font-heading font-extrabold text-[#111] text-[12px] sm:text-[13px] uppercase tracking-[0.1em]">
                    {label}
                </span>
                <span className="font-heading font-black text-[#111] text-[13px] sm:text-[14px]">
                    {value}%
                </span>
            </div>

            {/* Track */}
            <div className="w-full h-[5px] bg-gray-200 rounded-full overflow-hidden relative">
                {/* Fill */}
                <motion.div
                    className="absolute top-0 left-0 h-full bg-[#FFB703] rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${value}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: index * 0.2, ease: 'easeOut' }}
                />
                {/* Accent glow at the tip */}
                <motion.div
                    className="absolute top-[-2px] h-[9px] w-[9px] bg-[#FFB703] rounded-full shadow-[0_0_8px_rgba(255,183,3,0.5)]"
                    initial={{ left: 0, opacity: 0 }}
                    animate={inView ? { left: `calc(${value}% - 4px)`, opacity: 1 } : { left: 0, opacity: 0 }}
                    transition={{ duration: 1.2, delay: index * 0.2, ease: 'easeOut' }}
                />
            </div>
        </motion.div>
    )
}

const About6 = () => {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* ===== LEFT: Worker Image + Stat Card ===== */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={0}
                        className="relative"
                    >
                        {/* Main Worker Image */}
                        <div className="relative overflow-hidden">
                            <img
                                srcSet="/sm/about-worker.webp 400w, /md/about-worker.webp 800w, /lg/about-worker.webp 1200w"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                src="/lg/about-worker.webp"
                                alt="Construction worker with hard hat"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-[420px] sm:h-[480px] md:h-[540px] lg:h-[580px] object-cover object-top"
                            />

                            {/* Decorative yellow diagonal accent top-right */}
                            <div
                                className="absolute top-0 right-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-[#FFB703]"
                                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                            />
                        </div>

                        {/* 99% Happy Customer Card – overlapping bottom-left */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={2}
                            className="absolute bottom-0 left-0 z-10"
                        >
                            <div className="bg-[#FFB703] px-8 sm:px-10 py-7 sm:py-8 min-w-[220px] sm:min-w-[260px] relative overflow-hidden">
                                {/* Decorative triangle */}
                                <div
                                    className="absolute bottom-0 right-0 w-12 h-12 bg-[#E5A503]/40"
                                    style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}
                                />

                                <div className="relative z-10 text-center">
                                    <div className="flex items-baseline justify-center gap-0.5 mb-1.5">
                                        <motion.span
                                            className="text-[#111] font-heading font-black text-[3rem] sm:text-[3.5rem] leading-none"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                                        >
                                            99
                                        </motion.span>
                                        <span className="text-[#111] font-heading font-black text-[1.8rem] sm:text-[2rem] leading-none">
                                            %
                                        </span>
                                    </div>
                                    <h4 className="font-heading font-extrabold text-[#111] text-[12px] sm:text-[13px] uppercase tracking-[0.12em] mb-1.5">
                                        Happy Customer
                                    </h4>
                                    <p className="text-[#111]/60 text-[11px] sm:text-[12px] leading-[1.5] italic">
                                        Delivering satisfaction with<br />
                                        every project
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Subtle border accent */}
                        <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/20 pointer-events-none" />
                    </motion.div>

                    {/* ===== RIGHT: Content + Progress Bars ===== */}
                    <div className="flex flex-col">
                        {/* Badge */}
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                            className="mb-5"
                        >
                            <span className="bg-[#FFB703] text-[#111] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-[6px] inline-block">
                                // Quality Construction
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={2}
                            className="font-heading font-black text-[#111] text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.08] tracking-[-0.01em] uppercase mb-6"
                        >
                            Building Excellence<br />
                            With Precision
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={3}
                            className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.75] max-w-[440px] mb-7"
                        >
                            We focus on superior craftsmanship, durable
                            materials, and professional execution to deliver
                            consistently outstanding construction results.
                        </motion.p>

                        {/* CTA */}
                        <motion.a
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={4}
                            href="#"
                            className="group inline-flex items-center gap-2.5 text-[#111] font-bold text-[13px] uppercase tracking-[0.14em] hover:text-[#FFB703] transition-colors duration-300 mb-10"
                        >
                            <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            View All Projects
                        </motion.a>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-gray-200 mb-8" />

                        {/* Progress Bars */}
                        <div>
                            {progressBars.map((bar, i) => (
                                <ProgressBar
                                    key={i}
                                    label={bar.label}
                                    value={bar.value}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About6
