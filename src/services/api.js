import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_URL;


const apiClient = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    }
});

apiClient.interceptors.request.use(
    config => {
      const token = localStorage.getItem('userToken');
      if (token) {
        // Authorization 헤더에 Bearer 토큰 추가
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
export default {
    getHello(){
        return apiClient.get('/api/hello');
    }
}