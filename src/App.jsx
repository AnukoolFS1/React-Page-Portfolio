import { Outlet } from 'react-router-dom';
import './Css/global.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Context from './Context/Context';
import Loader from './components/Loader';

const App = () => {
    const {setHiddNavs, loader} = Context()

    return (
        <>
            <Header />
            <section className='main bg-light' onClick={(e)=>setHiddNavs(e)} >
                <Outlet />
            </section>
            <Footer />
            <Loader display={loader}/>
        </>
    )
}

export default App