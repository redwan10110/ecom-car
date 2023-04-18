import AboutUsCom from "@/components/AboutUs/AboutUsCom";
import Layout from "@/components/Layout/Layout";
import ScrollTop from "@/components/Shared/ScrollTop";


const aboutUs = () => {
  return (
    <>
      <Layout>
        <div className="lg:mt-[70px] mt-[80px]">
          <AboutUsCom></AboutUsCom>
        </div>
      </Layout>

    </>
  );
};

export default aboutUs;
