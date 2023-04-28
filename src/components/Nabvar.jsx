

export const Navbar = ({searchTerm, setSearchTerm}) => {
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
  return (
    <div>
      <header className="_container_Nabvar">
        <div><ul>
          <button className="btn">Inicio</button>
        </ul></div>
        <nav className="_search">
        
          <input type='search'
          value={searchTerm}
          onChange={handleSearch}
          />

        </nav>
      </header>
    </div>
  );
};
