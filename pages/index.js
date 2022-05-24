import Head from 'next/head'
import GetStarted from '../components/GetStarted'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'
import { ToastContainer } from 'react-toastify';
import Popup from '../components/Popup'
import { useState } from 'react'
import { useActive } from '../components/hooks/useActive';



export default function Home() {
  const [isPopup, setIsPopup] = useState(false)

  const active = useActive(5000)

  return (
    <div>
      <Head>
        <title>My Team</title>
        <meta name="description" content="my team website created with next" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      {active &&  <button onClick={() => setIsPopup(!isPopup)} className="fixed z-50 top-1 right-1">
        <img className="w-20 h-20 animate-pulse rounded-full" src="/images/skull.gif" alt="skull" />
      </button> }
      <ToastContainer limit={3} />
      <Popup isPopup={isPopup} setIsPopup={setIsPopup}/>
      <Hero />
      <HomeContent />
      <GetStarted />
    </div>
  )
}
