import React from 'react';
import Project from '../Project';

// const [currentPage] = useState(pages[0]);
const project = useState([
    {
        name: 'Novel Sips',
        description: 'enter what was used here...',
        id: 'do i even need this?',
        link: "",
        repo: "",
    },
    {
        name: 'Brews on your Block',
        description: 'enter what was used here...',
        id: 'do i even need this?',
        link: "https://mmllively.github.io/Brews_and_Cruise/",
        repo: "https://github.com/mmllively/Brews_and_Cruise/",
    },
    {
        name: 'Weather Dashboard',
        description: 'enter what was used here...',
        id: 'do i even need this?',
        link: "https://kdrummond528.github.io/Weather-Dashboard/",
        repo: "https://github.com/kdrummond528/Weather-Dashboard/",
    },
    {
        name: 'Work Day Scheduler',
        description: 'enter what was used here...',
        id: 'do i even need this?',
        link: "https://kdrummond528.github.io/Work-Day-Scheduler/",
        repo: "https://github.com/kdrummond528/Work-Day-Scheduler/",
    },
    {
        name: 'Password Generator',
        description: 'enter what was used here...',
        id: 'do i even need this?',
        link: "https://kdrummond528.github.io/Password-Generator/",
        repo: "https://github.com/kdrummond528/Password-Generator/",
    },
    {
        name: 'Coding Quiz',
        description: 'enter what was used here...',
        id: 'do i even need this?',
        link: "https://kdrummond528.github.io/Coding-Quiz/",
        repo: "https://github.com/kdrummond528/Coding-Quiz/",
    }
]);

export default function Portfolio() {
    return (
        <div>
            <Project name={project.name}
                description={project.description}
                id={project.id} />
        </div>
    );
}