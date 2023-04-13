import Layout from "@/components/Layout/Layout";
import Login from "@/components/LoginRegister/Login";

const login = () => {
  return (
    <>
      <Layout>
        <div className="lg:mt-[70px] mt-[80px]">
          <Login></Login>
        </div>
      </Layout>
    </>
  );
};

export default login;
