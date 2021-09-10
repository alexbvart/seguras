import '../styles/globals.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../src/containers/Layout'
import SessionState from 'context/session/sesionState'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionState>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionState>
    </>
  )
}

export default MyApp
