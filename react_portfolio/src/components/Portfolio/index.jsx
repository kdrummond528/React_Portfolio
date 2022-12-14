import React from 'react';
import Project from '../Project';
import HauntedHolidays from '../../assets/img/hauntedholidays.png';
import NovelSips from '../../assets/img/novelsips.png';
import BrewsOnYourBlock from '../../assets/img/boyb.png';
import WeatherDashboard from '../../assets/img/weatherdash.png';
import WorkDayScheduler from '../../assets/img/workdaysched.png';
import PasswordGenerator from '../../assets/img/passgen.png';
import CodingQuiz from '../../assets/img/codingquiz.png';

export default function Portfolio() {

    const project = [
        {
            name: 'Haunted Holidays',
            description: 'Provide a short description...',
            id: 'MERN/HTML/CSS/JavaScript',
            link: "https://boiling-ridge-27905.herokuapp.com/",
            repo: "https://github.com/KSoto18/Haunted-Holidays",
            img: HauntedHolidays,
        },
        {
            name: 'Novel Sips',
            description: 'Provide a short description...',
            id: 'HTML/CSS/JavaScript/Node.js/Express/Handlebars',
            link: "https://young-gorge-24694.herokuapp.com",
            repo: "https://github.com/mmllively/Novel_Sips/",
            img: NovelSips,
        },
        {
            name: 'Brews on your Block',
            description: 'Provide a short description...',
            id: 'HTML/CSS/JavaScript/API',
            link: "https://mmllively.github.io/Brews_and_Cruise/",
            repo: "https://github.com/mmllively/Brews_and_Cruise/",
            img: BrewsOnYourBlock,
        },
        {
            name: 'Weather Dashboard',
            description: 'Provide a short description...',
            id: 'HTML/CSS/JavaScript/API',
            link: "https://kdrummond528.github.io/Weather-Dashboard/",
            repo: "https://github.com/kdrummond528/Weather-Dashboard/",
            img: WeatherDashboard,
        },
        {
            name: 'Work Day Scheduler',
            description: 'Provide a short description...',
            id: 'HTML/CSS/JavaScript',
            link: "https://kdrummond528.github.io/Work-Day-Scheduler/",
            repo: "https://github.com/kdrummond528/Work-Day-Scheduler/",
            img: WorkDayScheduler,
        },
        {
            name: 'Password Generator',
            description: 'Provide a short description...',
            id: 'HTML/CSS/JavaScript',
            link: "https://kdrummond528.github.io/Password-Generator/",
            repo: "https://github.com/kdrummond528/Password-Generator/",
            img: PasswordGenerator,
        },
        {
            name: 'Coding Quiz',
            description: 'Provide a short description...',
            id: 'HTML/CSS/JavaScript/JQuery',
            link: "https://kdrummond528.github.io/Coding-Quiz/",
            repo: "https://github.com/kdrummond528/Coding-Quiz/",
            img: CodingQuiz,
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
                />
            })}
        </div>
    );
}