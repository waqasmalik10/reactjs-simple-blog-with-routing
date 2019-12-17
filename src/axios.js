import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

instance.interceptors.request.use(requestConfig => {
    console.log("requestConfig = ",requestConfig);
    return requestConfig;
}, error => {
    console.log("error in request = ", error);
    Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log("Response = ", response);
    return response;
}, error => {
    console.log("error in response = ", error);
    Promise.reject(error);
});

instance.defaults.headers.common.Authorization = 'AUTH TOKEN FROM INSTANCE';

export default instance;