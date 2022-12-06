import React from 'react';
import { useState } from 'react';
import './App.css';
import Nav from "./components/HeaderNav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
// import Home from './components/Home';

// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// const About = () => <div>About</div>;
// const Portfolio = () => <div>Portfolio</div>;
// const Contact = () => <div>Contact</div>;
// const Resume = () => <div>Resume</div>;

function App() {

  // starter code
  const [pageIndex, setPageIndex] = useState(0);

  return (

    // starter code for nav bar
    <div>

      <Nav
        showAbout={() => setPageIndex(0)}
        showPortfolio={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
        showResume={() => setPageIndex(3)}
        active={pageIndex}
      // showHome={() => setPageIndex(0)}
      // showAbout={() => setPageIndex(1)}
      // showPortfolio={() => setPageIndex(2)}
      // showContact={() => setPageIndex(3)}
      // showResume={() => setPageIndex(4)}
      />
      {pageIndex === 0 ? (
        <About />
      ) : pageIndex === 1 ? (
        <Portfolio />
      ) : pageIndex === 2 ? (
        <Contact />
      ) : pageIndex === 3 ? (
        <Resume />
      ) : (
        <About />
      )}

      {/* {pageIndex === 0 ? (
        <Home />
      ) : pageIndex === 1 ? (
        <About />
      ) : pageIndex === 2 ? (
        <Portfolio />
      ) : pageIndex === 3 ? (
        <Contact />
      ) : pageIndex === 4 ? (
        <Resume />
      ) : (
        <Home />
      )} */}

      < Footer />

    </div >



    // code to get nav bar links active for which pg youre currently on

    // <div className=''>
    //   {/* <Header> */}
    //   <BrowserRouter>
    //     <div className='nav-bar'>

    //       <NavLink
    //         to="about"
    //         style={({ isActive }) => ({
    //           color: isActive ? '#fff' : '#545e6f',
    //           background: isActive ? '#7600dc' : '#f0f0f0',
    //         })}>About Me
    //       </NavLink>

    //       <NavLink
    //         to="about"
    //         style={({ isActive }) => ({
    //           color: isActive ? '#fff' : '#545e6f',
    //           background: isActive ? '#7600dc' : '#f0f0f0',
    //         })}>Portfolio
    //       </NavLink>

    //       <NavLink
    //         to="about"
    //         style={({ isActive }) => ({
    //           color: isActive ? '#fff' : '#545e6f',
    //           background: isActive ? '#7600dc' : '#f0f0f0',
    //         })}>Contact
    //       </NavLink>

    //       <NavLink
    //         to="about"
    //         style={({ isActive }) => ({
    //           color: isActive ? '#fff' : '#545e6f',
    //           background: isActive ? '#7600dc' : '#f0f0f0',
    //         })}>Resume
    //       </NavLink>

    //     </div>

    //     <Routes>
    //       <Route path='/about' element={<About />}></Route>
    //       <Route path='/portfolio' element={<Portfolio />}></Route>
    //       <Route path='/contact' element={<Contact />}></Route>
    //       <Route path='/resume' element={<Resume />}></Route>
    //     </Routes>

    //   </BrowserRouter>
    // </Header>

  );
}

export default App;
