import Layout from '../components/Layout'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion'


function MyApp({ Component, pageProps, router }) {
  const url = router.route

  return (

    <Layout>
      <AnimatePresence exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </Layout>


  )
}

export default MyApp
