import React, { useEffect, useState } from 'react';
import Axios from 'axios';


const Hello = () => {
	const [message, setMessage] = useState('');
	useEffect(() => {
		Axios.get('http://localhost:5000/api').then(({data}) => setMessage(data));
	}, [])
	return <h1>{message}</h1>;
};


export default Hello;