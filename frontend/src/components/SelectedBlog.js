import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SelectedBlog = props => {
	const [data, setData] = useState({});
	const history = useHistory();

	useEffect(() => {
		async function getBlog() {
			await fetch(`http://localhost:8000/blog/id/${props.match.params.id}`, {
				method: 'POST',
				headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
			})
				.then(res => res.json())
				.then(obj => {
					if (obj.status === 'success') setData(obj.data[0]);
					if (obj.status === 'no blogs') history.push('/404NotFound');
				});
		}
		getBlog();
	}, [history, props.match.params.id]);

	const renderBlog = () => {
		if (data === {} || data === undefined) return <div style={{ marginTop: '10%' }}>Loading...</div>;
		return (
			<section id="team" className="team" style={{ marginTop: '3.85%' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="section-title" data-aos="fade-right">
								<h2>{data.blog_title}</h2>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="row">
								<img
									src={`${data.blog_img}s3-ap-south-1.amazonaws.com/blogmindler/bloglive/wp-content/uploads/2019/02/28170934/GMAT-vs-GRE-for-an-MBA-Abroad.png`}
									alt={data.blog_title}
									style={{ width: '100%', maxHeight: '600px' }}
								/>
							</div>
							<div className="row pt-3">
								&nbsp;Now that we have our reasons to study abroad, next comes the question of how. Two
								major examinations to assess your performance internationally are:
								<br />
								• GRE – Global Record Examination <br />• GMAT – Graduate Management Admission Test
								<br />
								<br />
								&nbsp;These two examinations will be taken into consideration by universities all over
								the world. The choice of taking which of these examinations is fairly simple. Rather, it
								used to be fairly simple. GMAT, if you want to get into a business school or a get an
								MBA from a University and GRE for all the other courses. Remember, the “used to be
								fairly simple” part? Well, that is because, currently GRE is also considered for the
								admission in B-schools and for courses in management in some of the universities. Back
								to the confusion mode? Don’t worry. We’ll break it down for you.
								<br />
								<br />
								If you have decided to do an MBA or a management related course and do not have a
								technical background, GMAT would be the better option. Otherwise, GRE is preferable as
								GRE gives you access to a varied range post-graduation courses, be it technical or
								non-technical. If a university accepts both the examinations for a course, then make the
								choice based on your skills. GMAT gives higher chances of demonstrating your math skills
								and there is not much scope for vocabulary. If that doesn’t sound like you, you should
								probably choose GRE which has comparatively an easier quant section and verbal sections
								with a higher standard. Another scenario to face a similar situation would be while
								applying to a MS-MBA dual degree. Though a very few colleges provide this degree, it is
								better to go for GRE as GRE is a must to be eligible for MS. This would be the better
								option instead of going through the hardship of taking both the tests.
								<br />
								<br />
								<b>DIFFICULTY LEVELS:</b> Both the exams are computer adaptive. In simple words, the
								level of difficulty of every question is determined by your answer to previous question.
								So, if you answer the question correctly, the next one you get will be tougher, else
								you’ll get an easy question. This, in turn says that you cannot go back to the
								questions, once you have answered them or even skip some questions. GMAT, since it is
								conducted exclusively for the admission into business schools or to pursue a management
								course, has a higher need for the math skillset compared to GRE which focuses more on
								vocabulary and language. Therefore, the difficulty of the exam depends on the
								individual. If someone is pretty comfortable with logical reasoning and arithmetic, GMAT
								might seem easier, while to those with a high proficiency in English would opt to go for
								GRE.
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};
	return renderBlog();
};

export default SelectedBlog;
