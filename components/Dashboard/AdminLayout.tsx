import Link from "next/link";
import Layout from "../Layout/Layout";
import { useRouter } from "next/router";

const AdminLayout = ({children}) => {

  const isActiveRoute = (pathname) => {

    const { asPath } = useRouter();
    return asPath === pathname;
  };
  return (
    <>
      <Layout>
        <div className="lg:mt-[70px] mt-[80px]">
          {/* Breadcrumb section start */}
          <div
            className="py-0 bg-gray-light"
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
                  MY ACCOUNT
                </h2>
                    {/* <ul className="flex flex-wrap items-center justify-center">
                      <li className="mr-5">
                        <Link
                          href="/"
                          className="text-dark font-medium text-base uppercase transition-all hover:text-[#435c7f] relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="text-dark font-medium text-base uppercase mr-5">
                        account Page
                      </li>
                    </ul> */}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumb section end  */}

          <div className="pb-24 mt-16">
            <div className="container">
              <div
                id="shoptab"
                className="grid grid-cols-12 gap-y-5 lg:gap-y-0 gap-x-5"
              >
                <div className="col-span-12 lg:col-span-4">
                  <ul className="shop-tab-nav account-nav flex flex-wrap flex-col">
                    <li className={isActiveRoute("/dashboard") ? "active" : ""}>
                      <Link
                        className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-[#435c7f] text-base border-t border-l border-r border-gray-600 block"
                        href="/dashboard"
                      >
                        dashboad
                      </Link>
                    </li>
                    <li className={isActiveRoute("/dashboard/orders") ? "active" : ""}>
                      <Link
                        className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-[#435c7f]  text-base border-t border-l border-r border-gray-600 block"
                        href="/dashboard/orders"
                      >
                        orders
                      </Link>
                    </li>
                    <li className={isActiveRoute("/dashboard/payment") ? "active" : ""}>
                      <Link
                        className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-[#435c7f]  text-base border-t border-l border-r border-gray-600 block"
                        href="/dashboard/payment"
                      >
                        payment method
                      </Link>
                    </li>
                    <li className={isActiveRoute("/dashboard/address") ? "active" : ""}>
                      <Link
                        className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-[#435c7f]  text-base border-t border-l border-r border-gray-600 block"
                        href="/dashboard/address"
                      >
                        address
                      </Link>
                    </li>
                    <li className={isActiveRoute("/dashboard/account") ? "active" : ""}>
                      <Link
                        className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-[#435c7f]  text-base border-t border-l border-r border-gray-600 block"
                        href="/dashboard/account"
                      >
                        {" "}
                        Account Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-[#435c7f]  text-base border-t border-l border-r border-b border-gray-600 block"
                        href="/login"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-12 lg:col-span-8">
                  <div>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminLayout;
