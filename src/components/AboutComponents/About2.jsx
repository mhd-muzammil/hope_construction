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
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' }
    })
}

const About2 = () => {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16">
                {/* Single 2-column grid so left & right columns flow together and images appear parallel */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-10">

                    {/* ===== LEFT COLUMN ===== */}
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
                            <span className="bg-[#FFB703] text-[#111] text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-[6px] inline-block">
                                // About Company
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                            className="font-heading font-black text-[#111] text-[2.2rem] sm:text-[2.5rem] md:text-[2.85rem] lg:text-[3.15rem] leading-[1.08] tracking-[-0.01em] mb-7"
                        >
                            BUILDING DREAMS<br />
                            WITH LASTING QUALITY
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={2}
                            className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.7] max-w-[380px] mb-8"
                        >
                            Our construction company delivers high quality,
                            reliable services, creating durable, efficient, and
                            innovative building solutions.
                        </motion.p>

                        {/* CTA Link */}
                        <motion.a
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={3}
                            href="#"
                            className="group inline-flex items-center gap-2 text-[#111] font-bold text-[13px] uppercase tracking-[0.12em] hover:text-[#FFB703] transition-colors duration-300 mb-8 lg:mb-10"
                        >
                            <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            Join Us Now
                        </motion.a>

                        {/* Construction Site Image */}
                        <motion.div
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={2}
                            className="overflow-hidden"
                        >
                            <img
                                src="/about-construction.png"
                                alt="Construction site with cranes"
                                className="w-full h-[320px] sm:h-[370px] md:h-[420px] lg:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>

                    {/* ===== RIGHT COLUMN ===== */}
                    <div className="flex flex-col">
                        {/* Worker Image */}
                        <motion.div
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={1}
                            className="overflow-hidden"
                        >
                            <img
                                src="/about-worker.png"
                                alt="Construction worker"
                                className="w-full h-[360px] sm:h-[400px] md:h-[430px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Spacing to push content down so it sits parallel to the construction image */}
                        <div className="mt-6 lg:mt-8 flex flex-col gap-8">
                            {/* Quote with yellow left border */}
                            <motion.div
                                variants={fadeInRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={2}
                                className="border-l-[3px] border-[#FFB703] pl-5 py-1"
                            >
                                <p className="text-[#333] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                                    We deliver reliable construction solutions
                                    through skilled teams, modern technology, and
                                    a strong commitment to <span className="font-semibold text-[#111]">long-lasting quality.</span>
                                </p>
                            </motion.div>

                            {/* Feature: Quality Commitment */}
                            <motion.div
                                variants={fadeInRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={3}
                                className="flex items-start gap-4 group"
                            >
                                <div className="shrink-0 w-[52px] h-[52px] bg-[#FFB703]/10 border border-[#FFB703]/30 flex items-center justify-center rounded group-hover:bg-[#FFB703]/20 transition-colors duration-300">
                                    <svg className="w-6 h-6 text-[#FFB703]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2a2.5 2.5 0 00-2.4 1.8l-.3 1.1a7.06 7.06 0 00-1.5.87l-1.1-.37a2.5 2.5 0 00-2.94 1.1l-.5.87a2.5 2.5 0 00.54 3l.8.74a7.1 7.1 0 000 1.76l-.8.74a2.5 2.5 0 00-.54 3l.5.87a2.5 2.5 0 002.94 1.1l1.1-.37c.46.34.96.63 1.5.87l.3 1.1A2.5 2.5 0 0012 22a2.5 2.5 0 002.4-1.8l.3-1.1a7.06 7.06 0 001.5-.87l1.1.37a2.5 2.5 0 002.94-1.1l.5-.87a2.5 2.5 0 00-.54-3l-.8-.74a7.1 7.1 0 000-1.76l.8-.74a2.5 2.5 0 00.54-3l-.5-.87a2.5 2.5 0 00-2.94-1.1l-1.1.37a7.06 7.06 0 00-1.5-.87l-.3-1.1A2.5 2.5 0 0012 2zm0 7a3 3 0 110 6 3 3 0 010-6z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-heading font-extrabold text-[#111] text-[13px] sm:text-[14px] uppercase tracking-[0.1em] mb-1.5">
                                        Quality Commitment
                                    </h4>
                                    <p className="text-gray-500 text-[13px] sm:text-[14px] leading-[1.6]">
                                        Delivering high-quality, reliable construction with
                                        excellence and precision
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature: Trusted Expertise */}
                            <motion.div
                                variants={fadeInRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={4}
                                className="flex items-start gap-4 group"
                            >
                                <div className="shrink-0 w-[52px] h-[52px] bg-[#FFB703]/10 border border-[#FFB703]/30 flex items-center justify-center rounded group-hover:bg-[#FFB703]/20 transition-colors duration-300">
                                    <svg className="w-6 h-6 text-[#FFB703]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.62c0-1.17.68-2.25 1.76-2.73 1.17-.51 2.61-.9 4.24-.9zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 000 16.43V18h4.5v-1.62c0-.83.23-1.61.63-2.28zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0020 14c-.39 0-.76.04-1.13.1.4.67.63 1.45.63 2.28V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-heading font-extrabold text-[#111] text-[13px] sm:text-[14px] uppercase tracking-[0.1em] mb-1.5">
                                        Trusted Expertise
                                    </h4>
                                    <p className="text-gray-500 text-[13px] sm:text-[14px] leading-[1.6]">
                                        Providing reliable guidance built on experience,
                                        professionalism, and proven capability
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ===== MARQUEE STRIP ===== */}
            <div className="mt-16 md:mt-20 overflow-hidden bg-white py-6 border-t border-b border-gray-100">
                <div className="marquee-track flex items-center whitespace-nowrap">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center shrink-0">
                            <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-heading font-black uppercase tracking-tight text-transparent"
                                style={{ WebkitTextStroke: '1.5px #d1d5db' }}>
                                Building Success Together
                            </span>
                            <span className="text-[#d1d5db] text-[1.5rem] sm:text-[2rem] mx-6 sm:mx-8 font-light">+</span>
                            <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-heading font-black uppercase tracking-tight text-[#111]">
                                Building Success Together
                            </span>
                            <span className="text-[#d1d5db] text-[1.5rem] sm:text-[2rem] mx-6 sm:mx-8 font-light">+</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .marquee-track {
                    animation: marqueeScroll 10s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
                @keyframes marqueeScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    )
}

export default About2
