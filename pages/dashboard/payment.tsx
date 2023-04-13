import AdminLayout from "@/components/Dashboard/AdminLayout";

const payment = () => {
  return (
    <>
      <AdminLayout>
        <div id="payment-method" className="shop-tab-content">
          <div className="p-8 border border-gray-600">
            <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
              Payment Method
            </h3>
            <p className="font-medium p-4">
              You Can't Saved Your Payment Method yet.{" "}
            </p>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default payment;
