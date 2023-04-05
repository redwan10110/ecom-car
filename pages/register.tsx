import Layout from "@/components/Layout/Layout"
import Register from "@/components/LoginRegister/Register"


const register = () => {
  return (
    <>
        <Layout>
           <div className="mt-[60px]">
                <Register></Register>
            </div> 
        </Layout>
    </>
  )
}

export default register