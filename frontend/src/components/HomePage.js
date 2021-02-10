import React, { useState } from 'react';
import LinkedinButton from './LinkedinButton';
import Services from './Services';
import WhyUs from './WhyUs';
import MentorShow from './MentorShow';
import Admits from './Admits';

const HomePage = props => {
	const [flag, setFlag] = useState(false);

	return (
		<>
			<section id="hero" className="d-flex align-items-center">
				<div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
					<h1>
						Let's walk together path to <br />
						your dream school!
					</h1>
					<h2></h2>
					<a className="btn-get-started scrollto">
						<LinkedinButton
							userDetails={props.userDetails}
							onSetInfo={props.onSetInfo}
							logIn={setFlag}
							text="Sign in to book a session!"
						/>
					</a>
				</div>
			</section>
			<section id="about" className="about">
				<div className="container">
					<div className="row content">
						<div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
							<h2>MentorMania</h2>
							<h3>Let's walk together path to your dream school!</h3>
						</div>
						<div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
							<p>
								Quite often than not, students face a scarcity of available resources and people to
								reach out to while applying for their higher studies. There's a plethora of study
								materials to refer to but limited hours to study.
							</p>
							<ul>
								<li>
									<i className="ri-check-double-line"></i> <h6>Which resource should I target?</h6>
								</li>
								<li>
									<i className="ri-check-double-line"></i>
									<h6>Does my CV actually portray my true capabilities?</h6>
								</li>
								<li>
									<i className="ri-check-double-line"></i>
									<h6>How do I know if I am approaching my essays right?</h6>
								</li>
							</ul>
							<p className="font-italic">
								We'll be your buddy, mentoring you through each checkpoint on your path to your dream
								school.
							</p>
						</div>
					</div>
				</div>
			</section>
			<Services />
			<WhyUs />
			<Admits />
			<MentorShow />
		</>
	);
};

export default HomePage;
