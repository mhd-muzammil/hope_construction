import React from 'react'
import { motion } from 'framer-motion'
import { WrenchScrewdriverIcon, BuildingOffice2Icon, TruckIcon, Cog8ToothIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'

const Home3 = () => {
    // Services with background images for hover effect
    const services = [
        {
            title: "PROJECT\nMANAGEMENT",
            desc: "Expert oversight ensuring your project is delivered on time, within budget, and to the highest standards.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?q=80&w=800&auto=format&fit=crop",
            icon: <WrenchScrewdriverIcon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" />
        },
        {
            title: "COMMERCIAL\nCONSTRUCTION",
            desc: "Building state-of-the-art commercial facilities designed to elevate your business operations and brand presence.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
            icon: <BuildingOffice2Icon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" />
        },
        {
            title: "RENOVATION &\nREMODELING",
            desc: "We upgrade existing spaces with modern designs, improved functionality, and high-quality finishes.",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
            icon: <TruckIcon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" />
        },
        {
            title: "CONSTRUCTION\nPLANNING",
            desc: "Comprehensive pre-construction planning services that set the foundation for successful project execution.",
            image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop",
            icon: <Cog8ToothIcon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110" />
        }
    ]

    return (
        <section className="relative w-full bg-[#050505] overflow-hidden">
            {/* Top Image Section */}
            <div className="relative w-full h-[60svh] min-h-[450px] lg:h-[700px] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Modern Architecture Construction"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 select-none grayscale-[0.1]"
                />

                {/* Text overlay */}
                <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center -mt-8 md:-mt-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] tracking-tighter uppercase leading-[0.95] md:leading-[0.85] w-full flex flex-col items-center"
                    >
                        <span>Building Strength</span>
                        <span className="text-white px-2 mt-2 md:mt-0">With Integrity</span>
                    </motion.h2>
                </div>
            </div>

            {/* Straight Ribbon Marquee Divider */}
            <div className="relative w-full h-[40px] md:h-[60px] lg:h-[80px] z-20 overflow-hidden flex items-center justify-center pointer-events-none select-none bg-[#0a0a0a]">
                <div className="absolute w-[110%] h-full flex items-center justify-center border-y-4 border-[#050505]">
                    <div className="w-full h-full caution-tape animate-stripe-slide"></div>
                </div>
            </div>

            {/* Bottom Services Section */}
            <div className="w-full bg-[#050505] pt-16 md:pt-24 relative z-10">
                {/* Badge & Title */}
                <div className="container mx-auto px-6 mb-16 md:mb-20 flex flex-col items-center">

                    <div className="w-full relative flex flex-col xl:flex-row items-center justify-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="xl:absolute xl:left-0 bg-[#FFB800] px-6 py-2 xl:py-3 mb-8 xl:mb-0 self-start xl:self-auto z-10"
                        >
                            <span className="text-black font-bold uppercase tracking-widest text-xs md:text-sm whitespace-nowrap">
                                Explore Our Services
                            </span>
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-extrabold uppercase leading-[1.1] tracking-tight max-w-4xl text-center"
                        >
                            Quality Construction<br />
                            Solutions Provided
                        </motion.h3>
                    </div>
                </div>

                {/* Services Grid (Full width bleeding without container horizontal padding) */}
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/5 lg:divide-x divide-white/5">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
                                className="group relative overflow-hidden p-8 md:p-10 xl:p-14 flex flex-col border-b md:border-b-0 border-white/5 last:border-b-0 items-start cursor-pointer min-h-[400px] xl:min-h-[500px]"
                            >
                                {/* Hover Background Image */}
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                                    />
                                    {/* Gradient overlay to ensure text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                                </div>

                                {/* Content Layer */}
                                <div className="relative z-10 w-full h-full flex flex-col">
                                    {/* Icon Container (Moves depending on state) */}
                                    <div className="w-14 h-14 xl:w-20 xl:h-20 bg-white/5 border border-white/10 flex items-center justify-center text-white mb-auto group-hover:bg-[#FFB800] group-hover:border-[#FFB800] group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-none transform origin-top-left z-20">
                                        {service.icon}
                                    </div>

                                    {/* Text Content */}
                                    <div className="mt-8 xl:mt-12 flex flex-col justify-end transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-4">
                                        <h4 className="text-white font-extrabold text-2xl xl:text-3xl uppercase leading-[1.1] tracking-tight whitespace-pre-wrap mb-4 group-hover:drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                            {service.title}
                                        </h4>

                                        {/* Description (Reveals on hover) */}
                                        <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-[80px] group-hover:opacity-100 group-hover:mt-2">
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light drop-shadow-md">
                                                {service.desc}
                                            </p>
                                        </div>

                                        {/* Learn More Link (Reveals on hover) */}
                                        <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 delay-100 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 flex items-center gap-2">
                                            <ArrowUpRightIcon className="w-4 h-4 text-[#FFB800]" />
                                            <span className="text-white font-bold text-xs tracking-widest uppercase hover:text-[#FFB800] transition-colors">Learn More</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home3