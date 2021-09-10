import { useEffect } from 'react'
import Head from 'next/head'
import CardList from '@components/Card/list'
import useSession from '@hooks/useSesion';

export default function Home({ reports }) { 
  
  useSession()
  return (
    <>
      <Head>
        <title>Secure</title>
        <meta name="description" content="Application monitoring platform secure" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <h1 className="title">
        Alertas recientes
      </h1>
      <CardList data={reports} />
    </>
  )
}
export async function getServerSideProps(context) {
  const { params } = context;
  const SERVER_HOST = process.env.NEXT_PUBLIC_API_PORT
  let reports = []
  try {
    reports = await fetch(`${SERVER_HOST}/reports/`)
    reports = await reports.json()
  }
  catch (e) {
    console.log(e)
  }
  return {
    props: {
      reports
    }
  };
}