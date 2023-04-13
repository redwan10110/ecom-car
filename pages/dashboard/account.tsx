import AdminLayout from "@/components/Dashboard/AdminLayout";

const account = () => {
  return (
    <>
      <AdminLayout>
        <div id="account" className="shop-tab-content ">
          <div className="p-8 border border-gray-600">
            <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
              Account Details
            </h3>
            <form action="#">
              <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-12 lg:col-span-6 mb-5">
                  <input
                    className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    id="first-name"
                    placeholder="First Name"
                    type="text"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 mb-5">
                  <input
                    className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    id="last-name"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>

                <div className="col-span-12 mb-5">
                  <input
                    className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    id="display-name"
                    placeholder="Display Name"
                    type="text"
                  />
                </div>

                <div className="col-span-12 mb-5">
                  <input
                    className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    id="email"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>

                <div className="col-span-12 mb-5">
                  <h4 className="font-semibold text-base capitalize">
                    Password change
                  </h4>
                </div>

                <div className="col-span-12 mb-5">
                  <input
                    className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    id="current-pwd"
                    placeholder="Current Password"
                    type="password"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 mb-5">
                  <input
                    className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    id="new-pwd"
                    placeholder="New Password"
                    type="password"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 mb-5">
                  <input
                    className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                    id="confirm-pwd"
                    placeholder="Confirm Password"
                    type="password"
                  />
                </div>

                <div className="col-span-12">
                  <button
                    className="inline-block leading-none uppercase text-white text-sm bg-gray-800 px-5 py-5 transition-all hover:bg-[#435c7f]"
                    aria-label="Save Changes"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default account;
