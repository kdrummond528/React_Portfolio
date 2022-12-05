import React from 'react';
import HeroImg from '../../assets/img/macbook.png';
// import About from '../About';

const Home = () => {


    return (
        <div className='homepgcontainer'>

            <div className='bgimg'>
                <img src={HeroImg} alt="Picture" />
            </div>

            <div className='bgtext'>
                <h1>Karina Drummond</h1>
                <p>Full-Stack Web Developer</p>
                {/* <button className='enterbtn' onClick={ }>Enter</button> */}
            </div>

        </div>
    );
};

export default Home;