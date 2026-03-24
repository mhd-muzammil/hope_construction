import React from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const Home2 = () => {
    // Using local images for reliability instead of external unsplash
    const craneImg = "/sec2img1.png"
    const buildingImg = "/sec2img2.png"

    // Animation variants
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    return (
        <section className="w-full bg-white pt-24 pb-20 overflow-hidden">
            {/* Top Header Section */}
            <div className="relative w-full max-w-[1920px] mx-auto mb-20">
                {/* Left Edge Badge */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute left-0 top-2 hidden xl:block bg-[#FFB800] px-6 py-3"
                >
                    <span className="text-black font-bold uppercase tracking-widest text-sm">
                        Who We Are
                    </span>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center"
                >
                    {/* Mobile/Tablet Badge */}
                    <motion.div variants={fadeUpVariants} className="xl:hidden bg-[#FFB800] px-5 py-2 mb-8 inline-block">
                        <span className="text-black font-bold uppercase tracking-widest text-sm">
                            Who We Are
                        </span>
                    </motion.div>

                    <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold uppercase leading-[1.1] mb-8 font-sans tracking-tight max-w-5xl text-[#0a0a0a]">
                        Crafting Reliable Spaces<br className="hidden md:block" />
                        With Expert Precision
                    </motion.h2>

                    <motion.p variants={fadeUpVariants} className="text-gray-500 text-base md:text-lg max-w-[650px] mb-10 leading-relaxed font-light">
                        Founded by Baskar R, with 11+ years of experience in project management. Our construction company provides reliable, high-quality building solutions, combining skilled teams and modern technology to deliver durable projects.
                    </motion.p>

                    <motion.button variants={fadeUpVariants} className="group flex items-center justify-center gap-4 font-bold uppercase text-[13px] tracking-widest hover:text-[#FFB800] transition-colors text-[#0a0a0a]">
                        <span className="p-2.5 border border-gray-300 group-hover:border-[#FFB800] transition-colors rounded-sm flex items-center justify-center">
                            <ArrowUpRightIcon className="w-4 h-4 text-[#0a0a0a] group-hover:text-[#FFB800] transition-colors" />
                        </span>
                        Join Us Now
                    </motion.button>
                </motion.div>
            </div>

            {/* 4-Column Full Width Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
                className="w-full flex flex-col lg:flex-row min-h-[600px] mb-24"
            >
                {/* Image 1 - Crane */}
                <motion.div variants={fadeUpVariants} className="lg:w-1/4 h-[400px] lg:h-auto relative overflow-hidden group">
                    <img
                        src={craneImg}
                        alt="Construction Crane"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>

                {/* Info Card 1 - Yellow */}
                <motion.div variants={fadeUpVariants} className="lg:w-1/4 h-[400px] lg:h-auto bg-[#FFB800] p-10 xl:p-14 flex flex-col items-start justify-center relative overflow-hidden">
                    {/* Decorative Background Pattern */}
                    <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 100L10 60L30 60L30 100M40 100L40 40L60 40L60 100M70 100L70 20L90 20L90 100' stroke='%23000' stroke-width='1' fill='none'/%3E%3C/svg%3E")`, backgroundSize: '150px', backgroundRepeat: 'repeat-x', backgroundPosition: 'bottom right' }}></div>

                    <div className="relative z-10 w-full">
                        <h3 className="text-black text-3xl xl:text-4xl font-extrabold uppercase leading-[1.1] tracking-tight mb-6">
                            Quality<br />
                            Construction,<br />
                            Lasting<br />
                            Value
                        </h3>
                        <p className="text-black/80 text-sm xl:text-base leading-relaxed max-w-[90%] font-medium">
                            Delivering exceptional craftsmanship and durable results for every project.
                        </p>
                    </div>
                </motion.div>

                {/* Image 2 - Building */}
                <motion.div variants={fadeUpVariants} className="lg:w-1/4 h-[400px] lg:h-auto relative overflow-hidden group">
                    <img
                        src={buildingImg}
                        alt="Modern Building"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>

                {/* Info Card 2 - Black */}
                <motion.div variants={fadeUpVariants} className="lg:w-1/4 h-[400px] lg:h-auto bg-[#0a0a0a] p-10 xl:p-14 flex flex-col justify-center relative overflow-hidden">
                    {/* Decorative Background Pattern */}
                    <div className="absolute bottom-0 right-0 w-full h-2/3 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 100L10 60L30 60L30 100M40 100L40 40L60 40L60 100M70 100L70 20L90 20L90 100' stroke='%23FFF' stroke-width='1' fill='none'/%3E%3C/svg%3E")`, backgroundSize: '150px', backgroundRepeat: 'repeat-x', backgroundPosition: 'bottom right' }}></div>

                    <div className="relative z-10">
                        <p className="text-gray-400 text-sm xl:text-base leading-relaxed mb-16 max-w-[90%] font-light">
                            Ensuring dependable building solutions that stand the test.
                        </p>
                        <h3 className="text-white text-3xl xl:text-4xl font-extrabold uppercase leading-[1.1] tracking-tight">
                            Reliable<br />
                            Construction,<br />
                            Lasting<br />
                            Value
                        </h3>
                    </div>
                </motion.div>
            </motion.div>

            {/* 4-Column Stats Section */}
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-12"
                >

                    {/* Stat Items */}
                    {[
                        { title: "Years Experience", desc: "Decades of unparalleled expertise, setting the benchmark for trusted construction services.", stat: "11" },
                        { title: "Completed Projects", desc: "Successfully delivering diverse construction projects on time, exceeding expectations.", stat: "25" },
                        { title: "Happy Customer", desc: "Committed to ensuring client satisfaction through exceptional building services.", stat: "25" },
                        { title: "Safety Record", desc: "Maintaining the highest safety standards across all our construction sites.", stat: "100" }
                    ].map((item, index) => (
                        <motion.div key={index} variants={fadeUpVariants} className="flex flex-col border-t border-gray-200 pt-8 lg:pt-10">
                            <h4 className="text-[#0a0a0a] font-bold text-lg uppercase tracking-wider mb-4">
                                {item.title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                {item.desc}
                            </p>
                            <div className="flex items-baseline gap-1 mt-auto">
                                <span className="text-[#ffb703] font-black text-5xl md:text-6xl tracking-tighter">
                                    {item.stat}
                                </span>
                                <span className="text-[#ffb703] font-bold text-3xl md:text-4xl">
                                    {item.stat === "100" ? "%" : "+"}
                                </span>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    )
}

export default Home2