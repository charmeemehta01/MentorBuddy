import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/file-upload.css';

const FileUpload = props => {
	const history = useHistory();
	const [selectedFile, setSelectedFile] = useState(null);
	useEffect(() => {
		if (!props.location.state.status) history.push('/404NotFound');
	}, [history, props.location]);
	const onChangeHandler = event => {
		setSelectedFile(event.target.files[0]);
	};
	const onSubmitHandler = async e => {
		if (selectedFile === null) {
			toast.warning("You don't want to send any data. You are being now redirected to the homepage...");
			setTimeout(() => history.push('/'), 4000);
			return;
		}
		const data = new FormData();
		data.append('file', selectedFile);
		await fetch('http://localhost:8000/mentee/sendFile', { method: 'POST', body: data })
			.then(res => res.json())
			.then(data => {
				var filename = data.filename;

				fetch('http://localhost:8000/mentee/sendMail', {
					method: 'POST',
					headers: {
						filename,
						mentor_email: 'blockvotes@gmail.com',
						mentee_email: props.location.state.mentee_email,
					},
				}).then(res => {
					if (res.status === 200) {
						toast.success('File successfully sent to mentor.');
						setTimeout(() => history.push('/'), 5000);
					}
				});
			})
			.catch(err => {});
	};
	return (
		<>
			<section id="contact" className="contact" style={{ marginTop: '3.85%' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
							<div className="section-title">
								<h2>File Upload</h2>
								<p>Just proceed if you don't want to send the file.</p>
							</div>
							<div className="info">
								<i className="icofont-envelope"></i>
								<h4>Upload a file (CV, Resume, Research Paper, etc.).</h4>
								<p>Only images (.JPG, .PNG) and documents (.docx, .ppt, .pdf) are accepted.</p>
								<div className="php-email-form mt-4" encType="multipart/form-data">
									<div className="form-group col-lg-12" style={{ border: '0' }}>
										<div className="form-group files">
											<input type="file" className="form-control" onChange={onChangeHandler} />
										</div>
										<center>
											<button type="submit" onClick={onSubmitHandler}>
												Submit File
											</button>
										</center>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ToastContainer />
		</>
	);
};

export default FileUpload;
