import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Header() {
	return (
		<>
		<nav className="navbar navbar-dark bg-dark">
		    <li className="nav-link">
				<Link to="/" className="nav-link" activeClassName="btn btn-primary">
					Refresh
				</Link>
			</li>
			<li className="nav-link">
				<Link to="/menu" className="nav-link" activeClassName="btn btn-primary">
					Sidebar
				</Link>
			</li>
			<li className="nav-link">
				<Link to="/dashboard" className="nav-link" activeClassName="btn btn-primary">
					Dashboard
				</Link>
			</li>
			<li className="nav-link">
				<Link to="/projects" className="nav-link" activeClassName="btn btn-primary">
					My Projects
				</Link>
			</li>
			<li className="nav-link">
				<Link to="/topics" className="nav-link" activeClassName="btn btn-primary">
					My Topics
				</Link>
			</li>
			<li className="nav-link">
				<NavLink to="/about" className="nav-link" activeClassName="btn btn-primary">
					About
				</NavLink>
			</li>
			<li className="nav-link">
				<NavLink to="/contact" className="nav-link" activeClassName="btn btn-primary">
					Contact Us
				</NavLink>
			</li>
			<li className="nav-link">
				<Link to="/login" className="nav-link" activeClassName="btn btn-primary">
					Login
				</Link>
			</li>
			<li className="nav-link">
				<Link to="/logout" onClick={()=>localStorage.clear} className="nav-link" activeClassName="btn btn-primary">
					Logout
				</Link>
			</li>
		</nav>
		</>
	)
}

export default Header;