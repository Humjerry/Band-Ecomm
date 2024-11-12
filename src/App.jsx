import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Navbar from "./assets/components/navbar/nav.jsx";
import Firstshow from "./assets/./pages/products/firstshow.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Firstshow/>
     <ToastContainer/>
    </>
  )
}

export default App
