import '../Css/home.css'

const Home = () => {
    return (
        <section className="homes">
            <div className='headings'>
                <h1 className='home-heading com-h1'>I'm <span className='name'>Anukool</span>, a <span className='WD'>Web Developer</span> </h1>
                <p className='home-desc com-p'>"Welcome to my portfolio! I am Anukool, a passionate web developer with expertise in HTML, CSS, JavaScript, and React on the front end. Let's create something amazing together!"</p>
            </div>

            {/* <div className='profile-pic'>
                <img src="../../assets/Dp.jpg" alt='profile pciture' />
            </div> */}
        </section>
    )
}

export default Home