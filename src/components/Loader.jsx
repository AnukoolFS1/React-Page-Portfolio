import '../Css/loader.css'

const Loader = ({ display }) => {


    return (
        <div className='loaderedge' style={{display:display}}>
            <div className='hider'>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader