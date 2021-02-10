import React, { useState } from 'react';
import LinkedinButton from './LinkedinButton';
import { NavLink } from 'react-router-dom';

const Header = props => {
	const [flag, setFlag] = useState(false);
	const isLoggedIn = () => {
		if (localStorage.getItem('name')) {
			return (
				<>
					<li className="nav-item px-1">
						<span className="nav-link active">
							<NavLink to="/allMentors">
								<span className="text-black">All Mentors</span>
							</NavLink>
						</span>
					</li>
					<li className="nav-item px-1">
						<span className="nav-link active">
							<NavLink to={{ pathname: '/logout', setFlag }}>
								<span className="text-black">Logout</span>
							</NavLink>
						</span>
					</li>
				</>
			);
		}
		return;
	};
	return (
		<>
			<div className="fixed-top">
				<nav className="navbar shadow-lg sticky-top navbar-expand-lg navbar-light bg-white p-2">
					<div className="container">
						<div className="logo mr-auto">
							<h3 className="text-light brandName">
								<NavLink to="/">
									<span>MentorMania</span>
								</NavLink>
							</h3>
						</div>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item px-1">
									<span className="nav-link active">
										<NavLink to="/">
											<span className="text-black">Home</span>
										</NavLink>
									</span>
								</li>
								<li className="nav-item px-1">
									<span className="nav-link">
										<a href="#services">
											<span className="text-black">Services</span>
										</a>
									</span>
								</li>
								<li className="nav-item px-1">
									<span className="nav-link">
										<a href="#mentors">
											<span className="text-black">Mentors</span>
										</a>
									</span>
								</li>

								<li className="nav-item px-1">
									<span className="nav-link">
										<NavLink to="/blog">
											<span className="text-black">Blog</span>
										</NavLink>
									</span>
								</li>
								<li className="nav-item px-1">
									<span className="nav-link">
										<NavLink to="/team">
											<span className="text-black">Team</span>
										</NavLink>
									</span>
								</li>
								{isLoggedIn(0)}
								<li className="nav-item px-1">
									<ul style={{ marginLeft: '-20px' }}>
										<li className="get-start px-3 nav-link" style={{ cursor: 'pointer' }}>
											<LinkedinButton
												userDetails={props.userDetails}
												onSetInfo={props.onSetInfo}
												logIn={setFlag}
												text="Sign in with Linkedin"
											/>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Header;
