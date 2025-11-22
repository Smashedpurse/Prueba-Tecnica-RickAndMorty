import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";
import SearchBar from "../components/SearchBar";
import RickAndMortyLogo from "../assets/Rick_and_Morty.png";
import FavoriteSection from "../components/FavoriteSection";
import Pagination from "../components/Pagination";
import RmError from "../assets/RM-ErrorImage.png";

const Home = () => {
  // Declaramos un objeto conformado del estado y del método utilizado en AppContext para la obtención de información
  const { state, getCharacters, openFavorite, resetApp } =
    useContext(AppContext);

  // Hacemos uso de useEffect para que al generar la renderización de nuestro componente nos brinde el resultado de la consulta realizada por el AppContext.jsx
  useEffect(() => {
    getCharacters(1);
  }, []);

  //console.log("state:", state);

  return (
    <div className="p-5">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-full h-auto object-cover mt-6 mb-6 md:w-48 md:h-auto cursor-pointer"
          src={RickAndMortyLogo}
          alt="RickAndMortyLogo"
          onClick={() => window.location.reload()}
        />
      </div>

      <SearchBar />

      <div className="flex justify-center items-center mt-5 mb-5">
        <button
          onClick={() => openFavorite()}
          type="submit"
          className="px-4 py-2 bg-amber-300 text-black rounded cursor-pointer"
        >
          Favoritos
        </button>
      </div>

      {/* Manejo del error de la barra de busqueda*/}
      <div>
        {state.error ? (
          <div className="flex justify-center items-center flex-col">
            <p className="text-center text-white font-stretch-50% text-xl">
              No hay resultados para tu consulta de búsqueda
            </p>
            <img src={RmError} alt="" srcset="" className="w-1/2" />
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Iteración de nuestro arreglo para posteriormente heredar esta información a nuestro componente reutilizable CharacterCard*/}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {state.characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <Pagination />

      <CharacterModal />
      <FavoriteSection />
    </div>
  );
};

export default Home;
