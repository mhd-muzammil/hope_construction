import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, ArrowUpRightIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'HOME', href: '/', current: true },
  { name: 'ABOUT', href: '/about', current: false },
  { name: 'SERVICES', href: '/service', current: false },
  { name: 'PROJECTS', href: '/project', current: false },
  { name: 'OUR BLOGS', href: '/blog', current: false },
  { name: 'CONTACT US', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="absolute top-0 w-full z-50 bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto flex h-20 items-stretch justify-between w-full">

            {/* LEFT: Logo & Menu Box */}
            <div className="flex bg-white pr-6 items-center" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}>
              <div className="flex items-center pl-8 pr-4">
                {/* Custom Logo Icon */}
                <div className="grid grid-cols-2 gap-0.5 mr-2">
                  <div className="w-2 h-2 bg-primary"></div>
                  <div className="w-2 h-2 bg-primary"></div>
                  <div className="w-2 h-2 bg-primary"></div>
                  <div className="w-2 h-2 bg-primary"></div>
                </div>
                <span className="text-xl font-black tracking-tighter text-dark font-heading uppercase">
                  Hope Constructor
                </span>
              </div>

              {/* Mobile menu button */}
              <DisclosureButton className="lg:hidden inline-flex items-center justify-center p-2 text-muted hover:text-dark focus:outline-none ml-4">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-8 w-8 stroke-1" aria-hidden="true" />
              </DisclosureButton>
            </div>

            {/* CENTER: Navigation Links (Hidden on small screens) */}
            <div className="hidden lg:flex flex-1 items-center justify-center px-8">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'text-white border-b-2 border-primary'
                        : 'text-light hover:text-primary',
                      'flex items-center px-1 py-2 text-sm font-bold font-heading tracking-wide transition-colors duration-200'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: CTA Button (Hidden on small screens) */}
            <div className="hidden lg:flex items-stretch">
              {/* Get In Touch Button */}
              <a href="#" className="flex items-center bg-dark px-8 py-4 text-white transition-colors duration-300 hover:bg-primary hover:text-dark group font-heading">
                <ArrowUpRightIcon className="mr-2 h-4 w-4 stroke-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span className="text-sm font-bold uppercase tracking-wide">Get in touch</span>
              </a>
            </div>

          </div>

          {/* MOBILE MENU PANEL */}
          <DisclosurePanel className="lg:hidden bg-surface text-white shadow-xl absolute w-full left-0 top-20 border-t border-surface-light">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-surface-light text-primary' : 'text-light hover:bg-surface-light hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-bold font-heading transition-colors'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                  </div>
                </DisclosureButton>
              ))}
              <div className="mt-4 border-t border-surface-light pt-4 pb-2">
                <button className="w-full flex items-center justify-center bg-primary text-dark px-4 py-3 font-bold uppercase text-sm font-heading hover:bg-primary-dark transition-colors">
                  Get in touch
                </button>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}