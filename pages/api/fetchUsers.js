// import fetch from 'node-fetch';
// import axios from 'axios';

// let apiToken = ''; // Initialize empty token
// let tokenExpiration = 0; // Initialize token expiration time


// export default async function handler(req, res) {
//     try {
//       const response = await axios.get('https://api-v2.mycrm.com/users', {
//         headers: {
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
//         }
//       });
  
//       res.status(200).json(response.data.users);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }