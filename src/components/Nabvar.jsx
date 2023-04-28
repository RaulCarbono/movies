export const Navbar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <header className="_container_Nabvar">
        <div>
          <ul>
            <button className="btn">Inicio</button>
          </ul>
        </div>
        <div className="_title">
          <h1>Series plus tv</h1>
        </div>

        <nav className="_search">
          <input
            type="search"
            placeholder="busqueda"
            value={searchTerm}
            onChange={handleSearch}
          />
        </nav>
      </header>
    </div>
  );
};
