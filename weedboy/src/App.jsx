import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import PageNotFund from './pages/PageNotFund'
import Navbar from './components/navbar/Navbar'
import ProductForm from './components/productForm/ProductForm'

import Testimonial from './components/testimonial/Testimonial'
import Touch from './components/inTouch/Touch'
import Footer from './components/footer/Footer'
import About from './components/about/About'

import Contact from './components/contact/Contact'
import Card from './components/productCard/Card'
import ProductCard from './components/productCard/ProductCard'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/form" element={<ProductForm />} />
          <Route path="/shop" element={<ProductCard/>} />
          <Route path="/testi" element={<Testimonial/>} />
          <Route path="/touch" element={<Touch/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/card" element={<Card/>} />
          
          <Route path="/contact" element={<Contact/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="*" element={<PageNotFund />} />
        
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
