import Layout from "@/components/Layout/Layout";
import ProductsDetails from "@/components/Shop/ProductsDetails";
import { useRouter } from "next/router";

const ProductId = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <>
      <Layout>
        <div className="lg:mt-[70px] mt-[80px]">
          <ProductsDetails></ProductsDetails>
        </div>
      </Layout>
    </>
  );
};

export default ProductId;
