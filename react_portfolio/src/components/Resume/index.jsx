import React from 'react';
import { BsCloudDownload } from 'react-icons/bs';
import { DiHtml5, DiCss3, DiJqueryLogo, DiReact, DiNodejsSmall } from 'react-icons/di';
// responsive design icon
import { TbBrandBootstrap, TbApi } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiSequelize, SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
// mongoose icon
// rest icon
import { GrGraphQl } from 'react-icons/gr';

const Resume = () => {
    return (

        <div>
            <h2 className='resumepgtitle'>Resume</h2>

            <section className='resumeinfo'>
                <p>Download my resume</p>
                <div className='resumedownloadicon'><a className='resumelink' href=''> <BsCloudDownload size={'1.25em'} /></a></div>

                <div className='front-end'>
                    <h3 className='proficiencytitles'>Front-end Proficiencies</h3>
                    <li>HTML <DiHtml5 color='rgb(178, 124, 229)' /></li>
                    <li>CSS <DiCss3 color='rgb(178, 124, 229)' /></li>
                    <li>JavaScript <SiJavascript color='rgb(178, 124, 229)' /></li>
                    <li>JQuery <DiJqueryLogo color='rgb(178, 124, 229)' /></li>
                    <li>Responsive Design</li>
                    <li>React <DiReact color='rgb(178, 124, 229)' /></li>
                    <li>Bootstrap <TbBrandBootstrap color='rgb(178, 124, 229)' /></li>
                </div>

                <div className='back-end'>
                    <h3 className='proficiencytitles'>Back-end Proficiencies</h3>
                    <li>APIs</li>
                    <li>Node <DiNodejsSmall color='rgb(178, 124, 229)' /></li>
                    <li>Express <SiExpress color='rgb(178, 124, 229)' /></li>
                    <li>MySQL <GrMysql color='rgb(178, 124, 229)' /> ,
                        Sequelize <SiSequelize color='rgb(178, 124, 229)' /></li>
                    <li>MongoDB <SiMongodb color='rgb(178, 124, 229)' />, Mongoose</li>
                    <li>REST <TbApi color='rgb(178, 124, 229)' /></li>
                    <li>GraphQL <GrGraphQl color='rgb(178, 124, 229)' /></li>
                </div>

            </section>
        </div>

    );
};

export default Resume;