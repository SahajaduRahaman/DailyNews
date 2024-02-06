import React from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/complex/Home"
import Politics from "./pages/page/Politics"
import Technology from "./pages/page/Technology"
import Country from "./pages/page/Country"
import World from "./pages/page/World"
import Business from "./pages/page/Business"
import Education from "./pages/page/Education"
import Career from "./pages/page/Career"
import Entertainment from "./pages/page/Entertainment"
import Sports from "./pages/page/Sports"
import Dashboard from "./pages/admin/Dashboard"
import Footer from "./pages/components/Footer"
import Navbar from "./pages/complex/Navbar"
import NewsDetails from './pages/complex/NewsDetails';
import Login from './pages/page/Login';
import Register from './pages/page/Register';
import Profile from "./pages/admin/Profile"
import AddNews from "./pages/admin/AddNews"
import AdminNews from "./pages/admin/AdminNews"
import AdminNewsDetails from './pages/admin/AdminNewsDetails';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/politics' element={<Politics />}/>
          <Route path='/technology' element={<Technology />}/>
          <Route path='/country' element={<Country />}/>
          <Route path='/world' element={<World />}/>
          <Route path='/business' element={<Business />}/>
          <Route path='/education' element={<Education />}/>
          <Route path='/career' element={<Career />}/>
          <Route path='/entertainment' element={<Entertainment />}/>
          <Route path='/sports' element={<Sports />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Profile />}/>
            <Route path='profile' element={<Profile />}/>
            <Route path='addnews' element={<AddNews />}/>
            <Route path='adminnews' element={<AdminNews />}/>
          </Route>
          <Route path='/newsdetails/:id' element={<NewsDetails />}/>
          <Route path='/adminnewsdetails/:id' element={<AdminNewsDetails />}/>
          <Route path='/*' element={<h1>Page Not Found</h1>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
