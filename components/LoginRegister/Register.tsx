import Link from "next/link";
import { ReactNode } from "react";

const Register = () => {
  return (
    <>
      {/* Breadcrumb section start */}
      <div className="py-5 bg-gray-light" style={{ backgroundImage: "url('/images/GreyBar.png')",backgroundPosition: "center", }}>
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12">
              <nav>
                <ul className="flex flex-wrap items-center justify-center">
                  <li className="mr-5">
                    <Link
                      href="index.html"
                      className="text-dark font-medium text-base uppercase transition-all hover:text-[#435c7f] relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-dark font-medium text-base uppercase mr-5">
                    Login Or Register{" "}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb section end  */}

      <div className="pb-24 mt-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-5">
            <div className="col-span-12">
              <div id="maintab">
                <ul className="custom-tab-nav flex flex-wrap items-center justify-center mb-10">
                  <li className="mx-2">
                    <Link
                      className="font-semibold py-3 px-5 leading-none uppercase transition-all hover:text-[#435c7f]  text-base md:text-md"
                      href="/login"
                    >
                      login
                    </Link>{" "}
                    <span className="inline-block ml-2">|</span>
                  </li>
                  <li className="mx-2">
                    <Link
                      className="font-semibold py-3 px-5 leading-none uppercase transition-all text-[#435c7f]  text-base md:text-md"
                      href="/register"
                    >
                      register
                    </Link>
                  </li>
                </ul>

                <div>
                  <div id="register" className="custom-tab-content">
                    <div className="p-8 md:p-20 shadow max-w-4xl mx-auto">
                      <form action="#" method="post">
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="text"
                          name="user-name"
                          placeholder="Username"
                        />
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          type="password"
                          name="user-password"
                          placeholder="Password"
                        />
                        <input
                          className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                          name="user-email"
                          placeholder="Email"
                          type="email"
                        />
                        <div className="button-box">
                          <Link
                            href="#"
                            className="inline-block leading-none uppercase text-white text-sm bg-gray-800 px-5 py-4 transition-all hover:bg-[#435c7f]"
                          >
                            <span>Register</span>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
