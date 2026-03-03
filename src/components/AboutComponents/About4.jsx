import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' }
    })
}

/* ── Card Data ── */
const services = [
    {
        subtitle: 'Responsive, Personalized, Reliable',
        title: 'Customer Focus',
        desc: 'We prioritize client needs, ensuring responsive communication, tailored solutions, and reliable project outcomes every time.',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                <circle cx="32" cy="20" r="8" stroke="#111" strokeWidth="2.5" fill="none" />
                <path d="M16 50c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <circle cx="32" cy="10" r="3" fill="#FFB703" />
                <path d="M28 8l4-5 4 5" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        subtitle: 'Expert Construction Team',
        title: 'Reliable Delivery',
        desc: 'Our experienced team consistently delivers projects on time and within budget, maintaining the highest standards of workmanship.',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                <rect x="8" y="32" width="48" height="16" rx="3" stroke="#111" strokeWidth="2.5" fill="none" />
                <rect x="14" y="26" width="36" height="8" rx="2" stroke="#111" strokeWidth="2.5" fill="none" />
                <rect x="20" y="20" width="24" height="8" rx="2" stroke="#111" strokeWidth="2" fill="none" />
                <circle cx="22" cy="40" r="3" fill="#FFB703" />
                <circle cx="32" cy="40" r="3" fill="#FFB703" />
                <circle cx="42" cy="40" r="3" fill="#FFB703" />
            </svg>
        )
    },
    {
        subtitle: 'Reliable Quality Delivery',
        title: 'Service Excellence',
        desc: "We approach construction differently, delivering value beyond our client's expectations with innovative methods and precision.",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                <path d="M36 18l6 6-20 20-8 2 2-8 20-20z" stroke="#111" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                <path d="M34 20l6 6" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M18 44l6 6" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" />
            </svg>
        )
    },
    {
        subtitle: 'Creative, Efficient, Sustainable',
        title: 'Innovative Solutions',
        desc: 'We integrate cutting-edge technology and sustainable practices to create forward-thinking construction solutions for every project.',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                <path d="M12 48l16-28 12 16 12-20" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M44 16l8 0 0 8" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="28" cy="20" r="2" fill="#FFB703" />
                <circle cx="40" cy="36" r="2" fill="#FFB703" />
            </svg>
        )
    }
]

const About4 = () => {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16">
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
                        // What We Do
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={1}
                    className="font-heading font-black text-[#111] text-[2.2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.08] tracking-[-0.01em] uppercase mb-14 lg:mb-16"
                >
                    Expert Construction<br />
                    Bringing Plans Alive
                </motion.h2>

                {/* Cards Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-sm">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className={`group relative flex flex-col p-10 md:p-12 xl:p-14 min-h-[420px] md:min-h-[480px] bg-white overflow-hidden transition-all duration-500 ease-in-out border-b lg:border-b-0 ${
                                i !== services.length - 1 ? 'lg:border-r border-gray-200' : ''
                            } ${i % 2 === 0 ? 'md:border-r border-gray-200' : ''}`}
                        >
                            {/* Subtle hover bg */}
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/0 to-gray-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Subtitle */}
                            <p className="relative z-10 text-gray-400 font-bold text-[10px] md:text-xs tracking-[0.1em] xl:tracking-[0.15em] uppercase mb-auto h-8">
                                {service.subtitle}
                            </p>

                            {/* Bottom content block */}
                            <div className="relative z-10 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
                                {/* Icon */}
                                <div className="mb-7 transition-transform duration-500 ease-in-out group-hover:scale-110">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-[1.4rem] xl:text-[1.6rem] font-black text-[#111] uppercase tracking-tight font-heading leading-[1.15] transition-colors duration-500 group-hover:text-[#FFB703]">
                                    {service.title}
                                </h3>

                                {/* Description – inside the card, clips cleanly */}
                                <div className="max-h-0 opacity-0 group-hover:max-h-[150px] group-hover:opacity-100 transition-all duration-500 ease-in-out mt-0 group-hover:mt-4">
                                    <p className="text-gray-500 text-[13px] md:text-[14px] leading-[1.7] font-medium">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFB703] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-20" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About4
