import CartComp from "@/components/Cart/Cart";
import Layout from "@/components/Layout/Layout";

const Cart = () => {
  return (
    <>
      <Layout>
        <div className="lg:mt-[70px] mt-[80px]">
          <CartComp></CartComp>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
