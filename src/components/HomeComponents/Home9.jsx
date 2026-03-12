import React from 'react';
import { motion } from 'framer-motion';

const Home9 = () => {
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

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };
    const testimonials = [
        {
            rating: 5,
            text: "We greatly appreciate the team's commitment to safety, quality, and client satisfaction, making our commercial construction project a complete success.",
            name: "ANITHA RAMESH",
            role: "Property Manager",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            rating: 5,
            text: "From planning to completion, their dedication, skill, and innovative approach made our building project smooth, efficient, and stress-free entirely.",
            name: "MUTHUKUMAR S.",
            role: "Interior Designer",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            rating: 5,
            text: "Their expertise, integrity, and attention to detail resulted in a high-quality building, delivered on time and exceeding all expectations remarkably.",
            name: "KARTHIKEYAN V.",
            role: "Real Estate Developer",
            avatar: "https://randomuser.me/api/portraits/men/46.jpg"
        },
        {
            rating: 5,
            text: "The team exceeded our expectations, providing high-quality materials, excellent workmanship, and reliable communication throughout every stage of our construction process.",
            name: "PRIYADHARSHINI K.",
            role: "Operations Director",
            avatar: "/avatar_emma.webp"
        }
    ];

    return (
        <section className="w-full bg-[#111] pt-20 pb-20 md:pt-28 md:pb-32 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 relative">
            <div className="w-full max-w-[1440px] mx-auto flex flex-col">

                {/* Top Header Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 md:mb-24 relative z-10"
                >
                    <div className="lg:w-2/3 max-w-3xl mb-12 lg:mb-0">
                        {/* Badge */}
                        <motion.div variants={itemVariants} className="inline-block bg-[#FFC107] text-[#111] font-bold uppercase tracking-wider text-[11px] sm:text-xs md:text-sm px-4 py-2 mb-8">
                            // TRUSTED CLIENT REVIEWS
                        </motion.div>

                        {/* Heading */}
                        <motion.h2 variants={itemVariants} className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4rem] font-extrabold text-white leading-[1.05] tracking-tighter uppercase font-heading">
                            Real customer <br className="hidden sm:block" />
                            feedback from our <br className="hidden sm:block" />
                            clients
                        </motion.h2>
                    </div>

                    {/* Right Rating Box */}
                    <motion.div variants={itemVariants} className="w-full lg:w-auto bg-[#FFC107] p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center shadow-2xl relative lg:-mt-10 self-start">
                        {/* Aesthetic cut corner on top right could be done by clip-path, but simple blocks are more robust */}
                        <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 bg-white transform translate-x-1/2 -translate-y-1/2 rotate-45 hidden lg:block"></div>

                        <h3 className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-black text-[#111] leading-none mb-2 font-heading tracking-tighter">
                            4.9/5
                        </h3>

                        <div className="flex items-center space-x-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} width="22" height="22" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="#111">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>

                        <p className="text-[#111] font-semibold text-sm sm:text-base leading-snug">
                            4.9/5 based on 25+ <br /> reviews
                        </p>
                    </motion.div>
                </motion.div>

                {/* Testimonial Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 z-10 relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div variants={itemVariants} key={index} className="bg-white flex flex-col h-full group pb-1 transition-transform duration-300 hover:-translate-y-2">
                            {/* Card Content Top */}
                            <div className="p-8 md:p-10 flex-grow border-b border-gray-100 flex flex-col">
                                {/* Stars */}
                                <div className="flex items-center space-x-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-600 font-medium text-[15px] md:text-[16px] leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </div>

                            {/* Card Footer (Author) */}
                            <div className="p-6 md:p-8 flex items-center justify-between relative overflow-hidden">
                                <div className="flex items-center space-x-4">
                                    {/* Avatar */}
                                    <div className="w-12 h-12 md:w-14 md:h-14 overflow-hidden shadow-sm shrink-0">
                                        <img src={testimonial.avatar} alt={testimonial.name} loading="lazy" decoding="async" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                                    </div>

                                    {/* Author Info */}
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[#111] text-[13px] md:text-sm uppercase tracking-wide">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-gray-400 text-xs md:text-sm">
                                            {testimonial.role}
                                        </span>
                                    </div>
                                </div>

                                {/* Quote Icon purely decorative, slightly visible on hover */}
                                <div className="absolute right-4 bottom-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500 ease-out transform group-hover:scale-110">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFC107">
                                        <path d="M10 11h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4H7v-3h1a1 1 0 0 0 1-1v-4z" />
                                        <path d="M20 11h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4h-1v-3h1a1 1 0 0 0 1-1v-4z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Yellow Hover Line Effect - matching reference precisely */}
                            <div className="w-full h-[6px] md:h-[8px] bg-[#FFC107] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                        </motion.div>
                    ))}
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

export default Home9;