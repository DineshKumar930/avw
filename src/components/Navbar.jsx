// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Home, LayoutGrid, Image, Star, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.nav-links') && !e.target.closest('.menu-btn')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/services', label: 'Services', icon: LayoutGrid },
    { path: '/gallery', label: 'Gallery', icon: Image },
    { path: '/reviews', label: 'Reviews', icon: Star },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="AV Wooden Craft" />
        </Link>

        <button 
          className={`menu-btn ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li className="mobile-header">
            <div className="mobile-logo">
              
              <span></span>
            </div>
            <button className="close-menu" onClick={closeMenu}>
          
            </button>
          </li>
          
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                <item.icon size={20} className="nav-icon" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
          
          <li className="mobile-cta">
            <Link to="/contact" className="mobile-contact-btn" onClick={closeMenu}>
              Get Free Estimate
            </Link>
          </li>
          
          <li className="mobile-footer">
            <p>© 2024 AV Wooden Craft</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;