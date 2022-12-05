import React from 'react';
import Project from '../Project';


const project = {
    name: 'project',
    description: 'project',
    id: '1',
};

export default function Portfolio() {
    return (
        <div>
            <Project name={project.name}
                description={project.description}
                id={project.id} />
        </div>
    );
}