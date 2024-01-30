import axios from 'axios'

const BASE_URL=process.env.REACT_APP_BASE_URL


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
    const options = {
        headers: {
          'Content-Type': 'application/json',
        }
    };

    try {
        const data = await axios.post(`${BASE_URL}/api/register`, registerDetails, options)
        return data;
    } 
    catch (error) {
        return error.response;
    }
}

const AddNewsApi = async (news) => {
    const options = {
        headers: {
          'Content-Type': 'application/json',
          'authToken': localStorage.getItem("authToken")
        }
    };

    try {
        const data = await axios.post(`${BASE_URL}/api/post-news`, news, options)
        return data;
    } 
    catch (error) {
        return error.response;
    }
}

const GetAdminNewsApi = async () => {
    const options = {
        headers: {
          'Content-Type': 'application/json',
          'authToken': localStorage.getItem("authToken")
        }
    };

    try {
        const data = await axios.get(`${BASE_URL}/api/get-admin-news`, options)
        return data;
    } 
    catch (error) {
        return error.response;
    }
}

const GetNewsByIDApi = async (id) => {
    try {
        const data = await axios.get(`${BASE_URL}/api/get-news-by-id/${id}`)
        return data;
    } 
    catch (error) {
        return error.response;
    }
}


export { LogInApi, RegisterApi, AddNewsApi, GetAdminNewsApi, GetNewsByIDApi };