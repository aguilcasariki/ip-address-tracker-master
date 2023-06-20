const fetchIpGeoData = async (ipAddress) => {
  const response = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=dfc96182dd3a4b47868931664896b7ad&ip=${ipAddress}`
  );
  const data = await response.json();
  console.log(data.city);
  return data;
};

export default fetchIpGeoData;
