import { ReactElement } from 'react'

import DashboardWrapper from '@/components/DashboardWrapper'
import { withSSRAuth } from '@/utils/with-ssr-auth'

export default function Dashboard() {
  return <h2>Home</h2>
}

Dashboard.getLayout = function (page: ReactElement) {
  return <DashboardWrapper title="Início">{page}</DashboardWrapper>
}

export const getServerSideProps = withSSRAuth(
  async ctx => {
    return {
      props: {}
    }
  },
  {
    isAdmin: true
  }
)
