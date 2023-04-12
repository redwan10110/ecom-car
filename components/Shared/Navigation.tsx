import Image from "next/image";
import logo from "../../public/images/logo/Logo_TidyTrunk.png";
import megaMenuImg from "../../public/images/mega-menu/megamenu.webp";

import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsCardOpen, setIsSettingsCardOpen] = useState(false);

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // console.log(isSearchOpen);

  return (
    <>
      <header id="sticky-header" className="is-sticky">
        <div className="px-4 md:px-10 2xl:px-24 py-6 lg:py-0 bg-dark">
          <div className="flex items-center lg:relative">
            <div className="w-6/12 lg:w-2/12">
              {/* Logo */}
              <div className="logo">
                <Link href="/#">
                  <Image
                    src={logo}
                    alt="logo"
                    priority={true}
                    width="125"
                    height="45"
                  />
                </Link>
              </div>
            </div>
            {/* Menu */}
            <div className="hidden lg:flex flex-1 xl:relative">
              <nav className="main-menu">
                <ul className="flex flex-wrap">
                  <li className="main-menu__item relative group">
                    <Link
                      className="block py-10 xl:pr-6 md:pr-5 capitalize font-normal text-md text-white hover:text-[#435c7f] transition-all nav-item"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="main-menu__item group">
                    <Link
                      className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-white hover:text-[#435c7f] transition-all nav-item"
                      href="/shop"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="main-menu__item relative group">
                    <Link
                      className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-white hover:text-[#435c7f] transition-all nav-item"
                      href="#"
                    >
                      pages
                    </Link>
                    <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                          href="/about-us"
                        >
                          About Page
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                          href="/cart"
                        >
                          Cart Page
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                          href="/checkout"
                        >
                          Checkout Page
                        </Link>
                      </li>
                      
                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                          href="/login"
                        >
                          Login
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                          href="/register"
                        >
                          Register
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          className="text-dark font-normal text-base capitalize transition-all hover:text-orange"
                          href="dashboard/"
                        >
                          Account Page
                        </Link>
                      </li>
                      
                    </ul>
                  </li>
                  
                </ul>
              </nav>
            </div>

            <div className="w-6/12 lg:w-3/12">
              <ul className="flex items-center justify-end">
                <li className="ml-6 hidden lg:block">
                  <button
                    className="search-toggle text-right text-white text-md hover:text-[#435c7f] transition-all"
                    aria-label="icon-settings"
                    onClick={openSearch}
                  >
                    <i className="icon-magnifier"></i>
                  </button>
                </li>
                <li className="ml-6" onClick={openCart}>
                  <Link
                    href="#offcanvas-cart"
                    className="text-white text-md hover:text-[#435c7f] transition-all relative offcanvas-toggle"
                  >
                    <span className="w-5 h-5 bg-dark text-white text-sm rounded-full font-normal flex flex-wrap items-center justify-center absolute -top-3 left-2 leading-none">
                      4
                    </span>
                    <i className="icon-bag"></i>
                    <span className="text-base leading-none text-white ml-2">
                      $245
                    </span>
                  </Link>
                </li>
                <li id="toggle-menu" className="ml-6 hidden lg:block relative">
                  <button
                    className="text-white text-md hover:text-[#435c7f] transition-all toggle-menu"
                    aria-label="icon-settings"
                  >
                    <i className="icon-settings"></i>
                  </button>
                  <div
                    id="settings-card"
                    className="bg-white absolute right-0 px-8 py-5 shadow w-80 opacity-0 invisible transition-all duration-300 ease-in-out z-20"
                  >
                    <h4 className="text-md text-dark font-normal capitalize tracking-wide pb-5 border-b border-solid border-gray-600 mb-5">
                      Currency
                    </h4>
                    <ul>
                      <li className="my-4">
                        <Link
                          href="#"
                          className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                        >
                          USD - US Dollar
                        </Link>
                      </li>
                      <li className="my-4">
                        <Link
                          href="#"
                          className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                        >
                          EUR - Euro
                        </Link>
                      </li>
                      <li className="my-4">
                        <Link
                          href="#"
                          className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                        >
                          GBP - British Pound
                        </Link>
                      </li>
                    </ul>
                    <h4 className="text-md text-dark font-normal capitalize tracking-wide pb-5 border-b border-solid border-gray-600 mb-5">
                      Account
                    </h4>
                    <ul>
                      <li className="my-4">
                        <Link
                          href="login-register.html"
                          className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                        >
                          Login
                        </Link>
                      </li>
                      <li className="mt-4">
                        <Link
                          href="account.html"
                          className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                        >
                          Create Account
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="ml-6 lg:hidden">
                  <Link
                    href="#offcanvas-mobile-menu"
                    className="offcanvas-toggle text-primary text-md hover:text-orange transition-all"
                    onClick={openMobileMenu}
                  >
                    <i className="icon-menu"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Search Toggle */}
      <div
        className="search-form fixed top-0 left-0 w-full bg-black opacity-95 min-h-screen items-center justify-center py-8 px-10 transform  transition-transform translate-x-full ease-in-out duration-500 hidden lg:flex z-50"
        style={{
          transform: isSearchOpen ? "translatex(0px)" : "translatex(100%)",
        }}
      >
        <button
          className="search-close absolute left-1/2 text-white text-xl top-12 translate-y-1/2"
          aria-label="close icon"
          onClick={closeSearch}
        >
          <span className="icon-close"></span>
        </button>
        <form className="relative xl:w-1/3 lg:w-1/2">
          <input
            className="text-md font-normal border-b border-solid border-gray-600 bg-transparent h-14 w-full focus:outline-none pr-14 text-white"
            type="search"
            name="search"
            placeholder="Search our store"
          />
          <button
            className="absolute right-0 top-3 text-white text-md font-normal"
            type="submit"
            aria-label="submit button"
          >
            <i className="icon-magnifier"></i>
          </button>
        </form>
      </div>
      {/* <!-- offcanvas-overlay start --> */}
      <div
        className={`offcanvas-overlay ${isCartOpen ||isMobileMenuOpen ? "block" : "hidden"} fixed inset-0 bg-black opacity-50 z-50`}
        onClick={() => {
          closeCart();
          closeMobileMenu();
        }}
      ></div>
      {/* <!-- offcanvas-overlay end --> */}
      {/* <!-- offcanvas-mobile-menu start --> */}
      <div
        id="offcanvas-mobile-menu"
        className={`offcanvas left-auto right-0  transform translate-x-translate-x-full-120 fixed font-normal text-sm top-0 z-50 h-screen w-72 sm:w-80 lg:w-96 transition-all ease-in-out duration-300 bg-white ${
          isMobileMenuOpen ? "offcanvas-open" : ""
        } `}
      >
        <div className="px-8 py-12 h-5/6 overflow-y-auto">
          {/* <!-- search form start --> */}

          <form
            className="pb-10 mb-10 border-b border-solid border-gray-600"
            action="#"
            method="get"
          >
            <div className="relative">
              <input
                className="w-full h-12 text-sm py-4 pl-4 pr-16 bg-gray-light text-dark placeholder-current focus:outline-none"
                type="search"
                name="search"
                placeholder="Search our store"
              />
              <button
                className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-600"
                type="submit"
                aria-label="button"
              >
                <i className="icon-magnifier"></i>
              </button>
            </div>
          </form>

          {/* <!-- search form end --> */}

          {/* <!-- close button start --> */}
          <button
            className="offcanvas-close bg-dark group transition-all hover:text-orange text-white w-10 h-10 flex items-center justify-center absolute -left-10 top-0"
            aria-label="offcanvas"
            onClick={closeMobileMenu}
          >
            <i className="icon-close transition-all transform group-hover:rotate-90"></i>
          </button>
          {/* <!-- close button end --> */}

          {/* <!-- offcanvas-menu start --> */}

          <nav className="offcanvas-menu pb-10 mb-10 border-b border-solid border-gray-600">
            <ul>
              <li className="relative block">
                <Link
                  href="/home"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Home
                </Link>
              </li>
              <li className="relative block">
                <Link
                  href="#"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Shop
                </Link>
              </li>
              <li className="relative block">
                <Link
                  href="/about-us"
                  className="relative block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  about Us
                </Link>
              </li>
              
            </ul>
          </nav>
          {/* <!-- offcanvas-menu end --> */}

          <nav>
            <ul id="settings-menu">
              <li className="block mb-3">
                <Link
                  className="flex flex-wrap justify-between mb-3 text-base text-dark hover:text-orange"
                  href="/#"
                >
                  Currency <i className="icon-arrow-down"></i>
                </Link>
                <ul className="sub-category hidden py-5 px-6 shadow">
                  <li className="my-2 block">
                    <Link
                      className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                      href="#"
                    >
                      EUR €
                    </Link>
                  </li>
                  <li className="my-2 block">
                    <Link
                      className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                      href="#"
                    >
                      USD $
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="block mb-3">
                <Link
                  className="flex flex-wrap justify-between mb-3 text-base text-dark hover:text-orange"
                  href="/#"
                >
                  Account <i className="icon-arrow-down"></i>
                </Link>
                <ul className="sub-category hidden py-5 px-6 shadow">
                  <li className="my-2 block">
                    <Link
                      className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                      href="#"
                    >
                      English
                    </Link>
                  </li>
                  <li className="my-2 block">
                    <Link
                      className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                      href="#"
                    >
                      Français
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <!-- offcanvas-mobile-menu end --> */}
      {/* cart start */}
      <div
        id="offcanvas-cart"
        className={`offcanvas left-auto right-0  transform translate-x-translate-x-full-120 fixed font-normal text-sm top-0 z-50 h-screen w-80 lg:w-96 transition-all ease-in-out duration-300 bg-white overflow-y-auto ${
          isCartOpen ? "offcanvas-open" : ""
        }`}
      >
        <div className="p-8">
          <div className="flex flex-wrap justify-between items-center pb-6 mb-6 border-b border-solid border-gray-600">
            <h4 className="font-normal text-md text-dark capitalize">
              Shoping Cart
            </h4>
            <button
              className="offcanvas-close hover:text-orange"
              aria-label="close icon"
              onClick={closeCart}
            >
              <i className="icon-close"></i>
            </button>
          </div>
          <ul className="h-96 overflow-y-auto">
            <li className="flex flex-wrap group mb-8">
              <div className="mr-5 relative">
                <Link href="#">
                  <Image
                    src="/images/cart/product1.webp"
                    alt="product image"
                    loading="lazy"
                    width="90"
                    height="100"
                  />
                </Link>
                <button className="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange">
                  <i className="icon-close"></i>
                </button>
              </div>
              <div className="flex-1">
                <h4>
                  <Link
                    className="font-light text-sm md:text-base text-dark hover:text-orange transition-all tracking-wide"
                    href="#"
                  >
                    Birpod product unsde - m / gold
                  </Link>
                </h4>
                <span className="font-light text-sm text-dark transition-all tracking-wide">
                  1 x <span>$80.00</span>
                </span>
              </div>
            </li>
            <li className="flex flex-wrap group mb-8">
              <div className="mr-5 relative">
                <Link href="/#">
                  <Image
                    src="/images/cart/product2.webp"
                    alt="product image"
                    loading="lazy"
                    width="90"
                    height="100"
                  />
                </Link>
                <button className="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange">
                  <i className="icon-close"></i>
                </button>
              </div>
              <div className="flex-1">
                <h4>
                  <Link
                    className="font-light text-sm md:text-base text-dark hover:text-orange transition-all tracking-wide"
                    href="/#"
                  >
                    Airpod product kiebd - red
                  </Link>
                </h4>
                <span className="font-light text-sm text-dark transition-all tracking-wide">
                  1 x <span>$99.00</span>
                </span>
              </div>
            </li>
            <li className="flex flex-wrap group mb-8">
              <div className="mr-5 relative">
                <Link href="#">
                  <Image
                    src="/images/cart/product3.webp"
                    alt="product image"
                    loading="lazy"
                    width="90"
                    height="100"
                  />
                </Link>
                <button className="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange">
                  <i className="icon-close"></i>
                </button>
              </div>
              <div className="flex-1">
                <h4>
                  <Link
                    className="font-light text-sm md:text-base text-dark hover:text-orange transition-all tracking-wide"
                    href="#"
                  >
                    Airpod product ides - navy
                  </Link>
                </h4>
                <span className="font-light text-sm text-dark transition-all tracking-wide">
                  1 x <span>$39.00</span>
                </span>
              </div>
            </li>
          </ul>
          <div>
            <div className="flex flex-wrap justify-between items-center py-4 my-6 border-t border-b border-solid border-gray-600 font-normal text-base text-dark capitalize">
              Total:<span>$218.00</span>
            </div>
            <div className="text-center">
              <Link
                className="py-5 px-10 block bg-white border border-solid border-gray-600 uppercase font-semibold text-base hover:bg-orange hover:border-orange hover:text-white transition-all leading-none"
                href="/checkout"
              >
                Checkout
              </Link>
              <Link
                className="py-5 px-10 block bg-white border border-solid border-gray-600 uppercase font-semibold text-base hover:bg-orange hover:border-orange hover:text-white transition-all leading-none mt-3"
                href="/cart"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* cart end */}
    </>
  );
};

export default Navigation;
