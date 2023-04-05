import Link from "next/link";



const ProductCarousel = () => {
  return (
    <>
        <section className="relative -m-4">
  <div className="product-carousel2 overflow-hidden p-4">
    <div className="swiper-container">
      <div className="swiper-wrapper">
      {/* <!-- swiper-slide start --> */}
      <div className="swiper-slide">
        <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
          <div className="relative overflow-hidden">
            <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
            <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
            <img className="w-full h-full"  src="/images/products/drone/product1.webp" alt="product image" loading="lazy" width="432" height="480"/>
          {/* <!-- actions start --> */}

            <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
              <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                <li className="py-4 pl-7 md:py-5 md:pl-8">
                  <Link href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Quick View"  aria-label="Quick View">
                    <i className="icon-magnifier"></i>
                  </Link>
                </li>
                <li className="py-4 pl-7 md:py-5 md:pl-8">
                  <Link href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Add to wishlist" aria-label="wishlist">
                    <i className="icon-heart"></i>
                  </Link>
                </li>
                <li className="py-4 pl-7 md:py-5 md:pl-8">
                  <Link href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Compare" aria-label="Compare">
                    <i className="icon-refresh"></i>
                  </Link>
                </li>
                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                  <Link href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="add to cart" data-tippy-content="Add to cart">
                    <i className="icon-bag"></i>
                  </Link>
                </li>
              </ul>
            </div>

          {/* <!-- actions end --> */}


        {/* <!-- variants start --> */}

            <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
              <ul className="flex flex-wrap items-center justify-center mb-3">
                <li className="mx-1 leading-none"><button className="text-sm">sm</button></li>
                <li className="mx-1 leading-none"><button className="text-sm">l</button></li>
                <li className="mx-1 leading-none"><button className="text-sm">m</button></li>
                <li className="mx-1 leading-none"><button className="text-sm">xl</button></li>
                <li className="mx-1 leading-none"><button className="text-sm">xxl</button></li>
              </ul>
              <ul className="flex flex-wrap items-center justify-center">
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-orange" aria-label="colors"></button></li>
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-primary" aria-label="variants"></button></li>
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-indigo-600" aria-label="variants"></button></li>
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-dark" aria-label="variants"></button></li>
              </ul>
            </div>

            {/* <!-- variants end --> */}
          </div>

          <div className="py-5 px-4">
            <h3><Link className="block text-base hover:text-orange transition-all" href="#">Batin crofessor pampden</Link></h3>
            <h4 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h4>
          </div>
        </div>

      </div>
      {/* <!-- swiper-slide end--> */}
        {/* <!-- swiper-slide start --> */}
        <div className="swiper-slide">
          <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
            <div id="tab1" className="relative overflow-hidden">
              <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
              <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
            <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
            <img className="w-full h-full"  src="/images/products/drone/product2.webp" alt="product image" loading="lazy" width="432" height="480"/>

             {/* <!-- actions start --> */}

              <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                  <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <Link href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Quick View" aria-label="Quick View">
                      <i className="icon-magnifier"></i>
                    </Link>
                  </li>
                  <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <Link href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Add to wishlist" aria-label="Add to wishlist">
                      <i className="icon-heart"></i>
                    </Link>
                  </li>
                  <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <Link href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Compare" aria-label="compare">
                      <i className="icon-refresh"></i>
                    </Link>
                  </li>
                  <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                    <Link href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Add to cart" aria-label="Add to cart">
                      <i className="icon-bag"></i>
                    </Link>
                  </li>
                </ul>
              </div>

            {/* <!-- actions end --> */}
            </div>
  
            <div className="py-5 px-4">
              <h3><Link className="block text-base hover:text-orange transition-all" href="#">Esse quam nihil molestiae</Link></h3>
              <h4 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h4>
            </div>
            
          </div>

        </div>
        {/* <!-- swiper-slide end--> */}

        {/* <!-- swiper-slide start --> */}
        <div className="swiper-slide">
          <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
            <img className="w-full h-full"  src="/images/products/drone/product3.webp" alt="product image" loading="lazy" width="432" height="480"/>
             {/* <!-- actions start --> */}

              <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                  <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <Link href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Quick View" aria-label="Quick View">
                      <i className="icon-magnifier"></i>
                    </Link>
                  </li>
                  <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <Link href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Add to wishlist" aria-label="Add to wishlist">
                      <i className="icon-heart"></i>
                    </Link>
                  </li>
                  <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <Link href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Compare" aria-label="compare">
                      <i className="icon-refresh"></i>
                    </Link>
                  </li>
                  <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                    <Link href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Add to cart" aria-label="Add to cart">
                      <i className="icon-bag"></i>
                    </Link>
                  </li>
                </ul>
              </div>

            {/* <!-- actions end --> */}

  
            <div className="py-5 px-4">
              <h3><Link className="block text-base hover:text-orange transition-all" href="#">Inisd deofessor smpden</Link></h3>
              <h4 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h4>
            </div>
          </div>

        </div>
        {/* <!-- swiper-slide end--> */}

         {/* <!-- swiper-slide start --> */}
         <div className="swiper-slide">
          <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
            <div className="relative overflow-hidden">
              <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
              <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
            <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
            <img className="w-full h-full"  src="/images/products/drone/product4.webp" alt="product image" loading="lazy" width="432" height="480"/>
             {/* <!-- actions start --> */}

              <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                  <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <Link href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Quick View" aria-label="Quick View">
                      <i className="icon-magnifier"></i>
                    </Link>
                  </li>
                  <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <Link href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Add to wishlist" aria-label="Add to wishlist">
                      <i className="icon-heart"></i>
                    </Link>
                  </li>
                  <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <Link href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Compare" aria-label="compare">
                      <i className="icon-refresh"></i>
                    </Link>
                  </li>
                  <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                    <Link href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Add to cart" aria-label="Add to cart">
                      <i className="icon-bag"></i>
                    </Link>
                  </li>
                </ul>
              </div>

            {/* <!-- actions end --> */}


          {/* <!-- variants start --> */}

              <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
                <ul className="flex flex-wrap items-center justify-center mb-3">
                  <li className="mx-1 leading-none"><button className="text-sm">sm</button></li>
                  <li className="mx-1 leading-none"><button className="text-sm">l</button></li>
                  <li className="mx-1 leading-none"><button className="text-sm">m</button></li>
                  <li className="mx-1 leading-none"><button className="text-sm">xl</button></li>
                  <li className="mx-1 leading-none"><button className="text-sm">xxl</button></li>
                </ul>
                <ul className="flex flex-wrap items-center justify-center">
                  <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-orange" aria-label="colors"></button></li>
                  <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-primary" aria-label="variants"></button></li>
                  <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-indigo-600" aria-label="variants"></button></li>
                  <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-dark" aria-label="variants"></button></li>
                </ul>
              </div>

              {/* <!-- variants end --> */}
            </div>
  
            <div className="py-5 px-4">
              <h3><Link className="block text-base hover:text-orange transition-all" href="#">Nam libero tempore,</Link></h3>
              <h4 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h4>
            </div>
          </div>

        </div>
        {/* <!-- swiper-slide end--> */}

      {/* <!-- swiper-slide start --> */}
      <div className="swiper-slide">
        <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
          <div className="relative overflow-hidden">
            <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
            <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
          <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
          <img className="w-full h-full"  src="/images/products/drone/product5.webp" alt="product image" loading="lazy" width="432" height="480"/>
          {/* <!-- actions start --> */}

            <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
              <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                <li className="py-4 pl-7 md:py-5 md:pl-8">
                  <Link href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Quick View"  aria-label="Quick View">
                    <i className="icon-magnifier"></i>
                  </Link>
                </li>
                <li className="py-4 pl-7 md:py-5 md:pl-8">
                  <Link href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Add to wishlist" aria-label="wishlist">
                    <i className="icon-heart"></i>
                  </Link>
                </li>
                <li className="py-4 pl-7 md:py-5 md:pl-8">
                  <Link href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Compare" aria-label="Compare">
                    <i className="icon-refresh"></i>
                  </Link>
                </li>
                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                  <Link href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="add to cart" data-tippy-content="Add to cart">
                    <i className="icon-bag"></i>
                  </Link>
                </li>
              </ul>
            </div>

          {/* <!-- actions end --> */}


        {/* <!-- variants start --> */}

            <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
              <ul className="flex flex-wrap items-center justify-center mb-3">
                <li className="mx-1 leading-none"><button className="text-sm">sm</button></li>
                <li className="mx-1 leading-none"><button className="text-sm">l</button></li>
                <li className="mx-1 leading-none"><button className="text-sm">m</button></li>
                <li className="mx-1 leading-none"><button className="text-sm">xl</button></li>
                <li className="mx-1 leading-none"><button className="text-sm">xxl</button></li>
              </ul>
              <ul className="flex flex-wrap items-center justify-center">
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-orange" aria-label="colors"></button></li>
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-primary" aria-label="variants"></button></li>
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-indigo-600" aria-label="variants"></button></li>
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-dark" aria-label="variants"></button></li>
              </ul>
            </div>

            {/* <!-- variants end --> */}


          {/* <!-- countdown start --> */}

          <div className="absolute w-full bottom-0 group-hover:opacity-0 group-hover:invisible transition-all">
            <div className="countdown bg-dark item-1 flex flex-wrap justify-evenly p-2" data-countdown="2022/11/20" data-format="short">
                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                    <span className="countdown__time mr-1 text-base text-white font-500 daysLeft"></span>
                    <span className="countdown__text capitalize text-sm text-white font-light daysText"></span>
                </div>
                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                    <span className="countdown__time mr-1 text-base text-white font-500 hoursLeft"></span>
                    <span className="countdown__text capitalize text-sm text-white font-light hoursText"></span>
                </div>
                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                    <span className="countdown__time mr-1 text-base text-white font-500 minsLeft"></span>
                    <span className="countdown__text capitalize text-sm text-white font-light minsText"></span>
                </div>
                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                    <span className="countdown__time mr-1 text-base text-white font-500 secsLeft"></span>
                    <span className="countdown__text capitalize text-sm text-white font-light secsText"></span>
                </div>
            </div>
          </div>
          {/* <!-- countdown end --> */}
          </div>

          <div className="py-5 px-4">
            <h3><Link className="block text-base hover:text-orange transition-all" href="#">Catin uofessor eampden</Link></h3>
            <h4 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h4>
          </div>
        </div>

      </div>
      {/* <!-- swiper-slide end--> */}

        
      </div>
    </div>

    {/* <!-- Add Pagination --> */}

    {/* <!-- <div className="swiper-pagination"></div> --> */}

    {/* <!-- swiper navigation --> */}

        <div className="swiper-buttons">
          <div className="swiper-button-prev right-auto left-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange"></div>
          <div className="swiper-button-next left-auto right-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange"></div>
      </div>
  </div>
</section>
    </>
  )
}

export default ProductCarousel



