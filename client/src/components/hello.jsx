import React, { useEffect, useState } from 'react';
import 'dotenv/config';
import Axios from 'axios';

import apiUrl from '../constants/apiUrl';

const Hello = () => {
	const [message, setMessage] = useState('');
	useEffect(() => {
		Axios.get(`${apiUrl}`).then(({data}) => setMessage(data));
	}, []);
	return <h1>{message}</h1>;
};


export default Hello;