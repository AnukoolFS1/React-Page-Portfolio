import Img from '../assets/images/aboutImg.jpg'
import '../Css/about.css'
import 'boxicons';
import Context from '../Context/Context';
import Resumes from './Resumes'
import { Link } from 'react-router-dom';


const About = () => {
    const { zIn, setZIn } = Context();

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
                    backgroundColor: zIn ? '#1e2735' : '#0f2952'
                }}>
                <div className='abt-cntnt1'>
                    <h1 className='abt-hding com-h1 ab-h1' style={{ textAlign: zIn ? "right" : 'left' }}>About</h1>
                    <h2>An Aspiring Web Developer.</h2>
                    <p className='abt-p'>Hi, I'm Anukool, a passionate web developer specializing in front-end and back-end development. With a solid foundation in HTML, CSS, JavaScript, ReactJS, Node.js, Express.js, and MongoDB, I enjoy building dynamic websites that provide a seamless user experience.</p>
                </div>
                <article className='abt-cntnt2'>
                    <img src={Img} alt="img" style={{ objectFit: 'cover' }} />
                    <div>
                        <div>
                            <h2>Skills</h2>
                            <p className='ab-p'>My expertise includes building responsive websites using <strong>HTML, CSS,</strong> and <strong>JavaScript</strong> frameworks like <strong>ReactJS</strong>. On the back-end, I work with <strong>Node.js, Express.js,</strong> and <strong>MongoDB</strong> to develop functional applications. I also have experience with <strong>Git</strong> for version control and deployment workflows using platforms like Netlify</p>
                        </div>
                        <div className='projects'>
                            <h2 className=''>Projects</h2>
                            <ul>
                                <li> <a href="https://66bf9e99c248989016946bd2--papaya-cannoli-f75b68.netlify.app/"> Static Web Page </a> </li>
                                <li> <a href="https://kaleidoscopic-halva-853976.netlify.app/"> Calculator </a> </li>
                                <li> <a href="https://pokeapicardsapp.netlify.app"> Pokemon Cards App </a> </li>
                                <li> <a href="https://github.com/AnukoolFS1/my-todo-app"> ToDo list (github Link) </a> </li>
                                <li> <a href="https://github.com/AnukoolFS1/Dashboard"> Dashboard (github Link) </a> </li>
                            </ul>
                            <Link className='linkToGallery' to={'/gallery'}> Check out my Gallery</Link>
                        </div>
                    </div>
                </article>
                <article style={{color:'white', fontFamily:'system-ui'}}>
                    <h2>Call to Action</h2>
                    <p>I'm always excited about collaborating on interesting projects. Feel free to get in touch if you're looking for a developer who is eager to bring your ideas to life!</p>
                </article>
            </div>

            {/** About rear page */}
            <Resumes />


        </section>
    )
}

export default About