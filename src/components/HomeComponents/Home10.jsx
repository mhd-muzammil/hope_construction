import React from 'react';
import { motion } from 'framer-motion';

const Home10 = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            }
        }
    };

    const leftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="relative w-full py-24 sm:py-32 md:py-40 lg:py-48 flex items-center justify-center overflow-hidden group">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full z-0 bg-gray-900">
                <div className="absolute inset-0 bg-black/60 sm:bg-black/50 z-10 transition-colors duration-700 group-hover:bg-black/60"></div>
                <img
                    src="/home10-bg.png"
                    alt="Construction worker"
                    className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 mx-auto">
                <motion.div
                    className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16 xl:gap-24"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >

                    {/* Left: Headline */}
                    <div className="w-full lg:w-[55%] xl:w-3/5">
                        <motion.h2 variants={leftVariants} className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[3.8rem] xl:text-[4.5rem] font-extrabold text-white leading-[1.05] tracking-tight uppercase font-heading drop-shadow-md">
                            Building strong foundations, <br className="hidden xl:block" />
                            delivering excellence every <br className="hidden xl:block" />
                            time
                        </motion.h2>
                    </div>

                    {/* Right: Paragraph and Button */}
                    <div className="w-full lg:w-[45%] xl:w-2/5 flex flex-col items-start">
                        <motion.p variants={rightVariants} className="text-white/95 text-[15px] sm:text-[17px] md:text-[19px] font-medium leading-relaxed mb-8 md:mb-10 drop-shadow">
                            We deliver high-quality construction projects, combining skilled teams, modern technology, and commitment to client satisfaction.
                        </motion.p>

                        {/* Custom Discover Now Button */}
                        <motion.button variants={rightVariants} className="flex items-stretch group/btn cursor-pointer mt-2 overflow-hidden shadow-lg">
                            <div className="bg-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-colors duration-300 relative z-10">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="transform group-hover/btn:scale-110 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300">
                                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                                </svg>
                            </div>
                            <div className="bg-[#FFC107] h-14 md:h-16 px-8 md:px-10 flex items-center justify-center transition-colors duration-300 group-hover/btn:bg-[#e6ae06] relative z-0">
                                <span className="text-[#111] font-bold text-[13px] md:text-[15px] tracking-[0.1em] uppercase">
                                    Discover Now
                                </span>
                            </div>
                        </motion.button>
                    </div>

                </motion.div>
            </div>

            <style>{`
                .font-heading {
                    font-family: 'Inter', 'Roboto', sans-serif;
                }
            `}</style>
        </section>
    );
};

export default Home10;