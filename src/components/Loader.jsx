import '../Css/loader.css'

const Loader = ({display}) => {


    return (
        <div className='loader' style={{display:display}} >
            <div className='first'></div>
            <div className='second'></div>
            <div className='visible'></div>
            <div className='fourth'></div>
            <div className='fifth'></div>
        </div>
    )
}

export default Loader