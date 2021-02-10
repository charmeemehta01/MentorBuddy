import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div
			className="container"
			style={window.screen.width < 500 ? { marginTop: '15%' } : { marginTop: '7%', marginBottom: '9.5%' }}
		>
			<h1 data-aos="zoom-in" data-aos-delay="100">
				404 - Page Not Found.
			</h1>
			<h6 data-aos="zoom-in" data-aos-delay="100">
				The page you have requested is not found.
			</h6>
			<div className="get-start nav-link" style={{ maxWidth: '400px' }}>
				<Link to="/" data-aos="zoom-in" data-aos-delay="300" style={{ color: 'white' }}>
					Click here to go to the homepage.
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
