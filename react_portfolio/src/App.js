import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Header from "./components/HeaderNav";
import Nav from "./components/HeaderNav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

// const About = () => <div>About</div>;
// const Portfolio = () => <div>Portfolio</div>;
// const Contact = () => <div>Contact</div>;
// const Resume = () => <div>Resume</div>;

function App() {

  // starter code
  const [pageIndex, setPageIndex] = useState(0);

  return (

    <div className=''>
      <Header>
        <BrowserRouter>
          <div className='nav-bar'>

            <NavLink
              to="about"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}>About Me
            </NavLink>

            <NavLink
              to="about"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}>Portfolio
            </NavLink>

            <NavLink
              to="about"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}>Contact
            </NavLink>

            <NavLink
              to="about"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
              })}>Resume
            </NavLink>

          </div>

          <Routes>
            <Route path='/about' element={<About />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
          </Routes>

        </BrowserRouter>
      </Header>

      <Nav
        showAbout={() => setPageIndex(0)}
        showPortfolio={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
        showResume={() => setPageIndex(3)}
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

      <Footer />

    </div >

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
