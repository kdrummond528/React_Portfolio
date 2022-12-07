import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Project(props) {
    const [isShown, setIsShown] = useState(false);
    return (

        <div className="projectcardscontainer">

            <div className="projectcard"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <img src={props.img} alt={props.name}
                    className='projectcardimg' />
            </div>
            {isShown && (
                <div className='hoverprojectinfo'>
                    <h2 className='projectlinks'>
                        {/* deployed application link */}
                        <a href={props.link} target="_blank" rel="noreferrer" className="deployedprojectlink">
                            {props.name}</a>

                        {/* github repo link */}
                        <a href={props.repo} target="_blank" rel="noreferrer" className="githubrepoicon">
                            <FaGithub /></a>
                    </h2>

                    {/* project description and info */}
                    <p className="projectinfo">{props.id}</p>
                </div>
            )}

        </div>

    );
};