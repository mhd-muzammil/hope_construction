import React from 'react'

const Service4 = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden flex flex-col justify-end">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        
        {/* ✅ Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        <img 
          src="/service10.png" 
          alt="Construction Equipment" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Marquee Text */}
      <div className="relative z-10 w-full mb-4 md:mb-6">
        <div className="marquee-track flex whitespace-nowrap overflow-visible">
          
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center shrink-0">
              
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center shrink-0">
                  
                  <span className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-heading font-black uppercase tracking-tight text-white leading-none">
                    BUILDING SUCCESS TOGETHER
                  </span>

                  <span className="text-white/80 text-[2rem] sm:text-[3rem] md:text-[4rem] mx-8 sm:mx-12 font-light leading-none">
                    +
                  </span>

                </div>
              ))}

            </div>
          ))}

        </div>
      </div>

      {/* Hazard Stripe Border */}
      <div className="w-full h-4 sm:h-5 md:h-6 relative z-20 bg-hazard-stripes shadow-[0_-4px_10px_rgba(0,0,0,0.2)]"></div>

      {/* Styles */}
      <style>{`
        .marquee-track {
          animation: marqueeScroll 30s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .bg-hazard-stripes {
          background-image: repeating-linear-gradient(
            -45deg,
            #FFB703,
            #FFB703 20px,
            #111 20px,
            #111 40px
          );
          background-size: 56.57px 56.57px;
          animation: stripe-marquee 2s linear infinite;
        }
        
        @keyframes stripe-marquee {
          0% { background-position: 0 0; }
          100% { background-position: 56.57px 0; }
        }
      `}</style>

    </section>
  )
}

export default Service4