import { useState } from "react";
import CityDisplayCard from "./components/CityDisplayCard/CityDisplayCard";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const [activeCity, setActiveCity] = useState<string>("");

    // function to handle the form submit
    function onSearchSubmit(city: string) {
      setActiveCity(city)
    }

    
  return (
    <div className="App">
      {/* Search Form */}
      <SearchForm
        onSearchSubmit={onSearchSubmit}
      />

      {/* Display Card */}
      <div className="display__card">
        <CityDisplayCard cityName={activeCity} />
      </div>
    </div>
  );
}

export default App;
