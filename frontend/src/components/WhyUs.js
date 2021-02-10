import React from 'react';

const WhyUs = () => {
	return (
		<>
			<section id="why-us" className="why-us">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
							<div className="content">
								<h3>Finding a mentor is rough.</h3>
								<p>
									With MentorMania, you can get a mentor very easily and very quickly. With our secure
									payments and seamless scheduling, we've got you covered, with Curated Mentors,
									Resume Reviews and Application Reviews. We, at MentorMania, believe that every
									student should have the same quality of education and we try our best to provide it.
								</p>
							</div>
						</div>
						<div className="col-lg-8 d-flex align-items-stretch">
							<div className="icon-boxes d-flex flex-column justify-content-center">
								<div className="row">
									<div
										className="col-xl-4 d-flex align-items-stretch"
										data-aos="zoom-in"
										data-aos-delay="100"
									>
										<div className="icon-box mt-4 mt-xl-0">
											<i className="bx bx-receipt"></i>
											<h4>1. Discover</h4>
											<p>
												We help you discover what actually interests you. Not just that, we
												connect you with a mentor with a wealth of knowledge in your field of
												interest
											</p>
										</div>
									</div>
									<div
										className="col-xl-4 d-flex align-items-stretch"
										data-aos="zoom-in"
										data-aos-delay="200"
									>
										<div className="icon-box mt-4 mt-xl-0">
											<i className="bx bx-cube-alt"></i>
											<h4>2. Connect</h4>
											<p>
												That meaningful relationship won't be delivered to your doorstep. We
												help you step out of your comfort zone and connect with like minded
												people.
											</p>
										</div>
									</div>
									<div
										className="col-xl-4 d-flex align-items-stretch"
										data-aos="zoom-in"
										data-aos-delay="300"
									>
										<div className="icon-box mt-4 mt-xl-0">
											<i className="bx bx-images"></i>
											<h4>3. Grow</h4>
											<p>
												We totally stan a person invested in their personal growth. That is why
												we are here to support you all the way. We'd love you to grow more!
											</p>
										</div>
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

export default WhyUs;
