import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

const data: TWeatherData = {
  location: {
    name: "London",
    country: "United Kingdom",
    localtime: "2021-09-28 22:15",
  },
  current: {
    temp_c: 12,
    condition: {
      code: 1000,
      icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
      text: "Clear",
    },
  },
};

const astro: TAstronomy = {
  astro: {
    sunrise: "06:56 AM",
    sunset: "06:56 PM",
  },
};

describe("Card", () => {
  it("renders a card with the given data", () => {
    render(<Card data={data} astronomy={astro} />);
    expect(screen.getByText("London")).toBeInTheDocument();
    expect(screen.getByText("United Kingdom")).toBeInTheDocument();
    expect(screen.getByText("2021-09-28")).toBeInTheDocument();
    expect(screen.getByText(/22:15 PM/i)).toBeInTheDocument();
    expect(screen.getByText(/12/i)).toBeInTheDocument();
    expect(screen.getByText("o")).toBeInTheDocument();
    expect(screen.getByText("Clear")).toBeInTheDocument();
  });

  it("display sunrise and sunset time", () => {
    render(<Card data={data} astronomy={astro} />);
    expect(screen.getByText(/06:56 AM/i)).toBeInTheDocument();
    expect(screen.getByText(/06:56 PM/i)).toBeInTheDocument();
  });
});
