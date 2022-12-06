import React from 'react';
import { BsCloudDownload } from 'react-icons/bs';
import { DiHtml5, DiCss3, DiJqueryLogo, DiReact, DiNodejsSmall } from 'react-icons/di';
// responsive design icon
import { TbBrandBootstrap, TbApi } from 'react-icons/tb';
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
                <div className='resumedownloadicon'>
                    <a className='resumelink' href='../../assets/docs/KD Resume 2022.docx'>
                        <BsCloudDownload size={'1.25em'} />
                    </a>
                </div>

                <div className='front-end'>
                    <h3 className='proficiencytitles'>Front-end Proficiencies</h3>
                    <li>HTML <DiHtml5 color='gold' /></li>
                    <li>CSS <DiCss3 color='gold' /></li>
                    <li>JavaScript <SiJavascript color='gold' /></li>
                    <li>JQuery <DiJqueryLogo color='gold' /></li>
                    <li>Responsive Design</li>
                    <li>React <DiReact color='gold' /></li>
                    <li>Bootstrap <TbBrandBootstrap color='gold' /></li>
                </div>

                <div className='back-end'>
                    <h3 className='proficiencytitles'>Back-end Proficiencies</h3>
                    <li>APIs</li>
                    <li>Node <DiNodejsSmall color='gold' /></li>
                    <li>Express <SiExpress color='gold' /></li>
                    <li>MySQL <GrMysql color='gold' /> ,
                        Sequelize <SiSequelize color='gold' /></li>
                    <li>MongoDB <SiMongodb color='gold' />, Mongoose</li>
                    <li>REST <TbApi color='gold' /></li>
                    <li>GraphQL <GrGraphQl color='gold' /></li>
                </div>

            </section>



        </div>

    );
};

export default Resume;