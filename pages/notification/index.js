import Head from 'next/head'

import { getAllNotification } from '@service/NotificationServices'
import { useEffect, useState } from 'react'
import CardListNotification from '@components/Card/listNotification'

export default function Notification({}) {

  const [notification, setNotification] = useState([])
  useEffect(() => {
    getAllNotification().then(res=>    setNotification(res))
  }, [])
  console.log(notification)
  return (
    <>
      <Head>
        <title>Seguras | Notificaciones</title>
        <meta name="description" content="Application monitoring platform secure" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <h1 className="title">
          Notificaciones recientes
        </h1>

{/*         <p className="description">
          Get started by editing{' '}
        </p> */}
        
        <CardListNotification data={notification} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;
  /* const { query } = params; */
  return {
      props: {

      }
  };
}