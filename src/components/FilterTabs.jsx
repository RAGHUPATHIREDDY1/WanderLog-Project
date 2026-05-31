import "./FilterTabs.css";

const regions = [
  "All",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

function FilterTabs({ selectedRegion, setSelectedRegion }) {
  return (
    <div className="tabs">
      {regions.map((region) => (
        <button
          key={region}
          className={
            selectedRegion === region
              ? "active-tab"
              : ""
          }
          onClick={() => setSelectedRegion(region)}
        >
          {region}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;