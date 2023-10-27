import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Galeria } from './components/Galeria'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'

function App() {


  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Galeria/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default App
