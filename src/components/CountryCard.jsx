import { Link } from "react-router-dom";
import "./CountryCard.css";

function CountryCard({ country }) {
  return (
    <Link
      to={`/country/${country.cca3}`}
      className="country-card"
    >
     <img
  src={
    country.flags?.png ||
    country.flags?.svg ||
    "https://via.placeholder.com/300x200?text=No+Flag"
  }
  alt={country.name?.common}
  className="country-flag"
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/300x200?text=Flag+Not+Available";
  }}
/>

      <div className="country-content">
        <h3>{country.name?.common}</h3>

        <p>
          <strong>Capital:</strong>{" "}
          {country.capital?.[0] || "N/A"}
        </p>

        <p>
          <strong>Region:</strong>{" "}
          {country.region || "N/A"}
        </p>

        <p>
          <strong>Population:</strong>{" "}
          {country.population?.toLocaleString() || "N/A"}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;