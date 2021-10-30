import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      test: 'ward',
    },
  }
}

export default MyApp
