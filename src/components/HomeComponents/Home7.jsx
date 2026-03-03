import React from 'react';
import { motion } from 'framer-motion';

const Home7 = () => {
    // Animation variants for grid container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };

    // Animation variants for each individual grid item
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };
    const features = [
        {
            subtitle: "RESPONSIVE, PERSONALIZED, RELIABLE",
            title: "CUSTOMER FOCUS",
            description: "We listen to our clients and tailor our services to meet their specific needs, ensuring complete satisfaction.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M19 11v6" stroke="#FFC107" strokeWidth="2" />
                    <path d="M22 14l-3 3-3-3" stroke="#FFC107" strokeWidth="2" />
                </svg>
            ),
        },
        {
            subtitle: "EXPERT CONSTRUCTION TEAM",
            title: "RELIABLE DELIVERY",
            description: "Committed to completing all projects on time, within budget, while consistently exceeding client expectations.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M16 21v-6H8v6" />
                    <path d="M8 15V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
                    <path d="M12 7V3" stroke="#FFC107" strokeWidth="2" />
                    <path d="M10 5h4" stroke="#FFC107" strokeWidth="2" />
                </svg>
            ),
        },
        {
            subtitle: "RELIABLE QUALITY DELIVERY",
            title: "SERVICE EXCELLENCE",
            description: "We approach construction differently, delivering value beyond our client's expectations.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#111" />
                    <path d="M14.7 9.3l-5.4 5.4" stroke="#FFC107" strokeWidth="2" />
                    <circle cx="15.5" cy="8.5" r="1.5" fill="#FFC107" stroke="none" />
                </svg>
            ),
        },
        {
            subtitle: "CREATIVE, EFFICIENT, SUSTAINABLE",
            title: "INNOVATIVE SOLUTIONS",
            description: "Utilizing the latest technologies and methodologies to provide forward-thinking solutions.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" stroke="#FFC107" strokeWidth="2" />
                    <line x1="12" y1="8" x2="12.01" y2="8" stroke="#FFC107" strokeWidth="3" />
                    <path d="M4.93 4.93l4.24 4.24" />
                    <path d="M14.83 14.83l4.24 4.24" />
                    <path d="M4.93 19.07l4.24-4.24" />
                    <path d="M14.83 9.17l4.24-4.24" />
                </svg>
            ),
        }
    ];

    return (
        <section className="w-full bg-white border-b border-gray-200 overflow-hidden">
            <motion.div
                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        variants={itemVariants}
                        key={index}
                        className={`group relative flex flex-col justify-start p-10 md:p-12 xl:p-14 min-h-[360px] md:min-h-[420px] bg-white transition-all duration-500 ease-in-out border-b lg:border-b-0 ${index !== features.length - 1 ? 'lg:border-r border-gray-200' : ''
                            } ${index % 2 === 0 ? 'md:border-r border-gray-200' : ''
                            }`}
                    >
                        {/* Subtitle */}
                        <p className="text-gray-400 font-bold text-[10px] md:text-xs tracking-[0.1em] xl:tracking-[0.15em] uppercase mb-16 h-8">
                            {feature.subtitle}
                        </p>

                        <div className="mt-auto flex flex-col justify-end relative z-10">
                            {/* Icon Container (Moves up heavily on hover) */}
                            <div className="mb-8 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                                {feature.icon}
                            </div>

                            {/* Title Component (Moves up heavily & changes color) */}
                            <h3 className="text-xl md:text-[1.4rem] xl:text-3xl font-black text-[#111] uppercase tracking-tighter font-heading leading-none transition-all duration-500 group-hover:-translate-y-12 group-hover:text-[#FFC107]">
                                {feature.title}
                            </h3>

                            {/* Expanding description container absolute positioned to avoid layout shifts */}
                            <div className="absolute top-full left-0 w-full pt-4 opacity-0 transform translate-y-4 transition-all duration-500 ease-in-out group-hover:-translate-y-12 group-hover:opacity-100 pointer-events-none">
                                <p className="text-gray-500 font-medium text-sm md:text-[15px] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>

                        {/* Absolute Hover Bottom Line */}
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFC107] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-20" />
                    </motion.div>
                ))}
            </motion.div>
            <style>{`
                .font-heading {
                    font-family: 'Inter', 'Roboto', sans-serif;
                }
            `}</style>
        </section>
    );
};

export default Home7;
