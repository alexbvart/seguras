import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import MyMap from '../src/components/MyMap'
import CardList from 'components/Card/list'

export default function Home({reports}) {
  return (
    <>

 
      <Head>
        <title>Secure</title>
        <meta name="description" content="Application monitoring platform secure" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <h1 className="title">
          Incidencias recientes
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
  const SERVER_HOST = "http://localhost:3001";

  const reports = await fetch(`${SERVER_HOST}/reports/`)
  .then(res => res.json())

  return {
      props: {
        reports
      }
  };
}