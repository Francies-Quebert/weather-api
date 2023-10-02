import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import CityDisplayCard from "./CityDisplayCard";
import { wrapper } from "../../utils/wrapper";

describe("CityDisplayCard", () => {
  it("test that the component renders without crashing", () => {
    render(<CityDisplayCard cityName={"london"} />, { wrapper });
    expect(1).toBe(1);
  });

  it("test that the component renders the loading message when the data is being fetched", () => {
    render(<CityDisplayCard cityName={"london"} />, { wrapper });
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("test that the component renders the error message when the data fetching fails", async () => {
    render(<CityDisplayCard cityName={"londonss"} />, { wrapper });
    const textElement = await screen.findByText("City Not Found");
    expect(textElement).toBeInTheDocument();
  });

  it("test that the component renders the no result message when the data fetching is successful but no data is returned", async () => {
    render(<CityDisplayCard cityName={""} />, { wrapper });
    const textElement = await screen.findByText("Search for a city");
    expect(textElement).toBeInTheDocument();
  });

    it("test that the component renders the card when the data fetching is successful and data is returned", async () => {
        render(<CityDisplayCard cityName={"london"} />, { wrapper });
        const textElement = await screen.findByText("London");
        expect(textElement).toBeInTheDocument();
    });

    it("test that the component renders the card with the correct data", async () => {
        render(<CityDisplayCard cityName={"london"} />, { wrapper });
        const textElement = await screen.findByText("London");
        expect(textElement).toBeInTheDocument();
    });

});
