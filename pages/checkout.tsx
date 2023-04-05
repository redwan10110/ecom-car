import CheckOutCom from "@/components/Cart/CheckOut/CheckOutCom"
import Layout from "@/components/Layout/Layout"



const checkout = () => {
  return (
    <>
      <Layout>
        <div className="mt-[60px]">
            <CheckOutCom></CheckOutCom>
        </div>
      </Layout>
    </>
  )
}

export default checkout