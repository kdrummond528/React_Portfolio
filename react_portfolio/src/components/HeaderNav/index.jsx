import React from 'react';


const HeaderNav = ({ showAbout, showPortfolio, showContact, showResume, active }) => {
    return (

        <div>
            <header>

                {/* nav bar links in header */}
                <nav className='navbar'>

                    {/* my name in the header */}
                    <h1 className="nameheader">Karina Drummond</h1>

                    <ul>

                        {/* link to about pg */}
                        <li className='navlink'>
                            <p onClick={showAbout} className={active === 0 ? 'navlink active' : 'navlink'} >
                                About Me</p>
                        </li>

                        {/* link to portfolio pg */}
                        <li className='navlink'>
                            <p onClick={showPortfolio} className={active === 1 ? 'navlink active' : 'navlink'}>
                                Portfolio</p>
                        </li>
                        {/* link to contact pg */}
                        <li className='navlink'>
                            <p onClick={showContact} className={active === 2 ? 'navlink active' : 'navlink'}>
                                Contact</p>
                        </li>
                        {/* link to resume pg */}
                        <li className='navlink'>
                            <p href="#resume" onClick={showResume}
                                className={active === 3 ? 'navlink active' : 'navlink'}>
                                Resume</p>
                        </li>
                    </ul>
                </nav>

            </header>
        </div>

    );
};

export default HeaderNav;
