import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Layout/Header'
import Login from './Components/User/Login'
import Signup from './Components/User/Signup'
import Footer from './Components/Layout/Footer'
import Home from './Components/User/Home'
import AddOrder from './Components/User/AddOrder'
import AddSender from './Components/User/AddSender'
import Dashboard from './Components/Admin/ADMIN/Dashboard'
import Revenue from './Components/Admin/ADMIN/Revenue'
import PageNotFound from './Components/Layout/PageNotFound'
import AddParcel from './Components/User/AddParcel'
import AllUsers from './Components/Admin/ADMIN/AllUsers'
import AllOrders from './Components/Admin/ADMIN/AllOrders'
import SelectDCompany from './Components/User/SelectDCompany'

function App() {
  return (
    <>
   <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addorder' element={<AddOrder/>}/>
        <Route path='/addsender' element={<AddSender />} />
        <Route path='/addparcel' element={<AddParcel />} />
        <Route path='/choose-delivery-company' element={<SelectDCompany />} />
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/revenue' element={<Revenue/>}/>
        <Route path='/admin/allusers' element={<AllUsers />} />
        <Route path='/admin/allorders' element={<AllOrders />} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
