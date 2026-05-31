import "./Navbar.css";

function Navbar({
  search = "",
  setSearch = () => {},
  showSearch = false,
}) {
  const bucket =
    JSON.parse(localStorage.getItem("bucketList")) || [];

  const visited =
    JSON.parse(localStorage.getItem("visited")) || [];

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header className="navbar">
      <div className="logo">
        🌍 WanderLog
      </div>

      {showSearch && (
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search countries..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>
      )}

      <div className="navbar-right">
        <div className="badge">
          ❤️ {bucket.length}
        </div>

        <div className="badge">
          ✔️ {visited.length}
        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;