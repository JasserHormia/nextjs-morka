import axios from 'axios';

const fetchProperties = async () => {

  let token = "";
  const apiKey = 'FjhtK.hBJ8cKhU1A9Z6wTOEx2EuKGMEXk7pOpVTP'; // Replace with your API key
  const apiSecret = '39445bc128b44dbdb888d74e0408b480'; // Replace with your API secret

  const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

  const response = await axios.post(
    'https://auth.propertyfinder.com/auth/oauth/v1/token',
    {
      scope: 'openid',
      grant_type: 'client_credentials'
    },
    {
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json'
      }
    }
  );
  token = response.data.access_token;

  try {
    
    const apiUrl = 'https://api-v2.mycrm.com/properties';
    const response = await axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data.properties;
  } catch (error) {
    console.error('Error fetching properties:', error.message);
    throw error;
  }
};

export default async function handler(req, res) {
  try {
    const properties = await fetchProperties();
    console.log("naaaaayek");
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
