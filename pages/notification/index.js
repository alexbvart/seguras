import Head from 'next/head'
import CardList from '@components/Card/list'

export default function Notification({notifications}) {
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

        <CardList data={notifications} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;

  /* const { query } = params; */
  const SERVER_HOST = process.env.NEXT_PUBLIC_API_PORT

  const notifications = await fetch(`${SERVER_HOST}/notification`)
  .then(res => res.json())

  return {
      props: {
        notifications
      }
  };
}