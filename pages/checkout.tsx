import CheckOutCom from "@/components/Cart/CheckOut/CheckOutCom"
import Layout from "@/components/Layout/Layout"



const checkout = () => {
  return (
    <>
      <Layout>
        <div className="lg:mt-[70px] mt-[80px]">
            <CheckOutCom></CheckOutCom>
        </div>
      </Layout>
    </>
  )
}

export default checkout