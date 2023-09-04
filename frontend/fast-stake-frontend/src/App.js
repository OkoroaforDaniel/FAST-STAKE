import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Ads from './Components/Ads/Ads';
import Match from './Components/Match/Match';
import Profile from './Components/Profile/Profile';
import Filter from './Components/Filter/Filter';
import Chat from './Components/Chat/Chat';
import OpenAds from './Components/Ads/OpenAds/OpenAds';
import PostAds from './Components/Ads/PostAds/PostAds';
import Processing from './Components/Processing/Processing';
import Appeal from './Components/Appeal/Appeal';
import ChessAd from './Components/Ads/ChessAd';
import FifaAd from './Components/Ads/FifaAd';
import CodAds from './Components/Ads/CodAds';
import About from './Components/About';
import Login from './Components/Login';
import Register from './Components/Register';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {

  const location = useLocation();

  const hideNavbarAndFooterInPaths = ['/Chat', '/OpenAds', '/PostAds', '/Processing', '/Appeal', '/Register', '/About', '/Contact', '/Login', '/Services'];
  const shouldShowNavbarAndFooter = !hideNavbarAndFooterInPaths.includes(location.pathname);

  return (
    <>
        {shouldShowNavbarAndFooter && <Navbar />}
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path="/Profile"  element={<Profile />} ></Route>
            <Route path='/Ads' element={<Ads />}></Route>
            <Route path='/OpenAds' element={<OpenAds />}></Route>
            <Route path='/Match' element={<Match />}></Route>
            <Route path='/Filter' element={<Filter />}></Route>
            <Route path='/Chat' element={<Chat />}></Route>
            <Route path='/PostAds' element={<PostAds />}></Route>
            <Route path='/Processing' element={<Processing />}></Route>
            <Route path='/Appeal' element={<Appeal />}></Route>
            <Route path='/ChessAd' element={<ChessAd />}></Route>
            <Route path='/FifaAd' element={<FifaAd />}></Route>
            <Route path='/CodAds' element={<CodAds />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Services' element={<Services />}></Route>
        </Routes>
        {shouldShowNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
