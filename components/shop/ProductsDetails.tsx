import Image from "next/image";
import ProductCarousel from "./ProductCarousel";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const ProductsDetails = () => {
  return (
    <>
      {/* Breadcrumb section start */}
      <div
        className="py-0 "
        style={{
          backgroundImage: "url('/images/GreyBar.png')",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12">
              <nav>
              <h2 className="ml-0 lg:ml-[160px] lg:text-[30px] text-[25px] mb-[-10px]">
                  PRODUCT DETAILS
                </h2>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb section end */}

      
      <div className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <div className="relative overflow-hidden">
                <span className="font-semibold uppercase text-sm text-red-500 inline-block py-1 px-2 leading-none absolute top-3  z-10 right-3 ">
                  Sale
                </span>

                <Swiper className="mySwiper mb-[30px]">
                  <SwiperSlide>
                    <Image
                      width={559}
                      height={621}
                      src="/images/single-product/lg/product1.webp"
                      alt="product image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={559}
                      height={621}
                      src="/images/single-product/lg/product2.webp"
                      alt="product image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={559}
                      height={621}
                      src="/images/single-product/lg/product3.webp"
                      alt="product image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={559}
                      height={621}
                      src="/images/single-product/lg/product4.webp"
                      alt="product image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      width={559}
                      height={621}
                      src="/images/single-product/lg/product5.webp"
                      alt="product image"
                    />
                  </SwiperSlide>
                </Swiper>

                <div className="gallery-nav relative">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <Link href="#">
                          <Image
                            width={132}
                            height={147}
                            src="/images/single-product/sm/product1.webp"
                            alt="product image"
                          />
                        </Link>
                      </div>
                      <div className="swiper-slide">
                        <Link href="#">
                          <Image
                            width={132}
                            height={147}
                            src="/images/single-product/sm/product2.webp"
                            alt="product image"
                          />
                        </Link>
                      </div>
                      <div className="swiper-slide">
                        <Link href="#">
                          <Image
                            width={132}
                            height={147}
                            src="/images/single-product/sm/product3.webp"
                            alt="product image"
                          />
                        </Link>
                      </div>
                      <div className="swiper-slide">
                        <Link href="#">
                          <Image
                            width={132}
                            height={147}
                            src="/images/single-product/sm/product4.webp"
                            alt="product image"
                          />
                        </Link>
                      </div>
                      <div className="swiper-slide">
                        <Link href="#">
                          <Image
                            width={132}
                            height={147}
                            src="/images/single-product/sm/product5.webp"
                            alt="product image"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <!-- If we need pagination --> */}
                  {/* <!-- <div className="swiper-pagination"></div> --> */}
                  <div className="swiper-buttons">
                    <div className="swiper-button-prev right-auto left-4  w-8 h-8 rounded-full  border border-solid border-gray-500 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange">
                      <i className="ion-chevron-left"></i>
                    </div>
                    <div className="swiper-button-next left-auto right-4  w-8 h-8 rounded-full  border border-solid border-gray-500 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange">
                      <i className="ion-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg capitalize">
                Airp Variable product
              </h3>
              <h5 className="font-bold text-md leading-none text-[#435c7f] my-3">
                <del className="font-normal text-sm mr-1 inline-block">
                  $110.00
                </del>
                $130.00
              </h5>
              <div className="mb-3">
                <span>Availability:</span>{" "}
                <span className="font-semibold">9 left in stock</span>
              </div>
              <p className="mb-8">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>

              <div>
                <div className="mb-8">
                  <div className="flex flex-wrap items-center mt-8">
                    <div className="flex count border border-solid border-gray-300 p-2 h-11">
                      <button
                        className="decrement flex-auto w-5 leading-none"
                        aria-label="button"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        step="1"
                        value="1"
                        className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none"
                      />
                      <button
                        className="increment flex-auto w-5 leading-none"
                        aria-label="button"
                      >
                        +
                      </button>
                    </div>
                    <div className="ml-2 sm:ml-8">
                      <button className="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-[#435c7f]">
                        Add to Cart
                      </button>
                    </div>
                    <Link href="#" className="text-md ml-8">
                      <i className="icon-heart"></i>
                    </Link>
                    <Link href="#" className="text-md ml-8">
                      <i className="icon-refresh"></i>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-start mb-8">
                  <Link
                    href="#"
                    className="text-md text-facebook hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"
                  >
                    <i className="icon-social-facebook"></i>
                  </Link>
                  <Link
                    href="#"
                    className="text-md text-twitter hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"
                  >
                    <i className="icon-social-twitter"></i>
                  </Link>
                  <Link
                    href="#"
                    className="text-md text-dribbble hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"
                  >
                    <i className="icon-social-instagram"></i>
                  </Link>
                  <Link
                    href="#"
                    className="text-md text-pinterest hover:text-dark leading-none transition"
                  >
                    <i className="icon-social-youtube"></i>
                  </Link>
                  <div></div>
                </div>

                <div className="flex flex-wrap">
                  <Link href="#" className="mr-2">
                    <Image
                      width={38}
                      height={24}
                      src="/images/payment/amazon.svg"
                      alt="payment icon"
                    />
                  </Link>
                  <Link href="#" className="mr-2">
                    <Image
                      width={38}
                      height={24}
                      src="/images/payment/apple-pay.svg"
                      alt="payment icon"
                    />
                  </Link>
                  <Link href="#" className="mr-2">
                    <Image
                      width={38}
                      height={24}
                      src="/images/payment/bitcoin.svg"
                      alt="payment icon"
                    />
                  </Link>
                  <Link href="#" className="mr-2">
                    <Image
                      width={38}
                      height={24}
                      src="/images/payment/google-pay.svg"
                      alt="payment icon"
                    />
                  </Link>
                  <Link href="#" className="mr-2">
                    <Image
                      width={38}
                      height={24}
                      src="/images/payment/paypal.svg"
                      alt="payment icon"
                    />
                  </Link>
                  <Link href="#" className="mr-2">
                    <Image
                      width={38}
                      height={24}
                      src="/images/payment/visa.svg"
                      alt="payment icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
