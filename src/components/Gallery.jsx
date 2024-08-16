import '../Css/gallery.css'
import Context from '../Context/Context'

const Gallery = () => {
    const { images } = Context()

    return (
        <section className="galleries" >
            <h1 className='com-h1'>Gallery</h1>
            <p className='com-p'>Check all the Images</p>

            <h3>Projects</h3>
            <article className='projects'>
                <div>
                    <a href="https://66bf9e99c248989016946bd2--papaya-cannoli-f75b68.netlify.app/" target='_blank'>  Static Web Page  </a>
                        <iframe id='gpPage' src="../src/BootstrapMadeGP/index.html" frameborder="0" height='700px' width='700px'></iframe>
                </div>
                <div>
                    <label> Calculator </label>
                    <iframe src="https://kaleidoscopic-halva-853976.netlify.app/" frameborder="0" height='700px' width='700px'></iframe>
                </div>
            </article>


            <article className='images'>
                {images?.map((e, i) => {
                    return (<img src={e.img} key={i} />)
                })}
            </article>


        </section>)
}

export default Gallery