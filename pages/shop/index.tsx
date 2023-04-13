import Layout from "@/components/Layout/Layout";
import ShopGrid from "@/components/Shop/ShopGrid";
import Head from "next/head";

const Shop = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <Layout>
        <div className="lg:mt-[70px] mt-[80px]">
          <ShopGrid></ShopGrid>
        </div>
      </Layout>
      <a
        id="scrollUp"
        className="w-12 h-12 rounded-full bg-orange text-white fixed right-5 bottom-16 flex flex-wrap items-center justify-center transition-all duration-300 z-10"
        href="#"
        aria-label="scroll up"
      >
        <i className="icon-arrow-up"></i>
      </a>
    </>
  );
};

export default Shop;
