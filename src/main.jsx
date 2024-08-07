import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Routings, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import Provider from './Context/Provider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <Routings>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </Routings>
  </Provider>
  ,
)
