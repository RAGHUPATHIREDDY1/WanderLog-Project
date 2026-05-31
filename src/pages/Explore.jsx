import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import FilterTabs from "../components/FilterTabs";
import CountryCard from "../components/CountryCard";

import { getAllCountries } from "../api/countries";

import "./Explore.css";

function Explore() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries();

        data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(
    (country) => {
      const searchMatch =
        country.name.common
          .toLowerCase()
          .includes(search.toLowerCase());

      const regionMatch =
        selectedRegion === "All"
          ? true
          : country.region === selectedRegion;

      return searchMatch && regionMatch;
    }
  );

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        showSearch={true}
      />

      <div className="explore-container">
        <div className="hero-section">
          <h1>Discover Your Next Adventure 🌍</h1>

          <p>
            Search countries, explore details,
            and build your dream travel bucket list.
          </p>
        </div>

        <div className="stats-banner">
          <div className="stat-box">
            <h3>{countries.length}</h3>
            <p>Total Countries</p>
          </div>

          <div className="stat-box">
            <h3>{filteredCountries.length}</h3>
            <p>Search Results</p>
          </div>

          <div className="stat-box">
            <h3>{selectedRegion}</h3>
            <p>Current Region</p>
          </div>
        </div>

        <FilterTabs
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />

        {loading ? (
          <div className="loading">
            Loading Countries...
          </div>
        ) : (
          <div className="country-grid">
            {filteredCountries.map((country) => (
              <CountryCard
                key={country.cca3}
                country={country}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Explore;