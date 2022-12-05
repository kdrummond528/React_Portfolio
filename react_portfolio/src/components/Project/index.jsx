import React from 'react';
import { FaGithub } from 'react-icons/fa';
import NovelSipsImage from '../../assets/img/novelsips.png';

export default function Project(props) {
    const cardStyle = {
        width: '18rem',
    };

    // Helper function that generates a random width for our placeholder images
    // const randomWidth = () => {
    //     const number = Math.random() * (300 - 200) + 200;
    //     return number.toString().split('.')[0];
    // };

    return (
        <div>

            <h2 className='portfoliopgtitle'>Portfolio</h2>

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
                        <a href="https://github.com/mmllively/Novel_Sips" className="githubrepoicon">
                            <FaGithub /> {props.name}
                        </a>
                    </div>
                </div>
            </div>

        </div>

    );
};