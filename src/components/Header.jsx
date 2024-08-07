import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import '../Css/header.css'
import Context from '../Context/Context';

const Header = () => {
    const navigate = useNavigate();
    const { hidNavs, setHiddNavs } = Context();
    const location = useLocation()

    

    return (
        <header className="header bg-primary" onClick={(e) => setHiddNavs(e)}>
            <nav className='logo' onClick={() => navigate('')}>
                <h1>PORT<span>FOLIO</span></h1>
            </nav>

            <nav>
                <ul className="show-navs">
                    <li className="navigators">
                        <Link to='' className={`links ${location.pathname === '/'?'active':''}`}>
                            <span className="hid-nav">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className="navigators">
                        <Link to='/about' className={`links ${location.pathname === '/about'?'active':''}`}>
                            <span className="hid-nav">
                                About
                            </span>
                        </Link>
                    </li>
                    <li className="navigators">
                        <Link to='/gallery' className={`links ${location.pathname === '/gallery'?'active':''}`}>
                            <span className="hid-nav">
                                Gallery
                            </span>
                        </Link>
                    </li>
                    <li className="navigators">
                        <Link to='/contacts' className={`links ${location.pathname === '/contacts'?'active':''}`}>
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
                   {hidNavs? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </span>
                <ul className="hid-navs" style={{ display: hidNavs ? 'flex' : 'none' }}>
                    <li className="navigators">
                        <Link to='' className={`links ${location.pathname === '/'?'active':''}`}>
                            <span className="hid-nav">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className="navigators">
                        <Link to='about' className={`links ${location.pathname === '/about'?'active':''}`}>
                            <span className="hid-nav">
                                About
                            </span>
                        </Link>
                    </li>
                    <li className="navigators">
                        <Link to='gallery' className={`links ${location.pathname === '/gallery'?'active':''}`}>
                            <span className="hid-nav">
                                Gallery
                            </span>
                        </Link>
                    </li>
                    <li className="navigators">
                        <Link to='contacts' className={`links ${location.pathname === '/contacts'?'active':''}`}>
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