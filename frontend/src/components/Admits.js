import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MentorsMain = () => {
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		slidesToShow: 2,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		arrows: false,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const colleges = [
		{ id: 2, name: 'KJSCE', img: '2.png' },
		{ id: 3, name: 'DJSCE', img: '3.png' },
		{ id: 4, name: 'KJSCE', img: '4.png' },
		{ id: 5, name: 'jsjf', img: '5.png' },
	];

	const renderColleges = () => {
		return colleges.map(college => {
			return (
				<div key={college.id}>
					<img
						src={`assets/college-images/${college.img}`}
						style={{ width: '200px', height: '200px' }}
						alt={college.img}
					/>
				</div>
			);
		});
	};
	return (
		<section id="testimonials" className="testimonials section-bg" style={{ marginTop: '3.85%' }}>
			<div className="container">
				<div className="row">
					<div className="section-title" data-aos="fade-right">
						<h2>Our admits</h2>
						<p>We have mentors from these organizations!</p>
					</div>
				</div>
				<div className="row">
					<Slider {...settings} style={{ width: '100%' }}>
						{renderColleges()}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default MentorsMain;
