import React from 'react'

const Home6 = () => {
    return (
        <div className="mt-16 md:mt-20 overflow-hidden bg-white py-6 border-t border-b border-gray-100">
            <div className="marquee-track flex items-center whitespace-nowrap">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center shrink-0">
                        <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-heading font-black uppercase tracking-tight text-transparent"
                            style={{ WebkitTextStroke: '1.5px #d1d5db' }}>
                            Building Success Together
                        </span>
                        <span className="text-[#d1d5db] text-[1.5rem] sm:text-[2rem] mx-6 sm:mx-8 font-light">+</span>
                        <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-heading font-black uppercase tracking-tight text-[#111]">
                            Building Success Together
                        </span>
                        <span className="text-[#d1d5db] text-[1.5rem] sm:text-[2rem] mx-6 sm:mx-8 font-light">+</span>
                    </div>
                ))}
            </div>

            <style>{`
                .marquee-track {
                    animation: marqueeScroll 20s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
                @keyframes marqueeScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>

    )
}

export default Home6