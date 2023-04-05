import CartComp from "@/components/Cart/Cart";
import Layout from "@/components/Layout/Layout";

const Cart = () => {
  return (
    <>
      <Layout>
        <div className="mt-[70px]">
          <CartComp></CartComp>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
