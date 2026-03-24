import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const ongoingProjects = [
    { src: '/project6.jpeg', alt: 'Project 6' },
    { src: '/project7.jpeg', alt: 'Project 7' },
    { src: '/project8.jpeg', alt: 'Project 8' },
    { src: '/project17.jpeg', alt: 'Project 17' },
    { src: '/project18.jpeg', alt: 'Project 18' },
    { src: '/project19.jpeg', alt: 'Project 19' },
    { src: '/project20.jpeg', alt: 'Project 20' },
    { src: '/forsale4.jpeg', alt: 'Ongoing Project 8' },
    { src: '/forsale5.jpeg', alt: 'Ongoing Project 9' },
    { src: '/forsale6.jpeg', alt: 'Ongoing Project 10' },
    { src: '/forsale7.jpeg', alt: 'Ongoing Project 11' },
]

const completedProjects = [
    { src: '/project1.webp', alt: 'Prestige Central Towers' },
    { src: '/project2.webp', alt: 'Maplewood Urban Complex' },
    { src: '/project3.webp', alt: 'Sunrise Meadow Homes' },
    { src: '/project4.webp', alt: 'Harborline Living Project' },
    { src: '/project10 (1).jpeg', alt: 'Completed Project 1' },
    { src: '/project10 (2).jpeg', alt: 'Completed Project 2' },
    { src: '/project10 (3).jpeg', alt: 'Completed Project 3' },
    { src: '/project10 (4).jpeg', alt: 'Completed Project 4' },
    { src: '/project10 (5).jpeg', alt: 'Completed Project 5' },
]

const forSaleProjects = [
    { src: '/forsale1.jpeg', alt: 'Property For Sale 1' },
    { src: '/forsale2.jpeg', alt: 'Property For Sale 2' },
    { src: '/forsale3.jpeg', alt: 'Property For Sale 3' },
    { src: '/forsale4.jpeg', alt: 'Property For Sale 4' },
    { src: '/forsale5.jpeg', alt: 'Property For Sale 5' },
    { src: '/forsale6.jpeg', alt: 'Property For Sale 6' },
    { src: '/forsale7.jpeg', alt: 'Property For Sale 7' },
    { src: '/forsale8.jpeg', alt: 'Property For Sale 8' },
    { src: '/forsale9.jpeg', alt: 'Property For Sale 9' },
    { src: '/forsale10.jpeg', alt: 'Property For Sale 10' },
    { src: '/forsale11.jpeg', alt: 'Property For Sale 11' },
]

const interiorProjects = [
    { src: '/interior/interior1.jpeg', alt: 'Interior Design 1' },
    { src: '/interior/interior2.jpeg', alt: 'Interior Design 2' },
    { src: '/interior/interior3.jpeg', alt: 'Interior Design 3' },
    { src: '/interior/interior4.jpeg', alt: 'Interior Design 4' },
    { src: '/interior/interior5.jpeg', alt: 'Interior Design 5' },
    { src: '/interior/interior6.jpeg', alt: 'Interior Design 6' },
    { src: '/interior/interior7.jpeg', alt: 'Interior Design 7' },
    { src: '/interior/interior8.jpeg', alt: 'Interior Design 8' },
    { src: '/interior/interior9.jpeg', alt: 'Interior Design 9' },
    { src: '/interior/interior10.jpeg', alt: 'Interior Design 10' },
    { src: '/interior/interior11.jpeg', alt: 'Interior Design 11' },
    { src: '/interior/interior12.jpeg', alt: 'Interior Design 12' },
    { src: '/interior/interior13.jpeg', alt: 'Interior Design 13' },
    { src: '/interior/interior14.jpeg', alt: 'Interior Design 14' },
    { src: '/interior/interior15.jpeg', alt: 'Interior Design 15' },
    { src: '/interior/interior16.jpeg', alt: 'Interior Design 16' },
    { src: '/interior/interior17.jpeg', alt: 'Interior Design 17' },
    { src: '/interior/interior18.jpeg', alt: 'Interior Design 18' },
    { src: '/interior/interior19.jpeg', alt: 'Interior Design 19' },
    { src: '/interior/interior20.jpeg', alt: 'Interior Design 20' },
    { src: '/interior/interior21.jpeg', alt: 'Interior Design 21' },
    { src: '/interior/interior22.jpeg', alt: 'Interior Design 22' },
    { src: '/interior/interior23.jpeg', alt: 'Interior Design 23' },
    { src: '/interior/interior24.jpeg', alt: 'Interior Design 24' },
    { src: '/interior/interior25.jpeg', alt: 'Interior Design 25' },
    { src: '/interior/interior26.jpeg', alt: 'Interior Design 26' },
    { src: '/interior/interior27.jpeg', alt: 'Interior Design 27' },
    { src: '/interior/interior28.jpeg', alt: 'Interior Design 28' },
]

