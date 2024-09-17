import { useState } from 'react'
import Img from '../assets/images/chairs.jpg'
import '../Css/about.css'
import 'boxicons';
import Context from '../Context/Context';
import Resumes from './Resumes'


const About = () => {
    const { zIn, setZIn } = Context();

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
                    backgroundColor: zIn ? '#1e2735' : '#0f2952' 
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
           <Resumes/>


        </section>
    )
}

export default About