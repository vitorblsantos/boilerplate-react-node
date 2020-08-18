import 'dotenv/config';

export default (() => {
    if(process.env.NODE_ENV === 'production'){
        return 'https://boilerplate-react-node-2020.herokuapp.com/api';
    }
    else {
        return 'http://localhost:5000/api'
    }
})();