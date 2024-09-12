import React from 'react';
import '../Css/about.css';
import { useNavigate, Link } from 'react-router-dom';
import 'boxicons';
import Context from '../Context/Context';

const Resume: React.FC = (): JSX.Element => {

    const { zIn, setZIn }: { zIn: boolean, setZIn: (a: boolean) => any } = Context();

    const Skills: { title: string, skill: string[] }[] = [
        {
            title: 'Frontend Development',
            skill: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'ReactJS']
        },
        {
            title: 'Version Control',
            skill: ['Git', 'Github']
        }
    ]

    const navigate = useNavigate()

    function zUp(): any { // setting z-index up for about pages
        setZIn(true)
    }

    return (<>
        <div className='heading2'
            style={{
                zIndex: zIn ? 3 : 1,
                top: zIn ? '120px' : '200px',
                left: zIn ? '10vw' : '',
                backgroundColor: zIn ? '#0f2952' : '#1e2735' /*-- setting page animation for changes --*/
            }}
            onClick={zUp}>
            <h1 className='abt-hding com-h1 ab-h1' style={{ fontSize: zIn ? '' : '2rem' }}>Resume</h1>
            <h1 className='title'>Anukool Singh Chauhan</h1>
            <h2>Frontend Developer</h2>
            <article className='details'>
                <p>Fatehpur Beri,</p>
                <p>New Delhi - 74</p>
                <p><strong>9560095435</strong></p>
                <p><strong>anukool26@outlool.com</strong></p>
            </article>
            <section className='table' style={{ display: zIn ? 'flex' : 'none' }}>
                <section className='col1'>
                    <article>
                        <h3>Experience</h3>
                        <p>Fresher</p>
                    </article>
                    <article>
                        <h3>Education</h3>
                        <div>
                            <p>Sarvodya Bal Vidyalaya, <span>Fatehpur Beri</span></p>
                            <h4>10<sup>th</sup> Class <span>~ Apr 2013 - Mar 2014</span></h4>
                        </div>
                        <div>
                            <p>Dice Academy, <span>Shiekh Sarai</span></p>
                            <h4>Full Stack Development <span>~ Dec 2023 - Present</span></h4>
                        </div>
                    </article>
                    <article className='portfolio'>
                        <h3 onClick={() => navigate('/gallery')}>Projects</h3>
                        <Link to={'/'}>Portfolio</Link>
                        <Link to={'/gallery#static'}>Static Web Page</Link>
                        <Link to={'/gallery#calc'}>Calculator</Link>
                    </article>
                    <article className='online-presence'>
                        <h3>Online Presence</h3>
                        <a href="https://www.linkedin.com/in/anukool-singh-chauhan-993480219"><span className='linkedin'><box-icon type='logo' name='linkedin' color='#ccff00'></box-icon></span>LinkedIn</a>
                        <a href="https://github.com/AnukoolFS1/"><span></span>Github</a>
                    </article>
                </section>
                <section className='col2'>
                    <article>
                        <h3>Skills</h3>
                        {
                            Skills.map((e: any, i: number): JSX.Element => {
                                return (
                                    <div key={i}>
                                        <p>{e.title}</p>
                                        {e.skill.map((skill: any, j: number): JSX.Element => {
                                            return (
                                                <React.Fragment key={j}>
                                                    <h4>{skill}</h4>
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>
                                );
                            })
                        }

                    </article>
                    <article>
                        <h3>Languages</h3>
                        <h4>English, Hindi</h4>
                    </article>
                </section>
            </section>
            <button className='Cntct-btn' onClick={() => navigate('/contacts')}>Download PDF</button>

        </div>
    </>)
}


export default Resume;