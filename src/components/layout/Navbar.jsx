import { useState, useEffect } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, ArrowUpRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/service' },
  { name: 'PROJECTS', href: '/project' },
  // { name: 'OUR BLOGS', href: '/blog' },
  { name: 'CONTACT US', href: '/contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (href, currentPath) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <Disclosure as="nav" className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-lg border-b border-surface-light' : 'bg-transparent'}`}>
      {({ open }) => (
        <>
          <div className="mx-auto flex h-20 items-stretch justify-between w-full">

            {/* LEFT: Logo Box */}
            <div className="flex bg-white pr-8 lg:pr-10 items-center" style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)' }}>
              <Link to="/" className="flex items-center pl-4 lg:pl-8 pr-2 lg:pr-4 group" aria-label="Hope Construction Home">
                {/* Custom Logo Icon */}
                <img src="/logo.png" alt="Hope Construction Logo" className="h-20 md:h-24 w-auto mr-3 object-contain" />
                <span className="text-xl lg:text-xl font-black tracking-tighter text-dark font-heading uppercase group-hover:text-primary transition-colors">
                  Hope Construction
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden flex-1 justify-end items-center pr-4">
              <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md bg-dark text-white hover:bg-primary hover:text-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors" aria-label="Open main menu">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6 stroke-2" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6 stroke-2" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>

            {/* CENTER: Navigation Links (Hidden on small screens) */}
            <div className="hidden lg:flex flex-1 items-center justify-center px-8">
              <div className="flex space-x-8">
                {navigation.map((item) => {
                  const isActive = isActivePath(item.href, location.pathname);
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        isActive
                          ? 'text-white border-b-2 border-primary'
                          : 'text-light hover:text-primary',
                        'flex items-center px-1 py-2 text-sm font-bold font-heading tracking-wide transition-colors duration-200'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: CTA Button (Hidden on small screens) */}
            <div className="hidden lg:flex items-stretch">
              {/* Get In Touch Button */}
              <Link to="/contact" className="flex items-center bg-dark px-8 py-4 text-white transition-colors duration-300 hover:bg-primary hover:text-dark group font-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" aria-label="Get in touch with Hope Construction">
                <ArrowUpRightIcon className="mr-2 h-4 w-4 stroke-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                <span className="text-sm font-bold uppercase tracking-wide">Get in touch</span>
              </Link>
            </div>

          </div>

          {/* MOBILE MENU PANEL */}
          <DisclosurePanel className="lg:hidden bg-surface text-white shadow-xl absolute w-full left-0 top-20 border-t border-surface-light">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = isActivePath(item.href, location.pathname);
                return (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      isActive ? 'bg-surface-light text-primary' : 'text-light hover:bg-surface-light hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-bold font-heading transition-colors'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <div className="flex justify-between items-center">
                      {item.name}
                    </div>
                  </DisclosureButton>
                );
              })}
              <div className="mt-4 border-t border-surface-light pt-4 pb-2 px-3">
                <Link to="/contact" className="w-full flex items-center justify-center bg-primary text-dark px-4 py-3 rounded-md font-bold uppercase text-sm font-heading hover:bg-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary" aria-label="Get in touch with Hope Construction">
                  Get in touch
                </Link>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}