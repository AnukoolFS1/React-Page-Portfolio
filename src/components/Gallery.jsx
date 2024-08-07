import '../Css/gallery.css'
import Context from '../Context/Context'

const Gallery = () => {
    const {images} = Context()

    return (
    <section className="galleries" >
        <h1 className='com-h1'>Gallery</h1>
        <p className='com-p'>Check all the Images</p>

        <article className='images'>
            {images?.map((e,i)=>{
               return (<img src={e.img} key={i} />)
            })}
        </article>
    </section>)
}

export default Gallery