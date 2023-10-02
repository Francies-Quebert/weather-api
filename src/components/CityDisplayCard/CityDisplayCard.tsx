import React from "react";
import "./CityDisplayCard.css";
import { useQuery } from "react-query";
import axios from "../../utils/axios";
import Card from "../Card/Card";

type Props = {
  cityName: string;
};

function CityDisplayCard({ cityName }: Props) {
  const { error, data, isLoading } = useQuery(`city ${cityName}`, async () => {
    return fetchData();
  });

  async function fetchData() {
    if (cityName) {
      return await Promise.all([
        axios
          .get(`current.json`, { params: { q: cityName, api: "no" } })
          .then((res) => res.data),
        axios
          .get(`astronomy.json`, {
            params: { q: cityName, dt: new Date().toLocaleDateString() },
          })
          .then((res) => res.data.astronomy),
      ]);
    } else return null;
  }

  if (cityName && error) return <div className="card loading-card">City Not Found</div>;
  if (isLoading) return <div className="card loading-card">Loading...</div>;

  if (data) return <Card data={data[0]} astronomy={data[1]} />;

  return (
    <div className="card no_reult_card">
      <h1>Search for a city</h1>
    </div>
  );
}

export default CityDisplayCard;
