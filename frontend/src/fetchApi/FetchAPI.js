import axios from 'axios'

const BASE_URL=process.env.REACT_APP_BASE_URL

const options = {
    headers: {
      'Content-Type': 'application/json'
    }
};

const LogInApi = async (loginDetails) => {
    try {
        const data = await axios.post(`${BASE_URL}/api/login`, loginDetails)
        return data;
    }
    catch (error) {
        return error.response
    }
}


const RegisterApi = async (registerDetails) => {
    try {
        const data = await axios.post(`${BASE_URL}/api/register`, registerDetails, options)
        return data;
    } 
    catch (error) {
        return error.response;
    }
}


export { LogInApi, RegisterApi };