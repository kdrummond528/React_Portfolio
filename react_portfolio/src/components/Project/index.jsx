import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Project(element) {
    const [isShown, setIsShown] = useState(false);
    return (

        <div className="projectcardscontainer">

            <div className="projectcard"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <img src={element.img} alt={element.name}
                    className='projectcardimg' />
            </div>
            {isShown && (
                <div className='hoverprojectinfo'>
                    <h2 className='projectlinks'>
                        {/* deployed application link */}
                        <a href={element.link} target="_blank" rel="noreferrer" className="deployedprojectlink">
                            {element.name}</a>

                        {/* github repo link */}
                        <a href={element.repo} target="_blank" rel="noreferrer" className="githubrepoicon">
                            <FaGithub /></a>
                    </h2>

                    {/* project description and info */}
                    <p className="projectinfo">{element.id}</p>
                </div>
            )}

        </div>

    );
};