import Logo from "../Logo/Logo";
import styles from './TopNav.module.scss';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames';


const TopNav = () => {
  return (
    <Disclosure as="nav" className="bg-white text-gray-800 top-0 z-10" style={{
      position: 'sticky',
    }}>
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto py-3 px-2 sm:px-4 lg:px-8">
            <div className="relative flex justify-between h-16 py-3">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <Logo
                    full={false}
                    className="block lg:hidden h-9 w-auto"
                  />
                  <Logo
                    full={true}
                    className="hidden lg:block h-9 w-auto"
                  />
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
                  <a href="#" className="text-lg font-semibold mr-8 px-5">About</a>
                  <button
                    onClick={() => {
                      document.getElementById('workwithus')?.scrollIntoView({
                        behavior: 'smooth'
                      })
                    }}
                    type="button"
                    className="text-base font-semibold relative inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-full text-white bg-gray-800 shadow-sm hover:bg-gray-700"
                  >
                    Work with Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Expanded Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Work with Us
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


// (
//   <nav>
//     <Logo className={styles.logo} />
//   </nav>
// );

export default TopNav;
