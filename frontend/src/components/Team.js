import React from 'react';

const Team = props => {
	return (
		<section id="portfolio" className="portfolio" style={{ marginTop: '3.85%' }}>
			<div className="container">
				<div className="section-title" data-aos="fade-left">
					<h2>Team</h2>
					<p>Here's the team behind MentorMania!</p>
				</div>

				<div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
					<div className="col-lg-4 col-md-6 portfolio-item filter-app">
						<div className="portfolio-wrap">
							<img src="assets/avatar.png" className="img-fluid" alt="" />
							<div className="portfolio-info">
								<h4>Ansh Mehta</h4>
								<p>Front-end Web Developer</p>
								<div className="portfolio-links">
									<a
										href="assets/avatar.png"
										data-gall="portfolioGallery"
										className="venobox"
										title="App 1"
									>
										<i className="bx bx-plus"></i>
									</a>
									<a href="portfolio-details.html" title="More Details">
										<i className="bx bx-link"></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-web">
						<div className="portfolio-wrap">
							<img src="assets/avatar.png" className="img-fluid" alt="" />
							<div className="portfolio-info">
								<h4>Soham Dave</h4>
								<p>Front-end Web Developer</p>
								<div className="portfolio-links">
									<a
										href="assets/avatar.png"
										data-gall="portfolioGallery"
										className="venobox"
										title="Web 3"
									>
										<i className="bx bx-plus"></i>
									</a>
									<a href="portfolio-details.html" title="More Details">
										<i className="bx bx-link"></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-app">
						<div className="portfolio-wrap">
							<img src="assets/avatar.png" className="img-fluid" alt="" />
							<div className="portfolio-info">
								<h4>Shubham Patil</h4>
								<p>Back-end Developer</p>
								<div className="portfolio-links">
									<a
										href="assets/avatar.png"
										data-gall="portfolioGallery"
										className="venobox"
										title="App 2"
									>
										<i className="bx bx-plus"></i>
									</a>
									<a href="portfolio-details.html" title="More Details">
										<i className="bx bx-link"></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-card">
						<div className="portfolio-wrap">
							<img src="assets/avatar.png" className="img-fluid" alt="" />
							<div className="portfolio-info">
								<h4>Card 2</h4>
								<p>Card</p>
								<div className="portfolio-links">
									<a
										href="assets/avatar.png"
										data-gall="portfolioGallery"
										className="venobox"
										title="Card 2"
									>
										<i className="bx bx-plus"></i>
									</a>
									<a href="portfolio-details.html" title="More Details">
										<i className="bx bx-link"></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-web">
						<div className="portfolio-wrap">
							<img src="assets/avatar.png" className="img-fluid" alt="" />
							<div className="portfolio-info">
								<h4>Web 2</h4>
								<p>Web</p>
								<div className="portfolio-links">
									<a
										href="assets/avatar.png"
										data-gall="portfolioGallery"
										className="venobox"
										title="Web 2"
									>
										<i className="bx bx-plus"></i>
									</a>
									<a href="portfolio-details.html" title="More Details">
										<i className="bx bx-link"></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-app">
						<div className="portfolio-wrap">
							<img src="assets/avatar.png" className="img-fluid" alt="" />
							<div className="portfolio-info">
								<h4>App 3</h4>
								<p>App</p>
								<div className="portfolio-links">
									<a
										href="assets/avatar.png"
										data-gall="portfolioGallery"
										className="venobox"
										title="App 3"
									>
										<i className="bx bx-plus"></i>
									</a>
									<a href="portfolio-details.html" title="More Details">
										<i className="bx bx-link"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
