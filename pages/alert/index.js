import Head from 'next/head'
import CardList from '@components/Card/list'
import useSession from '@hooks/useSesion';
import { getAllAlerts } from '@service/AlertServices';
import { useEffect, useState } from 'react';

export default function Report({}) {
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    getAllAlerts().then(res=>    setAlerts(res))
  }, [])
  console.log({alerts})
  return (
    <>
      <Head>
        <title>Seguras | Reportes</title>
        <meta name="description" content="Application monitoring platform secure" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <h1 className="title">
          Alertas recientes
        </h1>
        {/* <CardList data={[...reports,...alerts]} /> */}
        <CardList data={alerts} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;
  const SERVER_HOST = process.env.NEXT_PUBLIC_API_PORT

  return {
      props: {
      }
  };
}