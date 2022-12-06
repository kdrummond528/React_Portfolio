import React from 'react';


const HeaderNav = ({ showAbout, showPortfolio, showContact, showResume }) => {

    return (

        <div>
            <header>
                {/* my name in the header */}
                <h1 className="nameheader">Karina Drummond</h1>

                {/* nav bar links in header */}
                <nav className='navbar'>
                    <ul>
                        <li className='navlink' onClick={showAbout}>About Me</li>
                        <li className='navlink' onClick={showPortfolio}>Portfolio</li>
                        <li className='navlink' onClick={showContact}>Contact</li>
                        <li className='navlink' onClick={showResume}>Resume</li>
                    </ul>
                </nav>
            </header>

        </div>

    );
};

export default HeaderNav;



// const HeaderNav = ({ pageIndex, showAbout, showPortfolio, showContact, showResume }) => {

//     return (

//         <div>
//             <header>
//                 {/* my name in the header */}
//                 <h1 className="nameheader">Karina Drummond</h1>

//                 {/* nav bar links in header */}
//                 <nav className='navbar'>
//                     <ul>

//                         {/* link to about pg */}
//                         <li className='navlink'>
//                             <p onClick={showAbout} activeClassName='activenavlink' >
//                                 About Me</p>
//                         </li>

//                         {/* link to portfolio pg */}
//                         <li className='navlink'>
//                             <p onClick={showPortfolio} className={pageIndex === '1' ? 'navlink active' : 'navlink'}>
//                                 Portfolio</p>
//                         </li>
//                         {/* link to contact pg */}
//                         <li className='navlink'>
//                             <p onClick={showContact} className={pageIndex === '2' ? 'navlink active' : 'navlink'}>
//                                 Contact</p>
//                         </li>
//                         {/* link to resume pg */}
//                         <li className='navlink'>
//                             <p href="#resume" onClick={showResume}
//                                 className={pageIndex === '3' ? 'navlink active' : 'navlink'}>
//                                 Resume</p>
//                         </li>
//                     </ul>
//                 </nav>

//             </header>
//         </div>