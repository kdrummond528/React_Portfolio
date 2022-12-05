import React from 'react';
import HeroImg from '../../assets/img/macbook.png';

const Home = ({ showAbout }) => {

    return (
        <div className='homepgcontainer'>

            <div className='bgimg'>
                <img src={HeroImg} alt="Karina Drummond Picture" />
            </div>

            <div className='bgtext'>
                <h1>Karina Drummond</h1>
                <p>Full-Stack Web Developer</p>
                <button className='enterbtn' onClick={showAbout}>Enter</button>
            </div>

        </div>
    );
};

export default Home;

    //  <div className='bgimg'>
    //             <img src={HeroImg} alt="Karina Drummond Picture" />
    //         </div>

    //         <div className='bgtext'>
    //             <h1>Karina Drummond</h1>
    //             <p>Full-Stack Web Developer</p>
    //             <button className='enterbtn' onClick={showAbout}>Enter</button>
    //         </div>