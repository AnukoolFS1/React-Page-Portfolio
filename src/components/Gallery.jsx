import { useState } from 'react'
import '../Css/gallery.css'
import Context from '../Context/Context'

const Gallery = () => {
    const { images } = Context()
    const [srcc, setSrc] = useState('');


    function mousehover(e){
        setSrc(e.target.src);
    }

    return (
        <section className="galleries" >
            <h1 className='com-h1'>Gallery</h1>
            <p className='com-p'>Check my Projects</p>

            <h3>Projects</h3>
            <article className='projects'>
                <div id='static'>
                    <a href="https://66bf9e99c248989016946bd2--papaya-cannoli-f75b68.netlify.app/" target='_blank'>  Static Web Page  </a>
                    <iframe id='gpPage' src="https://66bf9e99c248989016946bd2--papaya-cannoli-f75b68.netlify.app/" frameBorder="0" height='650px' width='700px'></iframe>
                </div>
                <div id='calc'>
                    <a href="https://kaleidoscopic-halva-853976.netlify.app/"> Calculator </a>
                    <iframe src="https://kaleidoscopic-halva-853976.netlify.app/" frameBorder="0" height='650px' width='700px'></iframe>
                </div>
                <div id='pokeApp'>
                    <a href="https://pokeapicardsapp.netlify.app"> Pokemon Cards App </a>
                    <iframe src="https://pokeapicardsapp.netlify.app" frameBorder="0" height='650px' width='700px'></iframe>
                </div>
            </article>

            {/* <article className='hall-picture'>
                <h1>Move cursor to an image</h1>
                <img src={srcc} alt="" className='hall-fame' style={{display:srcc?'block':'none'}}/>
            </article>
            <article className='images'>
                {images?.map((e, i) => {
                    return (<img src={e.img} key={i} onClick={mousehover} />)
                })}
            </article> */}
        </section>)
}

export default Gallery