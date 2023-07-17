import { useEffect, useRef, useState } from 'react';
import { RouteType, routes } from '../Routes/Routes';
import Link from '../Link/Link';
import Panel from '../Panel/Panel';
const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  const navRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handdleCloseNav = (event: Event) => {
      if (navRef && !navRef.current!.contains(event.target as Node)) {
        setToggle(false);
      }
    };
    document.addEventListener('click', handdleCloseNav);
    return () => document.removeEventListener('click', handdleCloseNav);
  }, [navRef, toggle]);
  const renderRoutes = routes.map((route: RouteType) => (
    <Link
      closeMenu={(closeBtn) => setToggle(closeBtn)}
      key={route.pathname}
      activeClass="bg-[#79272F] text-white block rounded-md px-3 py-2 text-base
          font-medium"
      to={route.pathname}
    >
      {route.label}
    </Link>
  ));
  return (
    <nav ref={navRef} className="bg-gray-800 ">
      <Panel>
        <div className="relative flex h-20 items-center justify-between fixed">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${toggle ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${toggle ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-10 w-auto lg:hidden"
                src="./img/logo.png"
                alt="Alireza Mak"
              />
              <img
                className="hidden h-10 w-auto lg:block"
                src="./img/logo.png"
                alt="Alireza Mak"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">{renderRoutes}</div>
            </div>
          </div>
          <div className="text-white font-bold text-xl">
            Alireza Mak
          </div>
        </div>
      </Panel>
      {/* SMALL SCREEN */}
      <div className={`sm:hidden ${toggle ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pb-3 pt-2">{renderRoutes}</div>
      </div>
    </nav>
  );
};

export default Header;
