import React from 'react';

const HeaderNav = ({ showAbout, showPortfolio, showContact, showResume }) => {

    // const nav = document.getElementById("navbar");

    // var lis = nav.getElementsByClassName("navlinks");
    // for (var i = 0; i < lis.length; i++) {
    //     lis[i].addEventListener("click", function () {
    //         var current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active";
    //     });

    return (

        <div>
            <header>
                {/* my name in the header */}
                <h1 className="nameheader">Karina Drummond</h1>

                {/* nav bar links in header */}
                <nav className='navbar'>
                    <ul>
                        <li className='navlinks' onClick={showAbout}>About Me</li>
                        <li className='navlinks' onClick={showPortfolio}>Portfolio</li>
                        <li className='navlinks' onClick={showContact}>Contact</li>
                        <li className='navlinks' onClick={showResume}>Resume</li>
                    </ul>
                </nav>
            </header>

        </div>
    );
};

export default HeaderNav;