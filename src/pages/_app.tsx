import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.scss'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Nav from "../components/Nav"


const _App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Layout>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </Layout>
    </>
  )
}
export default _App