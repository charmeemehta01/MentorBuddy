import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const AllMentors = props => {
	const [mentorsList, setMentorsList] = useState({});
	const [field, setField] = useState('');
	const history = useHistory();
	useEffect(() => {
		if (localStorage.getItem('jwt') === null) history.push('/');
		getMentors('');
	}, []);
	async function getMentors(field) {
		await fetch(`http://localhost:8000/mentor/getbyfield`, {
			method: 'POST',
			headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`, search: field },
		})
			.then(res => res.json())
			.then(data => {
				if (data.message === 'Invalid') history.push('/');
				console.log(data.data);
				setMentorsList(data.data);
			});
	}
	const renderMentors = () => {
		if (mentorsList.map !== undefined)
			return mentorsList.map(mentor => {
				return (
					<div className="col-lg-6 mb-4" key={mentor.mentor_id}>
						<Link
							to={{
								pathname: `/mentors/${mentor.mentor_id}`,
								query: {
									mentor_email: `${mentor.email}`,
									mentee_email: props.email,
									mentee_name: props.name,
								},
							}}
						>
							<div className="member" data-aos="zoom-in" data-aos-delay="100">
								<div className="pic">
									<img src={mentor.img} style={{ width: '150px', height: '150px' }} alt="" />
								</div>
								<div className="member-info">
									<h4>{mentor.name}</h4>
									<span></span>
								</div>
							</div>
						</Link>
					</div>
				);
			});
	};
	return (
		<section id="team" className="team" style={{ marginTop: '3.85%' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="section-title" data-aos="fade-right">
							<h2>All Mentors</h2>
							<p>Have a look at our mentors, who are some of the industry's best produced!</p>
							<hr />
							Field of study:
							<br />
							<select
								onChange={e => {
									setField(e.target.value);
									getMentors(e.target.value);
								}}
								style={{ width: '100%' }}
							>
								<option value="">All</option>
								<option value="GRE">GRE</option>
								<option value="GMAT">GMAT</option>
							</select>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="row">{renderMentors()}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AllMentors;
