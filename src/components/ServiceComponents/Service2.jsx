import React from 'react'

const serviceData = [
  {
    title: (
      <>
        RESIDENTIAL <br />
        CONSTRUCTION
      </>
    ),
    description: "Building strong, safe, and comfortable homes tailored to client needs and modern living standards.",
    items: [
      "Individual House Construction",
      "1BHK / 2BHK / Duplex Houses",
      "Villa Construction",
      "Independent House Projects"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2.5" className="w-7 h-7">
        <path d="M8 28l24-20 24 20" strokeLinejoin="round" />
        <path d="M16 22v30h32V22" strokeLinejoin="round" />
        <path d="M28 52V36h8v16" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: (
      <>
        PLANNING & <br />
        DESIGN
      </>
    ),
    description: "Professional architectural planning and visualization services for efficient and approved building layouts.",
    items: [
      "2D Floor Plan Design",
      "3D Elevation Design",
      "Building Plan Approval Drawings"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2.5" className="w-7 h-7">
        <rect x="12" y="10" width="40" height="48" rx="2" />
        <path d="M22 22h16M22 32h20M22 42h12" />
        <circle cx="42" cy="22" r="2" fill="#111" />
      </svg>
    ),
  },
  {
    title: (
      <>
        TURNKEY <br />
        CONSTRUCTION
      </>
    ),
    description: "Complete construction solutions from foundation to final key handover ensuring quality and timely delivery.",
    items: [
      "Civil Work",
      "Electrical Work",
      "Plumbing Work",
      "Flooring",
      "Painting"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2.5" className="w-7 h-7">
        <circle cx="22" cy="22" r="6" />
        <path d="M26 26l24 24M42 50l6-6M48 44l6-6" />
      </svg>
    ),
  },
  {
    title: (
      <>
        STRUCTURAL <br />
        CONSTRUCTION
      </>
    ),
    description: "Strong and reliable structural work using modern construction techniques and quality materials.",
    items: [
      "RCC Frame Structure",
      "Foundation Work",
      "Roof Slab Construction",
      "Compound Wall Construction"
    ],
    image: "https://images.unsplash.com/photo-1541888081-0113c4a22ad2?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2.5" className="w-7 h-7">
        <path d="M10 54h44" />
        <path d="M20 54V20L44 10v44" />
        <path d="M20 30h24M20 42h24M32 15v39" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: (
      <>
        RENOVATION & <br />
        REMODELING
      </>
    ),
    description: "Upgrade and transform existing spaces with modern renovation and remodeling solutions.",
    items: [
      "House Renovation",
      "Bathroom Renovation",
      "Kitchen Remodeling",
      "Structural Modification"
    ],
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2.5" className="w-7 h-7">
        <path d="M22 42l16-16 10 10-16 16z" />
        <path d="M12 52l10-10M48 16l4 4" />
        <circle cx="48" cy="16" r="3" fill="#111" />
      </svg>
    ),
  },
  {
    title: (
      <>
        REAL ESTATE <br />
        SERVICES
      </>
    ),
    description: "Property consultation and sales support helping clients find the right investment and residential options.",
    items: [
      "Independent House Sale",
      "Residential Plot Sale",
      "Investment Property Consultation",
      "Site Visit Arrangement"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2.5" className="w-7 h-7">
        <path d="M14 26L48 12 52 22 18 36z" />
        <path d="M14 26l-6 14 34-14M18 36v16h16V28" />
        <circle cx="46" cy="16.5" r="2" fill="#111" />
      </svg>
    ),
  },
  {
    title: (
      <>
        INTERIOR & <br />
        FINISHING WORKS
      </>
    ),
    description: "Premium interior finishing and modern design solutions for beautiful and functional living spaces.",
    items: [
      "Tiles & Flooring",
      "Painting",
      "False Ceiling",
      "Modular Kitchen Installation"
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="2.5" className="w-7 h-7">
        <path d="M14 14h36v36H14z" />
        <path d="M14 50l36-36M32 14v36M14 32h36" />
      </svg>
    ),
  }
];

const Service2 = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Title Section */}
        <div className="mb-14">
          <div className="inline-block bg-[#F5B400] px-4 py-[6px] mb-6">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#111]">
              // EXPLORE OUR SERVICES
            </span>
          </div>
          <h2 className="font-heading font-black text-[#111] text-[2.2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.2rem] leading-[1.05] tracking-tight uppercase max-w-4xl">
            BUILDING DREAMS WITH<br className="hidden md:block" />
            QUALITY AND TRUST
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((item, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col bg-white border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] ease-out duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-2 h-full"
            >
              
              {/* Card Content Top half */}
              <div className="p-8 md:p-10 pb-8 flex-grow flex flex-col items-start h-full">
                <h3 className="text-[1.3rem] md:text-[1.35rem] font-black text-[#111] font-heading uppercase leading-[1.15] mb-5 tracking-tight group-hover:text-[#F5B400] transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Underline separator */}
                <div className="w-full h-px bg-gray-200 mb-6"></div>
                
                <p className="text-gray-500 text-[13.5px] leading-[1.7] font-medium mb-6">
                  {item.description}
                </p>

                {/* Items Included */}
                <ul className="space-y-2 mb-8 flex-grow w-full">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 font-medium text-[13.5px] leading-[1.6]">
                      <span className="text-[#F5B400] mr-2 text-lg leading-[1.1]">•</span>
                      {listItem}
                    </li>
                  ))}
                </ul>

                <a href="#" className="inline-flex items-center text-[#111] font-bold text-[10px] md:text-[11px] tracking-[0.15em] uppercase group-hover:text-[#F5B400] transition-colors mt-auto">
                  <svg className="w-[11px] h-[11px] mr-[10px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                  LEARN MORE
                </a>
              </div>

              {/* Bottom Area (Image + Badge) */}
              <div className="relative mt-auto">
                {/* Yellow Badge */}
                <div className="absolute -top-7 right-8 w-14 h-14 bg-[#F5B400] flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-500 z-10">
                  {item.icon}
                </div>

                {/* Card Image Area Bottom Half */}
                <div className="h-[240px] w-full shrink-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt="Service" 
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Service2
