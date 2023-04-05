import Image from "next/image";
import Link from "next/link";
import paymentLogo from "../../public/images/logo/payment.webp";
import logo from "../../public/images/logo/logo.webp";

const Footer = () => {
  return (
    <>
      {/* NewsLater */}
      <div className="news-letter-section bg-gray-100 pt-24 pb-24">
        <div className="container">
          <div className="max-w-[600px] mx-auto">
            <div className="text-center">
              <Link href="#" className="inline-block mb-11">
                <Image
                  src={logo}
                  alt="brand logo"
                  loading="lazy"
                  width="125"
                  height="45"
                />
              </Link>

              <p className="mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.aliqua.
                Ut enim ad minim. Lorem ipsum dolor sit amet.
              </p>

              <form
                id="mc-form"
                className="relative text-center md:max-w-xl mx-auto mb-10"
              >
                <input
                  id="mc-email"
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  className="border border-solid border-primary w-full h-14 sm:h-16 rounded-full bg-transparent placeholder-primary placeholder-opacity-50 text-sm sm:text-base focus:outline-none py-1 pl-8 pr-14 sm:pr-36"
                />
                <button
                  id="mc-submit"
                  type="submit"
                  className="bg-black transition-all hover:bg-orange hover:text-white px-10 sm:px-3 py-5 sm:py-1 rounded-l-full sm:rounded-l-none rounded-r-full text-white capitalize font-medium text-sm lg:text-md sm:absolute sm:top-0 sm:right-0 sm:h-full mt-3 sm:mt-0 leading-none w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              <Link
                href="#"
                aria-label="social links"
                className="text-lg text-dark hover:text-orange mx-3 leading-none transition"
              >
                <i className="icon-social-facebook"></i>
              </Link>
              <Link
                href="#"
                aria-label="social links"
                className="text-lg text-dark hover:text-orange mx-3 leading-none transition"
              >
                <i className="icon-social-twitter"></i>
              </Link>
              <Link
                href="#"
                aria-label="social links"
                className="text-lg text-dark hover:text-orange mx-3 leading-none transition"
              >
                <i className="icon-social-instagram"></i>
              </Link>
              <Link
                href="#"
                aria-label="social links"
                className="text-lg text-dark hover:text-orange mx-3 leading-none transition"
              >
                <i className="icon-social-youtube"></i>
              </Link>
              <Link
                href="#"
                aria-label="social links"
                className="text-lg text-dark hover:text-orange mx-3 leading-none transition"
              >
                <i className="icon-social-dribbble"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="footer-bottom-section py-8 bg-gray-500">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex order-last md:order-first flex-wrap items-center justify-center md:justify-start">
              <p className="text-white flex flex-wrap items-center text-sm lg:text-base">
                &copy; 2022 Ecom{" "}
                <i className="icon-heart mx-2 text-orange"></i> by
                <Link href="#" className="ml-1 transition hover:text-orange">
                  Developer
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end">
              <Link href="#">
                <Image
                  className="w-full h-full"
                  src={paymentLogo}
                  alt="payment logo"
                  loading="lazy"
                  width="286"
                  height="23"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
