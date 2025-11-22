// SearchBar.jsx
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const SearchBar = () => {
  const { searchCharacters, getCharacters, state } = useContext(AppContext);
  const [query, setQuery] = useState("");

  //Manejamos el evento de cambio en el formulario
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    //Validación para indicar el tipo de contenido a renderización
    if (value.trim() === "") {
      getCharacters(1);
    } else {
      searchCharacters(value);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={query}
        onChange={handleChange}
        className="border px-3 py-2 rounded w-full bg-white"
      />
    </form>
  );
};

export default SearchBar;
