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

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index + 2}
            className="relative flex flex-col px-7 py-8 lg:px-9 lg:py-10 cursor-default group border-r border-gray-200 last:border-r-0 hover:bg-gray-50/80 transition-colors duration-300"
        >
            {/* Subtitle */}
            <span className="text-[#999] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] mb-8 lg:mb-12">
                {service.subtitle}
            </span>

            {/* Icon */}
            <div className="mb-5 transition-transform duration-500 ease-out group-hover:scale-110">
                {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-heading font-black text-[#111] text-[1.1rem] sm:text-[1.25rem] lg:text-[1.35rem] uppercase tracking-[0.02em] leading-tight">
                {service.title}
            </h3>

            {/* Bottom accent line on hover – absolute so it doesn't affect layout */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FFB703] transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
        </motion.div>
    )
}

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
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    custom={2}
                    className="border border-gray-200 rounded-sm"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, i) => (
                            <ServiceCard
                                key={i}
                                service={service}
                                index={i}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About4
