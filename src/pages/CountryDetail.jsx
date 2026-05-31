import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getCountryByCode } from "../api/countries";

import {
  getBucketList,
  saveBucketList,
  getVisitedCountries,
  saveVisitedCountries,
} from "../utils/localStorage";

import "./CountryDetail.css";

function CountryDetail() {
  const { code } = useParams();

  const navigate = useNavigate();

  const [country, setCountry] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountry();
  }, []);

  const fetchCountry = async () => {
    try {
      const data = await getCountryByCode(code);
      setCountry(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addToBucketList = () => {
    const current = getBucketList();

    const exists = current.find(
      (item) => item.cca3 === country.cca3
    );

    if (!exists) {
      saveBucketList([...current, country]);
      alert("Added to Bucket List");
    }
  };

  const markVisited = () => {
    const current = getVisitedCountries();

    const exists = current.find(
      (item) => item.cca3 === country.cca3
    );

    if (!exists) {
      saveVisitedCountries([...current, country]);
      alert("Marked as Visited");
    }
  };

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="detail-page">
        <Navbar />
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="detail-card">
        <img
          src={country.flags?.png}
          alt={country.name?.common}
        />

        <div className="detail-info">
          <h1>{country.name?.common}</h1>
          <p className="capital">
  📍 {country.capital?.[0]}
</p>    

          <p>
            <strong>Capital:</strong>{" "}
            {country.capital?.[0]}
          </p>

          <p>
            <strong>Region:</strong>{" "}
            {country.region}
          </p>

          <p>
            <strong>Population:</strong>{" "}
            {country.population?.toLocaleString()}
          </p>

          <p>
            <strong>Area:</strong>{" "}
            {country.area?.toLocaleString()} km²
          </p>

          <div className="buttons">
            <button
              className="bucket-btn"
              onClick={addToBucketList}
            >
              Add To Bucket List
            </button>

            <button
              className="visit-btn"
              onClick={markVisited}
            >
              Mark As Visited
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;