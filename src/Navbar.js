import React, { useState } from 'react';
import logo from './assets/logo6.jpeg';
import './Navbar.css';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img src={logo} alt="Nesta Consult Limited logo" className="navbar-img" />
				<div className="navbar-title-wrapper">
					<span className="navbar-title">Nesta Consult Limited.</span>
					<span className="navbar-subtitle">Renewed Hope</span>
				</div>
			</div>
			<button
				className={menuOpen ? 'navbar-hamburger open' : 'navbar-hamburger'}
				onClick={() => setMenuOpen((open) => !open)}
				aria-label="Toggle menu"
			>
				<span className={menuOpen ? 'bar open' : 'bar'}></span>
				<span className={menuOpen ? 'bar open' : 'bar'}></span>
				<span className={menuOpen ? 'bar open' : 'bar'}></span>
			</button>
			<ul className={menuOpen ? 'navbar-menu open' : 'navbar-menu'}>
				<li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
				<li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
				<li><a href="#services" onClick={() => setMenuOpen(false)}>Our Services</a></li>
				<li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact us</a></li>
				<li><a href="#appointment" className="navbar-cta" onClick={() => setMenuOpen(false)}>Book appointment</a></li>
			</ul>
		</nav>
	);
};

export default Navbar;
