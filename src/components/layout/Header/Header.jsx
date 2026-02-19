import './Header.scss'
import logo from '../../../assets/logo.svg'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    const activeClass = ({ isActive }) => isActive ? "nav_ling nav_link--active" : "nav_link"
    return (
        <header className='header'>
            <nav className='header__nav'>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="nav_links">
                    <ul>
                        <li><NavLink to="/" className={activeClass}>Home</NavLink></li>
                        <li><NavLink to="/about" className={activeClass}>About us</NavLink></li>
                        <li><NavLink to="/gallery" className={activeClass}>Gallery</NavLink></li>
                        <li><NavLink to="/members" className={activeClass}>Members</NavLink></li>
                        <li><NavLink to="/tools" className={activeClass}>Tools</NavLink></li>
                        <li><NavLink to="/join" className={activeClass}>Join Us</NavLink></li>
                    </ul>
                </div>

                <Link to="/contact" className="get_in_touch">
                    Get in touch
                </Link>
            </nav>
        </header>
    )
}

export default Header