import { render } from "@testing-library/react";
import SearchInput from "./SearchInput";
import userEvent from "@testing-library/user-event";

const dataList = [
  {
    name: "London",
    value: "London",
  },
  {
    name: "Mumbai",
    value: "Mumbai",
  },
];

describe("SearchInput", () => {
  it("renders a text input with a placeholder of 'Search Location'", () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="Search Location"
        autoFocus={true}
        dataList={dataList}
        onListClick={(val) => {
          console.log(val);
        }}
      />
    );
    expect(getByPlaceholderText("Search Location")).toBeInTheDocument();
  });

  it("on change, the input value should be updated using key board event", async () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="Search Location"
        autoFocus={true}
        dataList={dataList}
        onListClick={(val) => {
          console.log(val);
        }}
      />
    );
    const input = getByPlaceholderText("Search Location");
    await userEvent.type(input, "London");
    expect(input).toHaveValue("London");
  });

  it("to find london and mumbai in the list", async () => {
    const { getByText } = render(
      <SearchInput
        placeholder="Search Location"
        autoFocus={true}
        dataList={dataList}
        onListClick={(val) => {
          console.log(val);
        }}
      />
    );
    const london = getByText("London");
    expect(london).toBeInTheDocument();
    const mumbai = getByText("Mumbai");
    expect(mumbai).toBeInTheDocument();
  });
});
