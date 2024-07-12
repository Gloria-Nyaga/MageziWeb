
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Podcast';
import Landingpage from "./LandingPage";
import Navbar from "./Navbar";
import Portfolio from './Portfolio';
// import Footer from './Footer';
import Videos from './Videos';

function App() {
  return (
    <Router>

      <div>
        <Navbar/>
       

        <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/podcast" element={<About/>}/>
           <Route path="/videos" element={<Videos />} />
           <Route path='/portfolio' element={<Portfolio/> }/>


        </Routes>
         {/* <Footer/> */}
      </div>

     
    </Router>
  );
}

export default App;

