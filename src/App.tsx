import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import AdviceCard from './components/AdviceCard/AdviceCard'

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 400)


  const updateScreenState = () =>{
    setDesktop(window.innerWidth > 400)
  }

  useEffect(() => {
    window.addEventListener("resize", updateScreenState)
    return () => window.removeEventListener("resize", updateScreenState)
  })
  return (
    <>
    <main className='app'>
      <AdviceCard isDesktop={isDesktop}/>
      <Footer/>
    </main>
    </>
  )
}

export default App
