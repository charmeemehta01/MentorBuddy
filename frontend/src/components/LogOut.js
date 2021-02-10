import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LogOut = props => {
	const history = useHistory();
	useEffect(() => {
		if (props.location.setFlag === undefined) {
			history.push('/404NotFound');
			return;
		}
		localStorage.removeItem('jwt');
		localStorage.removeItem('name');
		localStorage.removeItem('email');
		props.location.setFlag(false);
		setTimeout(history.push('/'), 2000);
	}, [history, props.location]);
	return <></>;
};

export default LogOut;
