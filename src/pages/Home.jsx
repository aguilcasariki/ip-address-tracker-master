import { useQuery } from "@tanstack/react-query";
import IpInput from "../components/IpInput/IpInput";
import Map from "../components/Map/Map";
import fetchIpGeoData from "../api/fetchIpGeoData";
import { useState } from "react";
import IpCard from "../components/IpCard/IpCard";

const Home = () => {
  const [ip, setIp] = useState("");

  const { isLoading, data, isError, refetch } = useQuery({
    enabled: false,
    queryKey: ["geoData", ip],
    queryFn: () => fetchIpGeoData(ip),
    refetchOnWindowFocus: false,
  });

  const handleChange = (event) => {
    setIp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    refetch();
  };
  console.log(data.lat);
  const cardData = [
    {
      title: "IP ADDRESS",
      info: data?.query ?? "-",
    },
    {
      title: "LOCATION",
      info: data ? `${data.city}, ${data.region} ${data.zip}` : "-",
    },
    {
      title: "TIMEZONE",
      info: data?.timezone ?? "-",
    },
    {
      title: "ISP",
      info: data?.isp ?? "-",
    },
  ];

  return (
    <div className="h-screen">
      <IpInput handleChange={handleChange} handleSubmit={handleSubmit} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError.message}</p>}
      <IpCard cardData={cardData} />
      <Map center={center} />
    </div>
  );
};

export default Home;
