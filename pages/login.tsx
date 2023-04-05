import Layout from "@/components/Layout/Layout";
import Login from "@/components/LoginRegister/Login";

const login = () => {
  return (
    <>
      <Layout>
        <div className="mt-[60px]">
          <Login></Login>
        </div>
      </Layout>
    </>
  );
};

export default login;
