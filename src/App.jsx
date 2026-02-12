import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Navbar from './componenets/Navbar'
import Cart from './pages/Cart'
import AllProduct from './componenets/AllProduct'
import ProductDetails from './pages/ProductDetails'
import ProductByCategory from './pages/ProductByCategory'
import SearchProduct from './pages/SearchProduct'
import Slider from './componenets/Slider'

function App() {


  return (
    <>
      <div className="App border-gray-500 border-r-15 border-l-15  ">
        <Router>

          <Navbar />

          <Routes>
            <Route path='/' element={<AllProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/product/category/:id' element={<ProductByCategory />} />
            <Route path='/product/search/:term' element={<SearchProduct />} />
          </Routes>

          <Slider />

        </Router>
      </div>
    </>
  )
}

export default App
