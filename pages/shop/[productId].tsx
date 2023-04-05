import Layout from "@/components/Layout/Layout";
import ProductsDetails from "@/components/Shop/ProductsDetails";
import { useRouter } from "next/router";

const ProductId = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <>
      <Layout>
        <div className="mt-[100px]">
          <ProductsDetails></ProductsDetails>
        </div>
      </Layout>
    </>
  );
};

export default ProductId;
