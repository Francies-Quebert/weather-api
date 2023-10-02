import { render, screen } from "@testing-library/react";
import App from "./App";
import { wrapper } from "./utils/wrapper";


describe("App", () => {

  it("test that the component renders without crashing", () => {
    render(<App />, { wrapper });
    expect(1).toBe(1);
  });

  it("test that the component renders the Display Component", () => {
    render(<App />, { wrapper });
    expect(screen.getByText("Search for a city")).toBeInTheDocument();
  });

  it("test that the component renders the input", () => {
    render(<App />, { wrapper });
    expect(screen.getByPlaceholderText("Search Location")).toBeInTheDocument();
  });


});