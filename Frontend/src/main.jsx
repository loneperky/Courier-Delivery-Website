import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './pages/homePage'
import Service from './pages/SignUp'
import TrackPage from './pages/trackPage'
import ContactPage from './pages/ContactPage'
import About from './pages/About'
import Signup from './pages/SignUp'
import Pricing from './pages/pricing'
import Login from './pages/Login'
import Forgot from './pages/forgot'
import ErrorPage from './pages/404'
import Dashboard from './pages/dashboard'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/service'element={<Service />}/>
          <Route path='/Tracking' element={<TrackPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/about-us' element={<About />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/pricing-plans' element={<Pricing />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/forgot-password' element={<Forgot />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/*' element={<ErrorPage />}/>
          <Route path='/forgot-password' element={<Forgot />}/>

        </Routes>
    </Router>
    
  
  </React.StrictMode>,
)
