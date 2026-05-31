import "./SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="🔍 Search countries..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;