const tabs = [
    { key: 'ongoing', label: 'Ongoing', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )},
    { key: 'completed', label: 'Completed', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )},
    { key: 'sales', label: 'For Sales', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
        </svg>
    )},
    { key: 'interior', label: 'Interior', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
    )},
]

const dataMap = {
    ongoing: ongoingProjects,
    completed: completedProjects,
    sales: forSaleProjects,
    interior: interiorProjects,
}

const ProjectMediaGallery = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const tabFromUrl = searchParams.get('tab')
    const [activeTab, setActiveTab] = useState(
        tabFromUrl && dataMap[tabFromUrl] ? tabFromUrl : 'ongoing'
    )
    const [lightbox, setLightbox] = useState({ open: false, src: '', index: 0 })

    useEffect(() => {
        if (tabFromUrl && dataMap[tabFromUrl]) {
            setActiveTab(tabFromUrl)
        }
    }, [tabFromUrl])

    const handleTabChange = (key) => {
        setActiveTab(key)
        setSearchParams({ tab: key })
    }

    const currentImages = dataMap[activeTab] || []

    const openLightbox = (src, index) => setLightbox({ open: true, src, index })
    const closeLightbox = () => setLightbox({ open: false, src: '', index: 0 })

    const navigateLightbox = (direction) => {
        const newIndex = lightbox.index + direction
        if (newIndex >= 0 && newIndex < currentImages.length) {
            setLightbox({ open: true, src: currentImages[newIndex].src, index: newIndex })
        }
    }

    return (
        <section id="project-gallery" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block text-[#F5B400] font-bold text-xs tracking-[0.2em] uppercase mb-3"
                    >
                        Our Projects
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-heading font-black text-[#111] text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.1] tracking-tight uppercase"
                    >
                        Explore Our Work
                    </motion.h2>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => handleTabChange(tab.key)}
                            className={`relative px-6 sm:px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 overflow-hidden ${
                                activeTab === tab.key
                                    ? 'bg-[#F5B400] text-[#111] shadow-lg shadow-[#F5B400]/25'
                                    : 'bg-[#f1f1f1] text-[#555] hover:bg-[#e5e5e5]'
                            }`}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {tab.icon}
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {currentImages.map((photo, i) => (
                            <motion.div
                                key={`${activeTab}-${i}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-gray-100"
                                onClick={() => openLightbox(photo.src, i)}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        <div className="w-12 h-12 rounded-full bg-[#F5B400] flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#111]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* Bottom Label */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white text-sm font-semibold">{photo.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {currentImages.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No projects found in this category.</p>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox.open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute -top-12 right-0 text-white hover:text-[#F5B400] transition-colors z-20"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Prev Button */}
                            {lightbox.index > 0 && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                                    className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-[#F5B400] text-white hover:text-[#111] flex items-center justify-center transition-all z-20"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            )}

                            {/* Next Button */}
                            {lightbox.index < currentImages.length - 1 && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                                    className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-[#F5B400] text-white hover:text-[#111] flex items-center justify-center transition-all z-20"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            )}

                            <img
                                src={lightbox.src}
                                alt="Enlarged view"
                                className="w-full h-auto max-h-[85vh] object-contain"
                            />

                            {/* Image Counter */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
                                {lightbox.index + 1} / {currentImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default ProjectMediaGallery
