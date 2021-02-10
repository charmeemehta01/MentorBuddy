import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const SelectedMentor = props => {
	const [data, setData] = useState({});
	const history = useHistory();
	useEffect(() => {
		async function getMentor() {
			if (localStorage.getItem('jwt') === null) history.push('/404NotFound');
			await fetch(`http://localhost:8000/mentor/id/${props.match.params.id}`, {
				method: 'POST',
				headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
			})
				.then(res => res.json())
				.then(obj => {
					if (obj.message === 'invalid') history.push('/');
					if (obj.status === 'no users') history.push('/404NotFound');
					if (obj.status === 'success') setData(obj.data[0]);
				});
		}
		getMentor();
	}, [history, props.match.params.id]);

	const paymentHandler = async p => {
		let orderId;
		await fetch(`http://localhost:8000/mentee/create_order`, {
			method: 'POST',
			headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`, amount: data.price },
		})
			.then(res => res.json())
			.then(data => (orderId = data.orderId));

		const options = {
			key: 'rzp_test_NP9EZJoKZOJMZD',
			name: 'MentorMania',
			description: 'Session Booking',
			order_id: orderId,
			prefill: {
				email: localStorage.getItem('email'),
			},
			handler: response => {
				try {
					toast.success('Transaction completed successfully!', { autoClose: 1300 });
					setTimeout(
						() =>
							history.push({
								pathname: `/mentors/${data.mentor_id}/bookSession`,
								query: {
									mentor_email: 'abc@abc.co',
									mentee_email: localStorage.getItem('email'),
									mentee_name: localStorage.getItem('name'),
								},
							}),
						3000
					);
				} catch (err) {
					console.log(err);
				}
				/*
					to={{
											pathname: `/mentors/${data.mentor_id}/bookSession`,
											query: {
												mentor_email: 'abc@abc.co' ,
												mentee_email: localStorage.getItem('email'),
												mentee_name: localStorage.getItem('name'),
											},
										}}
				*/
			},
			theme: {
				color: '#009970',
			},
		};
		const rzp1 = new window.Razorpay(options, (err, ab) => {
			err ? console.log(err) : console.log(ab);
		});
		rzp1.open();
	};

	const renderMentor = () => {
		if (data === {} || data === undefined) return <div style={{ marginTop: '10%' }}>Loading...</div>;
		return (
			<section id="team" className="team" style={{ marginTop: '3.85%' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="section-title" data-aos="fade-right">
								<div className="card" style={{ border: 0 }}>
									<img src={data.img} alt={data.name} style={{ maxHeight: '300px' }} />
								</div>
								<br />
								<h2>{data.name}</h2>

								<div className="get-start px-3 nav-link">
									<a onClick={paymentHandler} style={{ color: 'white', width: '10%' }}>
										Book a session!
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-7 ml-3">
							<div className="row" style={{ marginBottom: '-10px' }}>
								<p>
									Work Experience: <b>{data.work_exp}</b>
								</p>
							</div>
							<div className="row" style={{ marginBottom: '-10px' }}>
								<p>
									Work Place: <b>{data.workplace}</b>
								</p>
							</div>
							<div className="row" style={{ marginBottom: '-10px' }}>
								<p>
									Field of Study: <b>{data.field}</b>
								</p>
							</div>
							<div className="row" style={{ marginBottom: '-10px' }}>
								<p>
									Price: <b>{data.price}</b>
								</p>
							</div>
							<hr />
							<div className="row" style={{ marginBottom: '-10px' }}>
								<p>Reach me out at:</p>
							</div>
							<div className="row">
								<b>Email:</b>&nbsp;<a href="mailto:blockvotes@gmail.com"> {data.email}</a>
							</div>
							<div className="row">
								<b>Phone no:</b>&nbsp; <a href="tel:+917977848244">+91 {data.contactno}</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};
	return (
		<div>
			{renderMentor()}
			<ToastContainer />
		</div>
	);
};

export default SelectedMentor;
