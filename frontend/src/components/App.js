import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import ScrollToTop from 'react-scroll-to-top';
import AOS from 'aos';

//CSS imports
import '../assets/vendor/icofont/icofont.min.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/remixicon/remixicon.css';
import '../assets/vendor/venobox/venobox.css';
import '../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../assets/vendor/aos/aos.css';
import '../assets/css/style.css';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const HomePage = lazy(() => import('./HomePage'));
const Services = lazy(() => import('./Services'));
const BlogMain = lazy(() => import('./BlogMain'));
const SelectedBlog = lazy(() => import('./SelectedBlog'));
const Team = lazy(() => import('./Team'));
const SelectedMentor = lazy(() => import('./SelectedMentor'));
const Calendly = lazy(() => import('./Calendly'));
const AllMentors = lazy(() => import('./AllMentors'));
const FileUpload = lazy(() => import('./FileUpload'));
const NotFound = lazy(() => import('./NotFound'));
const LogOut = lazy(() => import('./LogOut'));

const App = () => {
	const [details, setDetails] = useState({});
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');

	useEffect(() => {
		AOS.init();
	}, []);
	const setInfo = (email, name) => {
		setDetails({ email, name });
		setEmail(email);
		setName(name);
	};
	const renderLoader = () => (
		<div className="d-flex justify-content-center" data-aos="fade-out">
			<div className="spinner-border" role="status" style={{ marginTop: '50vh' }}>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
	return (
		<>
			<ScrollToTop
				smooth
				component={
					<i
						className="bx bx-chevron-up"
						style={{ color: '#009970', fontSize: '25px', marginTop: '5px' }}
					></i>
				}
			/>
			<Suspense fallback={renderLoader()}>
				<BrowserRouter>
					<Header onSetInfo={setInfo} userDetails={details} />
					<Switch>
						<Route path="/" exact>
							<HomePage onSetInfo={setInfo} userDetails={details} />
						</Route>
						<Route path="/linkedin" exact component={LinkedInPopUp} />
						<Route path="/allMentors" exact>
							<AllMentors email={email} name={name} />
						</Route>
						<Route path="/services" exact component={Services} />
						<Route path="/blog" exact component={BlogMain} />
						<Route path="/blog/:id" exact component={SelectedBlog} />
						<Route path="/mentors/:id" exact component={SelectedMentor} />
						<Route path="/mentors/:id/bookSession" exact component={Calendly} />
						<Route path="/team" exact component={Team} />
						<Route path="/logout" exact component={LogOut} />
						<Route path="/uploadFile" exact component={FileUpload} />
						<Route path="/404NotFound" exact component={NotFound} />
						<Redirect to="/404NotFound" />
					</Switch>
					<Footer />
				</BrowserRouter>
			</Suspense>
		</>
	);
};

export default App;
