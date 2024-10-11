import ClientSidebarGrid from "@/components/sections/ClientSidebarGrid";


export default async function SidebarGrid() {
  const fetchProperties = async () => {
    let token = "";
    const apiKey = 'FjhtK.hBJ8cKhU1A9Z6wTOEx2EuKGMEXk7pOpVTP'; // Replace with your API key
    const apiSecret = '39445bc128b44dbdb888d74e0408b480'; // Replace with your API secret

    // Encode the API key and secret in base64
    const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    // Fetching the access token
    const tokenResponse = await fetch('https://auth.propertyfinder.com/auth/oauth/v1/token', {
      next: { revalidate: 1400 },
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        scope: 'openid',
        grant_type: 'client_credentials'
      })
    });

    if (!tokenResponse.ok) {
      throw new Error(`Failed to fetch token: ${tokenResponse.statusText}`);
    }

    const tokenData = await tokenResponse.json();
    token = tokenData.access_token;

    try {
      // Fetching properties using the access token
      const apiUrl = `https://api-v2.mycrm.com/properties?per_page=50`;
      const propertiesResponse = await fetch(apiUrl, {
        next: { revalidate: 3600 },
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!propertiesResponse.ok) {
        throw new Error(`Error fetching properties: ${propertiesResponse.statusText}`);
      }
  
      const propertiesData = await propertiesResponse.json();
      return propertiesData.properties;
    } catch (error) {
      console.error('Error fetching properties:', error.message);
      throw error;
    }
  };
  
  const fetchData = async () => {
    const properties = await fetchProperties();
    return properties;
  };
  

  const data = await fetchData();

  return (
    <ClientSidebarGrid data={data} />
  );
}
