import React, { useRef } from 'react';
import Slider from 'react-slick';

const MentorShow = () => {
	var slider = useRef();
	const settings = {
		dots: false,
		slidesToShow: 3,
		infinite: true,
		speed: 200,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					swipeToSlide: true,
					centerMode: true,
					className: 'center',
					centerPadding: '60px',
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					swipeToSlide: true,
				},
			},
		],
	};
	const next = () => slider.slickNext();
	const previous = () => slider.slickPrev();
	return (
		<section id="testimonials" className="testimonials section-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="section-title" data-aos="fade-right">
							<h2>Mentors</h2>
							<p>Have a look at our best mentors!</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
						<Slider ref={c => (slider = c)} {...settings}>
							<div className="card card-home">
								<center>
									<img
										src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
										width="200"
										height="200"
									/>
									<h1>Ansh</h1>
								</center>
							</div>

							<div className="card card-home">
								<center>
									<img
										src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
										width="200"
										height="200"
									/>
									<h1>Soham</h1>
								</center>
							</div>

							<div className="card card-home">
								<center>
									<img
										src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
										width="200"
										height="200"
									/>
									<h1>Shubham</h1>
								</center>
							</div>

							<div className="card card-home">
								<center>
									<img
										src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
										width="200"
										height="200"
									/>
									<h1>Janvi</h1>
								</center>
							</div>

							<div className="card card-home">
								<center>
									<img
										src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
										width="200"
										height="200"
									/>
									<h1>Kavish</h1>
								</center>
							</div>
						</Slider>
						<div style={{ textAlign: 'center', marginTop: '40px' }}>
							<button className="btn" onClick={previous}>
								<i className="bx bx-chevron-left"></i>
							</button>
							&nbsp;
							<button className="btn" onClick={next}>
								<i className="bx bx-chevron-right"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MentorShow;
