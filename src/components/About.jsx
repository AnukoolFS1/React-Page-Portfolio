import { useState } from 'react'
import Img from '../assets/images/chairs.jpg'
import '../Css/about.css'
import { useNavigate } from 'react-router-dom'


const About = () => {
    let [zIn, setZIn] = useState(false)
    const navigate = useNavigate() 

    function zUp(){ // setting z-index up for about pages
        setZIn(true)
    }

    function zDown(){ // setting z-index down for about pages
        setZIn(false)
    }


    return (
        <section className='abouts'>
                {/** About front page */}
            <div className='heading1' onClick={zDown} 
            style={{
                top: zIn?'200px': '120px', 
                backgroundColor: zIn?'#0f2952':'#1e2735' /*-- setting page animation for changes --*/
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
                zIndex: zIn?3:1, 
                top: zIn?'120px': '200px', 
                backgroundColor: zIn?'#1e2735':'#0f2952' /*-- setting page animation for changes --*/
                }} 
                onClick={zUp}> 
                <h1 className='abt-hding com-h1 ab-h1'>About</h1>
                <p className='com-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis voluptatibus ut odit reprehenderit distinctio doloribus? Doloremque aspernatur necessitatibus, sit perspiciatis maiores cupiditate velit ut deserunt omnis atque quae suscipit alias?</p>
                <button className='Cntct-btn' onClick={()=>navigate('/contacts')}>Contact me</button>

            </div>


        </section>
    )
}

export default About