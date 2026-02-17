import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'

function Header() {
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/members">Members</Link></li>
                    <li><Link to="/tools">Tools</Link></li>
                    <li><Link to="/join">Join Us</Link></li>
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