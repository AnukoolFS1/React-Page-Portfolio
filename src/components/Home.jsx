import '../Css/home.css'
import Img from '../assets/images/aboutImg.jpg'

const Home = () => {
    return (
        <section className="homes">

            <div className='profile-pic'>
                <img src={Img} alt='profile pciture' style={{ objectPosition: "top" }} />
            </div>
            <div className='headings'>
                <h1 className='home-heading com-h1'>Hi, I'm <span className='name'>Anukool</span>, a <span className='WD'>Web Developer</span> </h1>
                <p className='home-desc com-p'>"Welcome to my portfolio! I am Anukool, a passionate web developer with expertise in HTML, CSS, JavaScript, and React on the front end and expertise in NodeJS, ExpressJS and MongoDB on the back end development. Let's create something amazing together!"</p>
            </div>


        </section>
    )
}

export default Home