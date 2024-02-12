import {Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ProductInfo from '../pages/ProductInfo'
import Header from '../components/Header/Header'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<Header/>}>
            <Route index element={<HomePage />}/>
            <Route path="/product/:id" element={<ProductInfo />}/>
            <Route path="*" element={<h1>404 page</h1>}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes