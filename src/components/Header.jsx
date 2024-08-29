import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import '../Css/header.css'
import Context from '../Context/Context';

const Header = () => {
    const navigate = useNavigate();
    const { hidNavs, setHiddNavs, settingloader } = Context();
    const location = useLocation()
    let [header, setHeader] = React.useState('')

    const position = {
        boxShadow: '1px 2px 10px #00000080',
        backgroundColor: '#000000c6'
    }


    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            scrollY > 1 ? setHeader(1) : setHeader(null)
        })
    }, [])
    return (
        <header className="header bg-primary" onClick={(e) => setHiddNavs(e)} style={header ? position : {}} >
            <nav className='logo' onClick={() => navigate('')}>
                <h1>PORT<span>FOLIO</span></h1>
            </nav>

            <nav>
                <ul className="show-navs">
                    <li className="navigators" >
                        <Link className={`links ${location.pathname === '/' ? 'active' : ''}`}
                            onClick={() => { settingloader(); setTimeout(() => navigate(''), 700); }}>
                            <span className="hid-nav">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className="navigators" >
                        <Link onClick={() => { settingloader(); setTimeout(() => navigate('/about'), 700); }}
                            className={`links ${location.pathname === '/about' ? 'active' : ''}`}>
                            <span className="hid-nav">
                                About
                            </span>
                        </Link>
                    </li>
                    <li className="navigators">
                        <Link onClick={() => { setTimeout(() => navigate('/gallery'), 700); settingloader() }}
                            className={`links ${location.pathname === '/gallery' ? 'active' : ''}`}>
                            <span className="hid-nav">
                                Gallery
                            </span>
                        </Link>
                    </li>
                    <li className="navigators">
                        <Link onClick={() => { setTimeout(() => navigate('/contacts'), 700); settingloader() }}
                            className={`links ${location.pathname === '/contacts' ? 'active' : ''}`}>
                            <span className="hid-nav">
                                Contacts
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Ham-bars for small screen size */}
            <nav className="ham">
                <span className="hambar" onClick={(e) => setHiddNavs(e, 'ham')}>
                    <span className='fixSvg'></span>
                    {hidNavs ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </span>
                <ul className="hid-navs" style={{ display: hidNavs ? 'flex' : 'none' }}>
                    <li className="navigators">
                        <Link
                            onClick={() => { settingloader(); setTimeout(() => navigate(''), 1010) }}
                            className={`links ${location.pathname === '/' ? 'active' : ''}`}>
                            <span className="hid-nav">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className="navigators">
                        <Link
                            onClick={() => { settingloader(); setTimeout(() => navigate('/about'), 1010) }}
                            className={`links ${location.pathname === '/about' ? 'active' : ''}`}>
                            <span className="hid-nav">
                                About
                            </span>
                        </Link>
                    </li>
                    <li className="navigators">
                        <Link
                            onClick={() => { settingloader(); setTimeout(() => navigate('/gallery'), 1010) }}
                            className={`links ${location.pathname === '/gallery' ? 'active' : ''}`}>
                            <span className="hid-nav">
                                Gallery
                            </span>
                        </Link>
                    </li>
                    <li className="navigators">
                        <Link
                            onClick={() => { settingloader(); setTimeout(() => navigate('/contacts'), 1010) }}
                            className={`links ${location.pathname === '/contacts' ? 'active' : ''}`}>
                            <span className="hid-nav">
                                Contacts
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header