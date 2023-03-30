import AppWrapper from '@/components/AppWrapper'
import { api } from '@/services/api'
import { withSSRAuth } from '@/utils/with-ssr-auth'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import { Home as HomeTemplate } from './home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ERent</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { properties } = await api({
    method: 'GET',
    endpoint: '/properties',
    context: context
  })

  return {
    props: {}
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}