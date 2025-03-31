import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Your backend API base URL
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    },
});

// Request interceptor to log the request details
axiosInstance.interceptors.request.use((request) => {
    console.log('Request URL:', request.url);  // Log the URL
    console.log('Request Method:', request.method);  // Log the request method (GET, POST, etc.)
    console.log('Request Headers:', request.headers);  // Log headers if needed
    return request;
}, (error) => {
    return Promise.reject(error);
});

export const getUser = async () => {
    try {
        const response = await axiosInstance.get(`/user`);
        console.log(response);
        return response.data; // Return the user data if successful
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // Rethrow the error so it can be caught elsewhere
    }
};

export const getNewReleasedBooks = async () => {
    try{
        const response = await axiosInstance.get(`/books/getNewReleasedBooks`);
        console.log(response);
        return response.data;
    }catch(error){
        console.error("Error fetching books data: ",error);
        throw error;
    }
}

export default axiosInstance;
