import AccountDetails from "@/components/Dashboard/AccountDetails";
import AdminLayout from "@/components/Dashboard/AdminLayout";
import Link from "next/link";

const index = () => {
  return (
    <>
      <AdminLayout>
        <div id="dashboad" className="shop-tab-content">
          <div className="p-8 border border-gray-600">
            <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
              Dashboard
            </h3>
            <p>
              Hello, <strong>Alex Tuntuni</strong> (If Not
              <strong>Tuntuni ! </strong>
              <Link
                href="/login"
                className="transition-all hover:text-orange"
              >
                Logout
              </Link>
              )
            </p>
            <p>
              From your account dashboard. you can easily check &amp; view your
              recent orders, manage your shipping and billing addresses and edit
              your password and account details.
            </p>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default index;
