import React from 'react';
import { FaGithub } from 'react-icons/fa';
// import NovelSipsImage from '../../assets/images/novelsips.png';

const Portfolio = () => {
    return (

        <div>
            <h2 className='portfoliopgtitle'>Portfolio</h2>

            <div class="projectcards">

                {/* 1st project card - Novel Sips */}
                <div>
                    {/* project img card */}
                    {/* <img className='novelsipsimg' src={NovelSipsImage} alt="Novel Sips Application" /> */}

                    {/* only show these links on hover */}
                    <div className='project-links'>
                        {/* project title with external link to deployed site*/}
                        <a className='projectlink' title="URL to deployed application." target="_blank"
                            href="https://mmllively.github.io/Novel_Sips/">
                            Novel Sips</a>
                        {/* github repo external link */}
                        <a className='githubrepoicon' title="URL to GitHub Repository" target={"_blank"}
                            href="https://github.com/mmllively/Novel_Sips">
                            <FaGithub size={'2.5em'} />
                        </a>
                    </div>

                </div>


                {/* 2nd project card */}
                <div>

                </div>

            </div>
        </div >

    );
};

export default Portfolio;