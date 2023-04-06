import AccountDetails from '@/components/Dashboard/accountDetails'
import Layout from '@/components/Layout/Layout'
import React from 'react'

const index = () => {
  return (
    <>
        <Layout>
          <div className='mt-[60px]'>
            <AccountDetails></AccountDetails>
          </div>
        </Layout>
    </>
  )
}

export default index