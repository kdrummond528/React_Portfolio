import React from 'react';
import Project from '../Project';
// import NovelSipsImage from '../../assets/img/novelsips.png';
// import BrewsOnYourBlock from '../../assets/img/boyb.png';
// import WeatherDashboard from '../../assets/img/weatherdash.png';
// import WorkDayScheduler from '../../assets/img/workdaysched.png';
// import PasswordGenerator from '../../assets/img/passgen.png';
// import CodingQuiz from '../../assets/img/codingquiz.png';

export default function Portfolio() {
    const project = [
        {
            name: 'Novel Sips',
            description: 'Provide a short description...',
            id: 'pending',
            link: "https://mmllively.github.io/Novel_Sips/",
            repo: "https://github.com/mmllively/Novel_Sips/",
            img: "novelsips",
        },
        {
            name: 'Brews on your Block',
            description: 'Provide a short description...',
            id: 'pending',
            link: "https://mmllively.github.io/Brews_and_Cruise/",
            repo: "https://github.com/mmllively/Brews_and_Cruise/",
            img: "../../assets/img/boyb.png",
        },
        {
            name: 'Weather Dashboard',
            description: 'Provide a short description...',
            id: 'HTML/CSS/JavaScript/API',
            link: "https://kdrummond528.github.io/Weather-Dashboard/",
            repo: "https://github.com/kdrummond528/Weather-Dashboard/",
            img: "../../assets/img/weatherdash.png",
        },
        {
            name: 'Work Day Scheduler',
            description: 'Provide a short description...',
            id: 'HTML/CSS/JavaScript',
            link: "https://kdrummond528.github.io/Work-Day-Scheduler/",
            repo: "https://github.com/kdrummond528/Work-Day-Scheduler/",
            img: "../../assets/img/workdaysched.png",
        },
        {
            name: 'Password Generator',
            description: 'Provide a short description...',
            id: 'HTML/CSS/JavaScript',
            link: "https://kdrummond528.github.io/Password-Generator/",
            repo: "https://github.com/kdrummond528/Password-Generator/",
            img: "../../assets/img/passgen.png",
        },
        {
            name: 'Coding Quiz',
            description: 'Provide a short description...',
            id: 'HTML/CSS/JavaScript/JQuery',
            link: "https://kdrummond528.github.io/Coding-Quiz/",
            repo: "https://github.com/kdrummond528/Coding-Quiz/",
            img: "../../assets/img/codingquiz.png",
        }
    ];
    return (
        <div className='projectpgcontainer'>
            <h2 className='portfoliopgtitle'
            >Portfolio</h2>

            {project.map((element) => {
                return <Project name={element.name}
                    description={element.description}
                    id={element.id} link={element.link}
                    repo={element.repo} img={element.img}

                // onMouseEnter={() => { console.log("enter the dragon") }} onMouseLeave={() => { console.log("Elvis has left the building") }}

                />
            })}
        </div>
    );
}