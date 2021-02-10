import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<footer id="footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-5 col-md-6 footer-contact">
								<h1>MentorMania</h1>
								<h6>
									<br />
									<strong>Phone:</strong> +91 12345 67890
									<br />
									<strong>Email:</strong> mentormania@gmail.com
									<br />
								</h6>
							</div>

							<div className="col-lg-1 col-md-6 footer-links">
								<img src="assets/logo.png" alt="tmb" width={200} height={200} />
							</div>
							<div className="col-lg-3 col-md-6 footer-links"></div>

							<div className="col-lg-2 col-md-6 footer-links" style={{ float: 'right' }}>
								<h4>Useful Links</h4>
								<ul>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#">Home</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#about">About us</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="#services">Services</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <Link to="/blog">Blogs</Link>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <Link to="/team">Our Team</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="container d-md-flex py-4">
					<div className="mr-md-auto text-center text-md-left">
						<div className="copyright">
							Designed by <b>Ansh Mehta, Soham Dave and Shubham Patil</b>
						</div>
					</div>
					<div className="social-links text-center text-md-right pt-3 pt-md-0">
						<a href="#" className="twitter">
							<i className="bx bxl-twitter"></i>
						</a>
						<a href="#" className="facebook">
							<i className="bx bxl-facebook"></i>
						</a>
						<a href="#" className="instagram">
							<i className="bx bxl-instagram"></i>
						</a>
						<a href="#" className="google-plus">
							<i className="bx bxl-skype"></i>
						</a>
						<a href="#" className="linkedin">
							<i className="bx bxl-linkedin"></i>
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
