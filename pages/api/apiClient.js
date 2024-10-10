// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';

// // Create an Axios instance


// // Function to request a new token
// export const refreshToken = async () => {
//   try {
//     const apiClient = axios.create({
//       baseURL: 'https://api-v2.mycrm.com', // Replace with your API base URL
//     });
    
//    let token = "";

//     const apiKey = 'FjhtK.hBJ8cKhU1A9Z6wTOEx2EuKGMEXk7pOpVTP'; // Replace with your API key
//     const apiSecret = '39445bc128b44dbdb888d74e0408b480'; // Replace with your API secret

//     // Create the Basic auth header
//     const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

//     const response = await axios.post(
//       'https://auth.propertyfinder.com/auth/oauth/v1/token',
//       {
//         scope: 'openid',
//         grant_type: 'client_credentials'
//       },
//       {
//         headers: {
//           'Authorization': `Basic ${credentials}`,
//           'Content-Type': 'application/json'
//         }
//       }
//     );
//     token = response.data.access_token;

//     // Update the .env file
//     const envPath = path.resolve(__dirname, '.env');
//     fs.writeFileSync(envPath, `NEXT_PUBLIC_API_TOKEN=${token}\n`);
//     // console.log('Token refreshed:', token);
//     return token;
//   } catch (error) {
//     console.error('Failed to refresh token:', error.response.data);
//     throw error;
//   }
// };

// // Add a request interceptor to include the token in every request
// apiClient.interceptors.request.use(
//   async (config) => {
//     if (!token) {
//       token = await refreshToken(); // Get the token if not available
//     }
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor to handle token expiration
// apiClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response.status === 401) { // Check if the error is due to unauthorized (token expired)
//       token = await refreshToken(); // Refresh the token
//       error.config.headers.Authorization = `Bearer ${token}`; // Update the request with the new token
//       return apiClient(error.config); // Retry the original request
//     }
//     return Promise.reject(error);
//   }
// );

// export default apiClient;
