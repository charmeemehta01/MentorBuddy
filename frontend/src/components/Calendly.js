import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { CalendlyEventListener, InlineWidget } from 'react-calendly';

import 'react-toastify/dist/ReactToastify.css';

const Calendly = props => {
	const history = useHistory();
	const notify = () => {
		toast.success('Event scheduled. Please proceed to upload documents if any.', {
			draggable: true,
		});
	};
	const renderCalendly = () => {
		if (props.location.query) {
			return (
				<>
					<div
						style={{
							margin: '0',
							marginTop: '50px',
							textAlign: 'center',
							width: '50%',
						}}
					>
						<div>
							<span id="calendly-event" />
						</div>
					</div>
					<CalendlyEventListener
						onEventScheduled={async e => {
							await fetch('http://localhost:8000/mentee/session', {
								method: 'POST',
								headers: {
									mentee_id: props.location.query.mentee_email,
									mentor_id: props.location.query.mentor_email,
									Authorization: `Bearer ${localStorage.getItem('jwt')}`,
								},
							})
								.then(res => res.json())
								.then(data => {
									if (data.status === 'success') {
										notify();
										setTimeout(() => {
											history.push('/uploadFile', {
												status: true,
												mentor_email: props.location.query.mentor_email,
												mentee_email: props.location.query.mentee_email,
											});
										}, 5000);
									}
								});
						}}
					>
						<div
							style={{
								height: '110vh',
								minWidth: '320px',
							}}
						>
							<InlineWidget
								url="https://calendly.com/asquaremrocks/30min"
								pageSettings={{ primaryColor: '009970' }}
								prefill={{
									email: props.location.query.mentee_email,
									name: props.location.query.mentee_name,
								}}
								styles={{ height: '100vh' }}
							/>
						</div>
					</CalendlyEventListener>
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</>
			);
		}
		history.push(`/mentors/${props.match.params.id}`);
		return <div></div>;
	};
	return renderCalendly();
};

export default Calendly;
