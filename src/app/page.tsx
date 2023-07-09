import Image from 'next/image'
import Slider from './components/Slider'
import Cards from './components/Cards'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
 <>
 <Navbar/>
 <Slider/>
 <Cards/>
  <Form/>
  <Footer/>
 
 </>
  )
}
