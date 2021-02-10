import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogMain = props => {
	const [data, setData] = useState({});
	useEffect(() => {
		async function getBlogs() {
			await fetch(`http://localhost:8000/blog/all`, {
				method: 'POST',
				headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
			})
				.then(res => res.json())
				.then(data => setData(data.data));
		}
		getBlogs();
	}, []);

	const renderCards = () => {
		if (data.map !== undefined)
			return data.map(blog => {
				return (
					<div className="col-lg-6 mb-4" key={blog.blog_id}>
						<Link to={`/blog/${blog.blog_id}`}>
							<div className="member" data-aos="zoom-in" data-aos-delay="100">
								<div className="member-info">
									<h4>{blog.blog_title}</h4>
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
							<h2>Blogs</h2>
							<p>Read some of the best blogs out there!</p>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="row">{renderCards()}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogMain;
