import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.scss';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function closeMenu() {
        setIsOpen(false);
    }
    return (
        <header className="navbar">
          <div className="navbar__container">

            <Link to="/" className="navbar__logo">
                MG<span>FITMAN</span>
                <small> ONLINE FITNESS COACHING</small>
            </Link>

            <button
            className="navbar__toggle"
            type="button"
            aria-label={isOpen ? 'Zavřít menu' : 'Otevřít menu'}
             aria-expanded="main-navigation"
             onClick={() => setIsOpen(!isOpen)}
             >
                <span></span>
                <span></span>
                <span></span>
             </button>

            <nav
              id="main-navigation"
            className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`} 
                aria-label="Hlavní navigace"
                >
                <Link to="/">Úvod</Link>
                <Link to="/services">Moje služby</Link>
                <Link to="/results">Výsledky</Link>
                <Link to="/about">Něco o mně</Link>
                <Link to="/contact">Kde mě najdeš</Link>
            </nav>

            <Link 
               to="/spoluprace"
               className="navbar__button"
               onClick={closeMenu}
               >
                NEVÁHEJ A ŠVÍSKEJ!!! 
            </Link>
          </div>
        </header>
    );
}

export default Navbar;