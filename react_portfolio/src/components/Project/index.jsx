import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Project(props) {

    return (

        <div className="projectcardscontainer">

            <div className="projectcard">

                <h2 className='projectlinks'>
                    {/* deployed application link */}
                    <a href={props.link} className="deployedprojectlink">
                        {props.name}</a>

                    {/* github repo link */}
                    <a href={props.repo} className="githubrepoicon">
                        <FaGithub /></a>
                </h2>

                <img src={props.img} alt={props.name} />

                {/* project description and info */}
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.id}</p>

            </div>

            {/* <h1 onMouseEnter={() => { console.log("enter the dragon") }} onMouseLeave={() => { console.log("Elvis has left the building") }}>hello</h1> */}

        </div >

    );
};