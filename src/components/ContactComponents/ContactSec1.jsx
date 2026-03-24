import React from 'react';
import { Link } from 'react-router-dom';

const ContactSec1 = () => {
    return (
        <section
            className="relative flex items-center justify-center bg-cover bg-center h-[500px] md:h-[600px] bg-[url('/about.png')]"
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                    CONTACT US
                </h1>

                <div className="flex items-center gap-0 text-sm font-semibold tracking-wider">
                    <Link
                        to="/"
                        className="px-8 py-3 border border-gray-400 hover:bg-white/10 transition-colors duration-300"
                    >
                        HOME
                    </Link>
                    <div
                        className="px-8 py-3 bg-[#ffb800] text-black border border-[#ffb800]"
                    >
                        CONTACT US
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSec1;