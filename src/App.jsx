import { Outlet } from 'react-router-dom';
import './Css/global.css'
import bgImg from '../src/assets/images/sunset.jpg'
import Header from './components/Header';
import Footer from './components/Footer';
import Context from './Context/Context';

const App = () => {
    const {setHiddNavs} = Context()

    return (
        <>
            <Header />
            <section className='main bg-light' onClick={(e)=>setHiddNavs(e)} >
                <Outlet />
            </section>
            <Footer />
        </>
    )
}

export default App