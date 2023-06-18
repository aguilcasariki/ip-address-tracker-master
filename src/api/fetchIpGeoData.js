const fetchIpGeoData = async (ipAddress) => {
  const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
  const data = await response.json();
  console.log(data.city);
  return data;
};

export default fetchIpGeoData;
