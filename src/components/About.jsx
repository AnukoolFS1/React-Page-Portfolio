import { useState } from 'react'
import Img from '../assets/images/chairs.jpg'
import '../Css/about.css'
import { useNavigate, Link } from 'react-router-dom'
import 'boxicons'


const About = () => {
    let [zIn, setZIn] = useState(false)
    const navigate = useNavigate()

    function zUp() { // setting z-index up for about pages
        setZIn(true)
    }

    function zDown() { // setting z-index down for about pages
        setZIn(false)
    }


    return (
        <section className='abouts'>
            {/** About front page */}
            <div className='heading1' onClick={zDown}
                style={{
                    top: zIn ? '200px' : '120px',
                    right: zIn ? '10vw' : '',
                    backgroundColor: zIn ? '#1e2735' : '#0f2952' /*-- setting page animation for changes --*/
                }}>
                <div className='abt-cntnt1'>
                    <h1 className='abt-hding com-h1 ab-h1'>About</h1>
                    <p className='com-p ab-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, facilis? Voluptate possimus voluptas quasi excepturi at maiores fuga laudantium esse sit nam, deserunt incidunt delectus expedita. Ex velit unde exercitationem.</p>
                </div>
                <article className='abt-cntnt2'>
                    <img src={Img} alt="img" />
                    <div>
                        <h2>
                            An Aspiring Web Developer.
                        </h2>
                        <p className='ab-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sint!</p>
                        <p className='ab-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias, natus nam tempora nesciunt similique libero quaerat architecto voluptate magnam?</p>
                    </div>
                </article>
            </div>

            {/** About rear page */}
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
                            <a href="https://github.com/AnukoolFS1/"><span><box-icon type='logo' name='github' color='#ccff00'></box-icon></span>Github</a>
                        </article>
                    </section>
                    <section className='col2'>
                        <article>
                            <h3>Skills</h3>
                            <p>Frontend Development</p>
                            <h4>
                                <span><box-icon type='logo' name='html5' color='#ccff00'></box-icon></span> HTML
                            </h4>
                            <h4>
                                <span><box-icon name='css3' type='logo' color='#ccff00' ></box-icon></span> CSS
                            </h4>
                            <h4>
                                <span><box-icon name='javascript' type='logo' color='#ccff00'></box-icon></span> JavaScript </h4>
                            <h4>
                                <span><box-icon type='logo' name='bootstrap' color='#ccff00'></box-icon></span> Bootstrap
                            </h4>
                            <h4>
                                <span><box-icon name='devices' color='#ccff00'></box-icon></span> Responsive
                            </h4>
                            <h4>
                                <span><box-icon name='react' type='logo' color='#ccff00'></box-icon></span> ReactJS
                            </h4>
                            <p>Version Control</p>
                            <h4>
                                <span><box-icon name='git' type='logo' color='#ccff00'></box-icon></span> Git
                            </h4>
                            <h4>
                                <span><box-icon name='github' type='logo' color='#ccff00'></box-icon></span> Github
                            </h4>
                        </article>
                        <article>
                            <h3>Languages</h3>
                            <h4>English, Hindi</h4>
                        </article>
                    </section>
                </section>
                <button className='Cntct-btn' onClick={() => navigate('/contacts')}>Download PDF</button>

            </div>


        </section>
    )
}

export default About