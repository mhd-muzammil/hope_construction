import React from 'react';
import { motion } from 'framer-motion';

const Home6 = () => {
    // Animation variants for staggered child animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        },
    };

    return (
        <section className="relative w-full bg-[#EAF3FA] overflow-hidden">
            {/* Animated Ribbon */}
            <div className="ribbon-container h-6 md:h-8 w-full z-20 relative" />

            <div className="flex flex-col lg:flex-row w-full min-h-[600px] xl:min-h-[700px]">
                {/* Left Content Area */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20 xl:px-28 z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-xl"
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants} className="inline-block bg-[#FFC107] text-black font-bold uppercase tracking-wider text-sm px-4 py-2 mb-8 mt-4">
                            // WHY CHOOSE US
                        </motion.div>

                        {/* Heading */}
                        <motion.h2 variants={itemVariants} className="text-[2.5rem] md:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold text-[#111] leading-[1.05] mb-8 tracking-tighter uppercase font-heading">
                            Choose us for reliable, <br className="hidden md:block" />
                            high&ndash;quality service
                        </motion.h2>

                        {/* Paragraph */}
                        <motion.p variants={itemVariants} className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
                            Our construction company delivers high quality, reliable services, creating durable, efficient, and innovative building solutions.
                        </motion.p>

                        {/* Link */}
                        <motion.a
                            variants={itemVariants}
                            href="#services"
                            className="group inline-flex items-center text-[#111] font-bold text-base uppercase tracking-wider transition-all duration-300 hover:text-[#FFC107]"
                        >
                            <span className="mr-3 text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                &#x2197;
                            </span>
                            View All Services
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right Image Area */}
                <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0.8 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        src="/home6-bg.png"
                        alt="Modern tall architecture building"
                        className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    />
                </div>
            </div>

            <style>{`
                .ribbon-container {
                    background: repeating-linear-gradient(
                        -45deg,
                        #111,
                        #111 20px,
                        #FFC107 20px,
                        #FFC107 40px
                    );
                    background-size: 56px 56px;
                    animation: stripeSlide 2s linear infinite;
                }
                
                @keyframes stripeSlide {
                    0% {
                        background-position: 0 0;
                    }
                    100% {
                        background-position: 56px 0;
                    }
                }
                
                .font-heading {
                    font-family: 'Inter', 'Roboto', sans-serif;
                }
            `}</style>
        </section>
    );
};

export default Home6;