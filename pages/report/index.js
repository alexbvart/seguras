import Head from 'next/head'
import CardList from '@components/Card/list'

export default function Report({reports}) {
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

{/*         <p className="description">
          Get started by editing{' '}
        </p> */}

        <CardList data={reports} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;

  /* const { query } = params; */
  const SERVER_HOST = process.env.NEXT_PUBLIC_API_PORT

  const reports = await fetch(`${SERVER_HOST}/reports/`)
  .then(res => res.json())

  return {
      props: {
        reports
      }
  };
}