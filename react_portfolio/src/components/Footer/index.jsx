import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (

        <div className='footer'>

            <footer>
                <ul>
                    {/* github */}
                    <li><a href="https://github.com/kdrummond528" target={'_blank'} rel="noreferrer" title="Check out my GitHub!">
                        <FaGithub size={"2em"} /></a>
                    </li>

                    {/* linkedin */}
                    <li><a href="https://www.linkedin.com/in/karinadrummond" target={'_blank'} rel="noreferrer" title="Connect with me on LinkedIn!">
                        <FaLinkedinIn size={"2em"} /></a>
                    </li>

                    {/* stackoverflow */}
                    <li>
                        <a href="https://stackoverflow.com/users/20670765/karina-drummond" target={'_blank'} rel="noreferrer" title='Check out my StackOverflow!'>
                            <FaStackOverflow size={"2em"} /></a>
                    </li>
                </ul>
            </footer>
        </div >

    );
};

export default Footer;