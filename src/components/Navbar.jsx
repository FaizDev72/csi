import { Disclosure} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "#", current: false },
  { name: "Bootcamp", href: "/bootcamp", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="bg-secondary rounded-full mx-24 mt-12 absolute top-0 left-0 right-0 shadow z-50"
      style={{ height: "92px" }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="relative flex h-full items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-14 w-14" src="/csilogo.png" alt="CSI-ACE" />
                  <span className="ml-3 text-lg font-sans font-bold text-[#193484]">
                    CSI-ACE
                  </span>
                </div>
                <div className="hidden sm:block">
                  <div className="flex space-x-6 ml-auto">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black-300 hover:bg-gray-700 hover:text-white",
                          "rounded-full px-4 py-3 text-xl font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.current ? (
                          <span className="shine-text">{item.name}</span>
                        ) : (
                          item.name
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-xl font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.current ? (
                    <span className="shine-text">{item.name}</span>
                  ) : (
                    item.name
                  )}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}