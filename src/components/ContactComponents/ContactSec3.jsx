import React from 'react'
import { motion } from 'framer-motion'

const cards = [
    {
        title: 'Team Support',
        image: '/contact-team.png',
        description:
            'Our dedicated team provides responsive assistance to ensure every client receives dependable guidance throughout projects.',
    },
    {
        title: 'Quick Assistance',
        image: '/contact-assist.png',
        description:
            'We deliver fast, clear solutions to help clients resolve concerns and maintain steady project progress efficiently.',
    },
    {
        title: 'Project Guidance',
        image: '/contact-guidance.png',
        description:
            'Expert advice helps clients navigate construction decisions confidently, ensuring each step aligns with project goals effectively.',
    },
]

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
    }),
}

const ContactSec3 = () => {
    return (
        <section className="relative">
            {/* ===== HERO BACKGROUND ===== */}
            <div
                className="relative w-full min-h-[420px] md:min-h-[520px] lg:min-h-[560px] flex items-center bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('/contact.png')",
                }}
            >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

                {/* Header Content */}
                <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16 w-full pt-16 pb-48 md:pb-56">
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
                            // Let's Work Together
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={1}
                        className="font-heading font-black text-white text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.08] tracking-[-0.01em] uppercase"
                    >
                        Need More Help?
                        <br />
                        Contact Our Team
                    </motion.h2>
                </div>
            </div>

            {/* ===== CARDS SECTION (overlapping the hero) ===== */}
            <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16 -mt-36 md:-mt-44 mb-20 md:mb-28">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white shadow-2xl rounded-sm overflow-hidden">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={i + 1}
                            className={`group relative p-7 sm:p-8 lg:p-10 flex flex-col ${
                                i < cards.length - 1
                                    ? 'border-b md:border-b-0 md:border-r border-gray-100'
                                    : ''
                            }`}
                        >
                            {/* Image Container with tilt & yellow accent */}
                            <div className="relative mb-7 overflow-visible">
                                {/* Yellow accent bar behind image */}
                                <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#FFB703]/20 rounded-sm transform rotate-1"></div>

                                {/* Image */}
                                <div className="relative overflow-hidden rounded-sm shadow-md transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 ease-out">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-[180px] sm:h-[200px] lg:h-[210px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    {/* Subtle overlay on hover */}
                                    <div className="absolute inset-0 bg-[#FFB703]/0 group-hover:bg-[#FFB703]/10 transition-colors duration-500"></div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="font-heading font-extrabold text-[#111] text-[15px] sm:text-[16px] uppercase tracking-[0.08em] mb-3 group-hover:text-[#FFB703] transition-colors duration-300">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 text-[13px] sm:text-[14px] leading-[1.7]">
                                {card.description}
                            </p>

                            {/* Bottom accent line on hover */}
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFB703] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactSec3