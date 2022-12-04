import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Header from "./components/HeaderNav";
// import Nav from "./components/HeaderNav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const About = () => <div>About</div>;
const Portfolio = () => <div>Portfolio</div>;
const Contact = () => <div>Contact</div>;
const Resume = () => <div>Resume</div>;

function App() {

  // starter code
  // const [pageIndex, setPageIndex] = useState(0);

  return (

    <div className=''>
      <Header>
        <BrowserRouter>
          <Routes>
            <Route path='/about' element={<Resume />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
          </Routes>
        </BrowserRouter>
      </Header>

      <Footer />

    </div>

    // starter code
    // <div>
    //   <Nav
    //     showAbout={() => setPageIndex(0)}
    //     showPortfolio={() => setPageIndex(1)}
    //     showContact={() => setPageIndex(2)}
    //     showResume={() => setPageIndex(3)}
    //   />
    //   {pageIndex === 0 ? (
    //     <About />
    //   ) : pageIndex === 1 ? (
    //     <Portfolio />
    //   ) : pageIndex === 2 ? (
    //     <Contact />
    //   ) : pageIndex === 3 ? (
    //     <Resume />
    //   ) : (
    //     <About />
    //   )}

    //   <Footer />

    // </div>

  );
}

export default App;
