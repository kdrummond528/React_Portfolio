import React from 'react';
import { FaGithub } from 'react-icons/fa';
import NovelSipsImage from '../../assets/img/novelsips.png';

export default function Project(props) {
    const cardStyle = {
        width: '18rem',
    };

    // const { name, repo, link, description } = project;


    return (
        <div>

            <div className="projectcardscontainer">

                <div className="card" style={cardStyle}>
                    <img
                        className="projectcardimg"
                        src={NovelSipsImage}
                        alt="Project Card"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Name: {props.name}</h5>
                        <p className="card-text">Description: {props.description}</p>
                        <p className="card-text">ID: {props.id}</p>
                        <a href={props.repo} className="githubrepoicon">
                            <FaGithub /> {props.name}
                        </a>
                    </div>
                </div>
            </div>

            <h1 onMouseEnter={() => { console.log("enter the dragon") }} onMouseLeave={() => { console.log("Elvis has left the building") }}>hello</h1>

        </div>

    );
};