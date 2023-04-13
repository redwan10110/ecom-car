import Layout from "@/components/Layout/Layout"
import Register from "@/components/LoginRegister/Register"


const register = () => {
  return (
    <>
        <Layout>
           <div className="lg:mt-[70px] mt-[80px]">
                <Register></Register>
            </div> 
        </Layout>
    </>
  )
}

export default register