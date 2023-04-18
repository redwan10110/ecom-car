import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DescriptionTab = () => {

  const [activeTab, setActiveTab] = useState("description");

  const handleDescriptionClick = () => {
    setActiveTab("description");
  };

  const handleProductDetailsClick = () => {
    setActiveTab("productDetails");
  };
  const handleReviewsClick = () => {
    setActiveTab("reviews");
  };

  return (
    <>
      <div id="maintab" className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-5">
            <div className="border border-solid border-gray-300 p-8">
              <ul className="custom-tab-nav flex flex-wrap items-center mb-10 -mx-5 -my-1">
                <li className={`mx-5 my-1 ${activeTab === "description"?"active":""}`}>
                  <Link
                    className="pb-3 leading-none capitalize transition-all hover:text-[#435c7f] text-base sm:text-md before:absolute before:left-auto before:right-0 before:bottom-0 before:w-0 before:h-2px before:empty before:bg-[#435c7f] relative before:transition-all ease-out"
                    href="#description"
                    onClick={handleDescriptionClick}
                  >
                    Description
                  </Link>
                </li>
                <li className={`mx-5 my-1 ${activeTab ==="productDetails"?"active":""}`}>
                  <Link
                    className="pb-3 leading-none capitalize transition-all hover:text-[#435c7f] text-base sm:text-md before:absolute before:left-auto before:right-0 before:bottom-0 before:w-0 before:h-2px before:empty before:bg-[#435c7f] relative before:transition-all ease-out"
                    href="#product-details"
                    onClick={handleProductDetailsClick}
                  >
                    Product Details
                  </Link>
                </li>
                <li className={`mx-5 my-1 ${activeTab ==="reviews"?"active":""}`}>
                  <Link
                    className="pb-3 leading-none capitalize transition-all hover:text-[#435c7f] text-base sm:text-md before:absolute before:left-auto before:right-0 before:bottom-0 before:w-0 before:h-2px before:empty before:bg-[#435c7f] relative before:transition-all ease-out"
                    href="#review"
                    onClick={handleReviewsClick}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
              {activeTab === "description" && (<div  className="custom-tab-content">
                <div>
                  <p className="mb-5">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as saying
                    through shrinking from toil and pain. These cases are
                    perfectly simple and easy to distinguish. In a free hour,
                    when our power of choice is untrammelled and when nothing
                    prevents our being able to do what we like best, every
                    pleasure is to be welcomed and every pain avoided.
                  </p>
                </div>
              </div>)}
              
              {activeTab === "productDetails" && (<div id="" className="custom-tab-content">
                <div className="review-bottom">
                  <div className="single-product-desc">
                    <div className="product-anotherinfo-wrapper">
                      <ul>
                        <li className="mb-4">
                          <span className="font-semibold w-28 inline-block">
                            Weight
                          </span>{" "}
                          400 g
                        </li>
                        <li className="mb-4">
                          <span className="font-semibold w-28 inline-block">
                            Dimensions
                          </span>
                          10 x 10 x 15 cm
                        </li>
                        <li className="mb-4">
                          <span className="font-semibold w-28 inline-block">
                            Materials
                          </span>{" "}
                          60% cotton, 40% polyester
                        </li>
                        <li className="mb-4">
                          <span className="font-semibold w-28 inline-block">
                            Other Info
                          </span>{" "}
                          American heirloom jean shorts pug seitan letterpress
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>)}
              {activeTab === "reviews" && (<div id="" className="custom-tab-content">
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 xl:gap-x-10">
                    <div>
                      <div className="flex flex-wrap flex-col sm:flex-row items-start relative mb-12">
                        <Image
                          className="mr-7 mb-5 sm:mb-0"
                          src="/images/testimonial/1.png"
                          alt="testImg"
                          width={120}
                          height={120}
                        />
                        <div className="flex-1">
                          <div className="flex flex-wrap">
                            <h4 className="text-base text-dark font-semibold">
                              White Lewis
                            </h4>
                            <div className="ml-8 text-orange">
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                            </div>
                          </div>
                          <div className="text-right">
                            <Link
                              className="hover:text-orange transition-all"
                              href="#"
                            >
                              Reply
                            </Link>
                          </div>
                          <p>
                            Vestibulum ante ipsum primis aucibus orci
                            luctustrices posuere cubilia Curae Suspendisse
                            viverra ed viverra. Mauris ullarper euismod
                            vehicula. Phasellus quam nisi, congue id nulla.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap flex-col sm:flex-row items-start relative mb-12">
                        <Image
                          className="mr-7 mb-5 sm:mb-0"
                          src="/images/testimonial/2.png"
                          alt=""
                          width={120}
                          height={120}
                        />
                        <div className="flex-1">
                          <div className="flex flex-wrap">
                            <h4 className="text-base text-dark font-semibold">
                              White Lewis
                            </h4>
                            <div className="ml-8 text-orange">
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                              <i className="icofont-star"></i>
                            </div>
                          </div>
                          <div className="text-right">
                            <Link
                              className="hover:text-orange transition-all"
                              href="#"
                            >
                              Reply
                            </Link>
                          </div>
                          <p>
                            Vestibulum ante ipsum primis aucibus orci
                            luctustrices posuere cubilia Curae Suspendisse
                            viverra ed viverra. Mauris ullarper euismod
                            vehicula. Phasellus quam nisi, congue id nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base text-dark font-semibold">
                        Add a Review
                      </h4>
                      <form action="#">
                        <div className="flex flex-wrap mb-5">
                          <span className="mr-4">Your rating:</span>
                          <div className="text-orange">
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4">
                          <div className="leave-form col-span-2 sm:col-span-1">
                            <input
                              className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                              placeholder="Name"
                              type="text"
                            />
                          </div>
                          <div className="leave-form col-span-2 sm:col-span-1">
                            <input
                              className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                              placeholder="Email"
                              type="email"
                            />
                          </div>
                          <div className="text-leave col-span-2">
                            <textarea
                              className="border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-60 focus:outline-none text-base resize-none"
                              name="Your Review"
                              placeholder="Message"
                            ></textarea>
                            <button
                              type="submit"
                              className="leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-[#435c7f]"
                            >
                              Post comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>)}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionTab;
