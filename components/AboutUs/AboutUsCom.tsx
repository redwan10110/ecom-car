import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const AboutUsCom = () => {
  return (
    <>
      {/* Hero section start */}
      <div className="py-9 bg-gray-light">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12">
              <nav>
                <ul className="flex flex-wrap items-center justify-center">
                  <li className="mr-5">
                    <Link
                      href="index.html"
                      className="text-dark font-medium text-base uppercase transition-all hover:text-orange relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-dark font-medium text-base uppercase mr-5">
                    about us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero section end */}

      {/* about us section start */}
      <div className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
            <div className="flex flex-wrap items-center mb-10 lg:mb-0">
              <Image
                width={559}
                height={315}
                src="/images/drone/drone4.webp"
                alt="images"
              />
            </div>
            <div>
              <div className="mb-10">
                <h3 className="font-bold uppercase text-3xl md:text-4xl mb-5 text-dark">
                  WELCOME TO <span className="text-orange">Sinp</span>
                </h3>
                <p>
                  Parlo provide how all this mistaken idea of denouncing
                  pleasure and sing pain was born an will give you a complete.
                </p>
              </div>
              <div className="mb-10">
                <h4 className="font-semibold uppercase text-md mb-4 text-dark">
                  WE START AT 2022
                </h4>
                <p>
                  Parlo provide how all this mistaken idea of denouncing
                  pleasure and sing pain was born nsidae.
                </p>
              </div>
              <div>
                <h4 className="font-semibold uppercase text-md mb-4 text-dark">
                  WIN BEST ONLINE SHOP AT 2022
                </h4>
                <p>
                  Parlo provide how all this mistaken idea of denouncing
                  pleasure and sing pain was born an will give you a solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about us section end */}

      {/* testimonial section start */}
      <div
        className="testimonial-area bg-gray-light py-24 bg-no-repeat bg-cover bg-center group"
        style={{
          backgroundImage: "url('/images/hero/slide5.webp')",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12">
              <div className="text-center pb-14">
                <h2 className="font-playfair font-bold text-orange text-3xl sm:text-4xl xl:text-5xl mb-5">
                  What Client Says
                </h2>
                <p className="font-playfair font-medium text-md mb-3">
                  Contrary to popular belief, Lorem Ipsum is not.
                </p>
              </div>
            </div>
            <div className="lg:col-start-3 col-span-12 lg:col-span-8 text-center">
              <div className="testimonial overflow-hidden relative">
                
                  <Swiper>
                    <SwiperSlide>
                      <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                        <Image
                          width={96}
                          height={117}
                          src="/images/testimonial/testimonial1.webp"
                          alt="image"
                        />
                      </div>
                      <p className="my-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat Duis aute irure dolor in
                        reprehenderit.
                      </p>
                      <h5 className="font-semibold text-sm text-dark uppercase">
                        Hester Perkins
                      </h5>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                        <Image
                          width={96}
                          height={117}
                          src="/images/testimonial/testimonial1.webp"
                          alt="image"
                        />
                      </div>
                      <p className="my-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat Duis aute irure dolor in
                        reprehenderit.
                      </p>
                      <h5 className="font-semibold text-sm text-dark uppercase">
                        Hester Perkins
                      </h5>
                    </SwiperSlide>
                  </Swiper>
                
                {/* <!-- Add Pagination --> */}

                {/* <!-- swiper navigation --> */}
                {/* <div className="swiper-buttons">
                  <div className="swiper-button-prev right-auto left-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark group-hover:opacity-100 transition-all hover:text-orange hover:border-orange opacity-0 invisible group-hover:visible"></div>
                  <div className="swiper-button-next left-auto right-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark group-hover:opacity-100 transition-all hover:text-orange hover:border-orange opacity-0 invisible group-hover:visible"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial section end */}

      {/* team carousel start */}
      <div className="py-20">
        <div className="container">
          <div className="grid gap-x-4 grid-cols-12">
            <div className="col-span-12">
              <div className="text-center pb-14">
                <h2 className="font-playfair font-bold text-orange text-3xl sm:text-4xl xl:text-5xl mb-5">
                  Team Members
                </h2>
                <p className="font-playfair font-medium text-md mb-3">
                  Contrary to popular belief, Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="col-span-12">
              <div className="relative -m-4">
                <div className="team-carousel overflow-hidden p-4">
                  <Swiper
                   slidesPerView={4}
                   spaceBetween={30}
                   pagination={{
                     clickable: true,
                   }}
                   modules={[Pagination]}
                   className="mySwiper">
                      {/* <!-- swiper-slide start --> */}
                      <SwiperSlide >
                        <div className="bg-gray-light group">
                          <div className="relative">
                            <Link href="#" className="block">
                              <Image
                                className=""
                                src="/images/team/team1.webp"
                                alt="team image"
                                loading="lazy"
                                width={262}
                                height={320}
                              />
                            </Link>
                            <div className="absolute w-full top-1/2 left-0 transform translate-y-1/2 bg-white flex flex-wrap items-center justify-center p-3 transition-all group-hover:-translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500">
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-facebook bg-facebook hover:text-facebook"
                              >
                                <i className="icon-social-facebook"></i>
                              </Link>
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-twitter bg-twitter hover:text-twitter"
                              >
                                <i className="icon-social-twitter"></i>
                              </Link>
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-instagram bg-instagram hover:text-instagram"
                              >
                                <i className="icon-social-instagram"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="py-5 px-3 text-center">
                            <h4 className="font-medium text-dark text-md capitalize mb-1">
                              Ms. Sophia
                            </h4>
                            <span className="italic">Designer</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      {/* <!-- swiper-slide end--> */}

                      {/* <!-- swiper-slide start --> */}
                      <SwiperSlide>
                        <div className="bg-gray-light group">
                          <div className="relative">
                            <Link href="#" className="block">
                              <Image
                                className=""
                                src="/images/team/team2.webp"
                                alt="team image"
                                loading="lazy"
                                width={262}
                                height={320}
                              />
                            </Link>
                            <div className="absolute w-full top-1/2 left-0 transform translate-y-1/2 bg-white flex flex-wrap items-center justify-center p-3 transition-all group-hover:-translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500">
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-facebook bg-facebook hover:text-facebook"
                              >
                                <i className="icon-social-facebook"></i>
                              </Link>
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-twitter bg-twitter hover:text-twitter"
                              >
                                <i className="icon-social-twitter"></i>
                              </Link>
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-instagram bg-instagram hover:text-instagram"
                              >
                                <i className="icon-social-instagram"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="py-5 px-3 text-center">
                            <h4 className="font-medium text-dark text-md capitalize mb-1">
                              Mr. Peter Pan
                            </h4>
                            <span className="italic">Developer</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      {/* <!-- swiper-slide end--> */}

                      {/* <!-- swiper-slide start --> */}
                      <SwiperSlide>
                        <div className="bg-gray-light group">
                          <div className="relative">
                            <Link href="#" className="block">
                              <Image
                                className=""
                                src="/images/team/team3.webp"
                                alt="team image"
                                loading="lazy"
                                width={262}
                                height={320}
                              />
                            </Link>
                            <div className="absolute w-full top-1/2 left-0 transform translate-y-1/2 bg-white flex flex-wrap items-center justify-center p-3 transition-all group-hover:-translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500">
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-facebook bg-facebook hover:text-facebook"
                              >
                                <i className="icon-social-facebook"></i>
                              </Link>
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-twitter bg-twitter hover:text-twitter"
                              >
                                <i className="icon-social-twitter"></i>
                              </Link>
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-instagram bg-instagram hover:text-instagram"
                              >
                                <i className="icon-social-instagram"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="py-5 px-3 text-center">
                            <h4 className="font-medium text-dark text-md capitalize mb-1">
                              Mr. John Lee
                            </h4>
                            <span className="italic">Chairmen</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      {/* <!-- swiper-slide end--> */}

                      {/* <!-- swiper-slide start --> */}
                      <SwiperSlide>
                        <div className="bg-gray-light group">
                          <div className="relative">
                            <Link href="#" className="block">
                              <Image
                                className=""
                                src="/images/team/team4.webp"
                                alt="team image"
                                loading="lazy"
                                width={262}
                                height={320}
                              />
                            </Link>
                            <div className="absolute w-full top-1/2 left-0 transform translate-y-1/2 bg-white flex flex-wrap items-center justify-center p-3 transition-all group-hover:-translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500">
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-facebook bg-facebook hover:text-facebook"
                              >
                                <i className="icon-social-facebook"></i>
                              </Link>
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-twitter bg-twitter hover:text-twitter"
                              >
                                <i className="icon-social-twitter"></i>
                              </Link>
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-instagram bg-instagram hover:text-instagram"
                              >
                                <i className="icon-social-instagram"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="py-5 px-3 text-center">
                            <h4 className="font-medium text-dark text-md capitalize mb-1">
                              Mr. John Doh
                            </h4>
                            <span className="italic">SEO Expert</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      {/* <!-- swiper-slide end--> */}

                      {/* <!-- swiper-slide start --> */}
                      <SwiperSlide>
                        <div className="bg-gray-light group">
                          <div className="relative">
                            <Link href="#" className="block">
                              <Image
                                className=""
                                src="/images/team/team2.webp"
                                alt="team image"
                                loading="lazy"
                                width={262}
                                height={320}
                              />
                            </Link>
                            <div className="absolute w-full top-1/2 left-0 transform translate-y-1/2 bg-white flex flex-wrap items-center justify-center p-3 transition-all group-hover:-translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500">
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-facebook bg-facebook hover:text-facebook"
                              >
                                <i className="icon-social-facebook"></i>
                              </Link>
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-twitter bg-twitter hover:text-twitter"
                              >
                                <i className="icon-social-twitter"></i>
                              </Link>
                              <Link
                                href="#"
                                className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                                     transition-all border border-solid border-transparent hover:bg-white hover:border-instagram bg-instagram hover:text-instagram"
                              >
                                <i className="icon-social-instagram"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="py-5 px-3 text-center">
                            <h4 className="font-medium text-dark text-md capitalize mb-1">
                              Mr. Peter Pan
                            </h4>
                            <span className="italic">Developer</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      {/* <!-- swiper-slide end--> */}
                  </Swiper>
                  {/* <!-- Add Pagination --> */}
                  {/* <!-- <div className="swiper-pagination"></div> --> */}
                  {/* <!-- swiper navigation --> */}
                  {/* <div className="swiper-buttons">
                    <div className="swiper-button-prev right-auto left-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange"></div>
                    <div className="swiper-button-next left-auto right-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange"></div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team carousel end */}
    </>
  );
};

export default AboutUsCom;
