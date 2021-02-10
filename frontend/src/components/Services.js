import React from 'react';

const Services = () => {
	return (
		<>
			<section id="services" className="services section-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="section-title" data-aos="fade-right">
								<h2>Services</h2>
								<p>Content around our services/motives</p>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="row">
								<div className="col-md-6 d-flex align-items-stretch">
									<div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
										<div className="icon">
											<i className="bx bxl-dribbble"></i>
										</div>
										<h4>Exam Preparation</h4>
										<p>Don't worry about your exams, we've got you covered!</p>
									</div>
								</div>

								<div className="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
									<div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
										<div className="icon">
											<i className="bx bx-file"></i>
										</div>
										<h4>Application Reviews</h4>
										<p>We will guide you to the path of success, confirmed!</p>
									</div>
								</div>

								<div className="col-md-6 d-flex align-items-stretch mt-4">
									<div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
										<div className="icon">
											<i className="bx bx-tachometer"></i>
										</div>
										<h4>Resume Review</h4>
										<p>Get a job at Google confirmed by applying here!</p>
									</div>
								</div>

								<div className="col-md-6 d-flex align-items-stretch mt-4">
									<div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
										<div className="icon">
											<i className="bx bx-world"></i>
										</div>
										<h4>Research Paper Review</h4>
										<p>Publish your paper in the top journals with the guidance of our mentors!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
