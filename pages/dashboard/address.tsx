import AdminLayout from "@/components/Dashboard/AdminLayout";
import Link from "next/link";
import React from "react";

const address = () => {
  return (
    <>
      <AdminLayout>
        <div id="address" className="shop-tab-content">
          <div className="p-8 border border-gray-600">
            <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
              Billing Address
            </h3>

            <address className="not-italic">
              <p>
                <strong>Alex Tuntuni</strong>
              </p>
              <p>
                1355 Market St, Suite 900 <br />
                San Francisco, CA 94103
              </p>
              <p>Mobile: (123) 456-7890</p>
            </address>

            <Link href="#" className="transition-all hover:text-orange">
              Edit Address
            </Link>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default address;
