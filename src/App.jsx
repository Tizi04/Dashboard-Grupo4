import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/SideBar'
import ContentWrapper from './components/ContentWrapper'
import GenresInDb from './components/GenresInDB'
import ContentRowMovies from './components/ContentRowMovies'
import Product from './components/Product'


import './App.css'

function App() {
  return (
    <div id="wrapper">

      {/* <!-- Sidebar --> */}
      <Sidebar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <Routes>
        <Route path="/" element={<ContentWrapper />} />
        <Route path="/usuarios" element={<GenresInDb />} />
        <Route path="/productos" element={<Product />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      {/* <!-- End of Content Wrapper --> */}

    </div>
  )
}

export default App