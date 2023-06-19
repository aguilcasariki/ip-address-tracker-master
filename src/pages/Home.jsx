import { useQuery } from "@tanstack/react-query";
import IpInput from "../components/IpInput/IpInput";
import Map from "../components/Map/Map";
import fetchIpGeoData from "../api/fetchIpGeoData";
import { useState } from "react";
import IpCard from "../components/IpCard/IpCard";
import useTimezoneConvert from "../hooks/useTimezoneConvert";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [ip, setIp] = useState("");

  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ["geoData", ip],
    queryFn: () => fetchIpGeoData(ip),
    refetchOnWindowFocus: false,
  });

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIp(inputValue.trim());
    refetch();
  };
  const timezones = useTimezoneConvert(data?.timezone);
  const center = data ? [data.lat, data.lon] : [34.0648, -118.086];
  const cardData = [
    {
      title: "IP ADDRESS",
      info: data?.query ?? "Loading...",
    },
    {
      title: "LOCATION",
      info: data
        ? `${data.city},${data.region} 
      ${data.zip}`
        : "Loading...",
    },
    {
      title: "TIMEZONE",
      info: timezones
        ? `${timezones[0]}/
      ${timezones[1]}`
        : "Loading...",
    },
    {
      title: "ISP",
      info: data?.isp ?? "Loading...",
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center">
      <IpInput handleChange={handleChange} handleSubmit={handleSubmit} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError.message}</p>}
      <IpCard cardData={cardData} />
      <Map position={center} />
    </div>
  );
};

export default Home;
