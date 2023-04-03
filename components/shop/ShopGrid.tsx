import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ShopGrid = () => {

    const [isQuickViewOpen,setIsQuickViewOpen] = useState(false);
    const [isAddToCartOpen,setIsAddToCartOpen] = useState(false)
    const openQuickView =()=>{
        setIsQuickViewOpen(true);
    }

    const closeQuickView = ()=>{
        setIsQuickViewOpen(false);
    }

    const openAddToCart =()=>{
        setIsAddToCartOpen(true);
    }
    const closeAddToCart = ()=>{
        setIsAddToCartOpen(false)
    }
  return (
    <>
      <div>
        <div className="py-24">
          <div className="container">
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4">
              <div id="shoptab" className="flex-1 px-4">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex flex-wrap">
                    <div className="shop-select flex mr-12">
                      <label htmlFor="SortBy">Sort by :</label>
                      <select id="SortBy" className="px-2 bg-transparent">
                        <option defaultValue="manual">Featured</option>
                        <option defaultValue="best-selling">Best Selling</option>
                        <option defaultValue="title-ascending">
                          Alphabetically, A-Z
                        </option>
                        <option defaultValue="title-descending">
                          Alphabetically, Z-A
                        </option>
                        <option defaultValue="price-ascending">
                          Price, low to high
                        </option>
                        <option defaultValue="price-descending">
                          Price, high to low
                        </option>
                        <option defaultValue="created-descending">
                          Date, new to old
                        </option>
                        <option defaultValue="created-ascending">
                          Date, old to new
                        </option>
                      </select>
                    </div>
                    <p className="my-2 sm:my-0">Showing 1 - 9 of 9 result</p>
                  </div>
                  <div>
                    <span>Show :</span>
                    <select className="bg-transparent">
                      <option defaultValue="1">1</option>
                      <option defaultValue="2">2</option>
                      <option defaultValue="3">3</option>
                      <option defaultValue="4">4</option>
                    </select>
                  </div>
                  <div>
                    <ul className="shop-tab-nav flex flex-wrap">
                      <li>
                        <Link
                          href="#grid"
                          className="text-base hover:text-orange inline-block py-2 px-2"
                        >
                          <i className="icon-grid"></i>
                        </Link>
                      </li>
                      <li className="active">
                        <Link
                          href="#list"
                          className="text-base hover:text-orange inline-block py-2 px-2 ml-5"
                        >
                          <i className="icon-menu"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <div id="list" className="shop-tab-content active">
                    <div className="flex flex-wrap -mb-7 -px-4">
                      <div className="w-full px-4 mb-7">
                        <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                          <div className="relative overflow-hidden md:w-1/3">
                            <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">
                              Sale
                            </span>
                            <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">
                              -11%
                            </span>
                            <Image
                              className="md:absolute w-full md:h-full md:object-cover"
                              src="/images/products/drone/product1.webp"
                              alt="product image"
                              loading="lazy"
                              width="432"
                              height="480"
                            />
                            {/* <!-- actions start --> */}

                            <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10" onClick={openQuickView}>
                              <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                <li>
                                  <Link
                                    href="#modal-cart"
                                    className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4"
                                    aria-label="quick veiw"
                                    data-tippy-content="Quick View"
                                  >
                                    <i className="icon-magnifier-add"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            {/* <!-- actions end --> */}

                            {/* <!-- variants start --> */}

                            <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
                              <ul className="flex flex-wrap items-center justify-center mb-3">
                                <li className="mx-1 leading-none">
                                  <button className="text-sm">sm</button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button className="text-sm">l</button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button className="text-sm">m</button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button className="text-sm">xl</button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button className="text-sm">xxl</button>
                                </li>
                              </ul>
                              <ul className="flex flex-wrap items-center justify-center">
                                <li className="mx-1 leading-none">
                                  <button
                                    className="w-4 h-4 rounded-full bg-orange"
                                    aria-label="colors"
                                  ></button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button
                                    className="w-4 h-4 rounded-full bg-primary"
                                    aria-label="variants"
                                  ></button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button
                                    className="w-4 h-4 rounded-full bg-indigo-600"
                                    aria-label="variants"
                                  ></button>
                                </li>
                                <li className="mx-1 leading-none">
                                  <button
                                    className="w-4 h-4 rounded-full bg-dark"
                                    aria-label="variants"
                                  ></button>
                                </li>
                              </ul>
                            </div>

                            {/* <!-- variants end --> */}
                          </div>

                          <div className="py-5 px-4 flex-1">
                            <h4>
                              <Link
                                className="block text-md hover:text-orange transition-all mb-2"
                                href="#"
                              >
                                Batin crofessor pampden
                              </Link>
                            </h4>
                            <p className="text-sm">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable. If you are going to use a passage of
                              Lorem Ipsum, you need to be sure there isn't
                              anything embarrassing hidden in the middle of
                              text.
                            </p>

                            <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4">
                              <del className="font-normal text-sm mr-1 inline-block">
                                $110.00
                              </del>
                              $130.00
                            </h5>

                            <ul className="flex items-center">
                              <li className="mr-2">
                                <Link
                                  href="whishlist.html"
                                  className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange"
                                  aria-label="Add to wishlist"
                                  data-tippy-content="Add to wishlist"
                                >
                                  <i className="icon-heart"></i>
                                </Link>
                              </li>
                              <li className="mr-2">
                                <Link
                                  href="#modal-addto-cart"
                                  className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle"
                                  aria-label="Add to cart"
                                  data-tippy-content="Add to cart"
                                  onClick={openAddToCart}
                                >
                                  <i className="icon-basket-loaded"></i>
                                  <span className="text-sm ml-2">
                                    Add to cart
                                  </span>
                                </Link>
                              </li>
                              <li className="mr-2">
                                <Link
                                  href="compare.html"
                                  className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange"
                                  aria-label="Compare"
                                  data-tippy-content="Compare"
                                >
                                  <i className="icon-refresh"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <ul className="pagination flex flex-wrap items-center justify-center">
                    <li className="mx-2">
                      <Link
                        className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white"
                        href="#"
                      >
                        <i className="icon-arrow-left"></i>
                      </Link>
                    </li>

                    <li className="mx-2">
                      <Link
                        className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white active"
                        href="#"
                      >
                        1
                      </Link>
                    </li>
                    <li className="mx-2">
                      <Link
                        className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white"
                        href="#"
                      >
                        2
                      </Link>
                    </li>
                    <li className="mx-2">
                      <Link
                        className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white"
                        href="#"
                      >
                        3
                      </Link>
                    </li>
                    <li className="mx-2">
                      <Link
                        className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white"
                        href="#"
                      >
                        <i className="icon-arrow-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Quick View */}
      {/* <!-- modal-overlay start --> */}
      <div className={`modal-overlay ${isQuickViewOpen||isAddToCartOpen?"block":"hidden"} fixed inset-0 bg-black opacity-50 z-10`} onClick={() => {
          closeAddToCart();
          closeQuickView();
        }}></div>
      {/* <!-- modal-overlay end --> */}
      {/* <!-- modal-mobile-menu start --> */}
      <div
        id="modal-cart"
        className={`modal fixed opacity-0 transition-opacity duration-300 ease-linear md:w-11/12 md:max-w-1000 hidden z-40 left-8 right-8 md:left-1/2 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 p-7 bg-white ${isQuickViewOpen?"modal-open":""}`}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="w-full">
            <Image
              className="w-full h-full"
              src="/images/products/lg/product1.webp"
              alt="product image"
              loading="lazy"
              width="432"
              height="480"
            />
          </div>
          <div>
            <button className="text-black text-lg absolute top-7 right-7 modal-close" onClick={closeQuickView}>
              <i className="icon-close"></i>
            </button>

            <h3 className="text-dark font-medium text-md lg:text-lg leading-none mb-4">
              Airpod product kiebd
            </h3>
            <h5 className="font-bold text-md leading-none text-orange mb-8">
              $130.00
              <del className="font-normal text-base mr-1 inline-block">
                $110.00
              </del>
            </h5>

            <p className="mb-5 text-sm">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. All the Lorem Ipsum generators on the
              Internet tend to repeat predefined chunks as necessary,
            </p>

            <select
              className="w-full h-12 border border-solid border-gray-300  px-5 py-2 appearance-none"
              style={{
                background:
                  'rgba(0,0,0,0) url("/images/icon/qcv-arrow-down.webp") no-repeat scroll right 20px center',
              }}
            >
              <option defaultValue="red">red</option>
              <option defaultValue="green">green</option>
              <option defaultValue="blue">blue</option>
            </select>

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
                  defaultValue="1"
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
                <button className="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- modal-mobile-menu end --> */}


      {/* Modal Add to cart */}
      {/* <!-- modal-overlay start --> */}

{/* <!-- modal-overlay end --> */}
{/* <!-- modal-mobile-menu start --> */}
<div id="modal-addto-cart" className={`modal fixed opacity-0 transition-opacity duration-300 ease-linear md:w-11/12 md:max-w-1000 hidden z-50 left-8 right-8 md:left-1/2 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 p-7 bg-white mx-auto ${isAddToCartOpen?"modal-open":""}`}>


<div className="md:flex md:flex-wrap">
    <div className="md:mr-5 md:flex-30 mb-5 md:mb-0">
       <Image className="w-full" src="/images/products/lg/product1.webp" alt="product image" loading="lazy" width="432" height="480" />
    </div>
    <div className="md:flex-auto">
        <button className="text-black text-lg absolute top-7 right-7 modal-close"><i className="icon-close" onClick={closeAddToCart}></i></button>
        <h3 className="text-dark font-medium text-md sm:text-lg mb-4">Airpod product kiebd</h3>
        <p className="text-dark text-sm flex flex-wrap items-center"><i className="icon-check text-lg mr-5"></i> Added to cart successfully!</p>
        <div className="mt-8">
            <a href="#" className="bg-black leading-none py-2 px-5 font-normal text-sm text-white transition-all hover:bg-orange mr-5">View Cart</a>
            <a href="#" className="bg-black leading-none py-2 px-5 font-normal text-sm text-white transition-all hover:bg-orange">Checkout</a>
        </div>
    </div>
  </div>

</div>
{/* <!-- modal-mobile-menu end --> */}
    </>
  );
};

export default ShopGrid;
