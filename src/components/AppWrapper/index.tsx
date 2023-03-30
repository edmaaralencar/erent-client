import { ReactNode } from 'react'

import Header from '../Header'
import Footer from '../Footer'

type AppWrapperProps = {
  children: ReactNode
}

function AppWrapper({ children }: AppWrapperProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default AppWrapper
