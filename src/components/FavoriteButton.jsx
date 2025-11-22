import React from "react";
import FavoriteRickMorte from "../assets/FavoriteRickMorty.png";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const FavoriteButton = () => {
  const { openFavorite } = useContext(AppContext);
  return (
    <div className="flex justify-center items-center mt-5 mb-5">
      <button
        onClick={() => openFavorite()}
        type="submit"
        className="px-4 py-2 bg-amber-300 text-black rounded cursor-pointer flex items-center"
      >
        Favoritos
        <img
          src={FavoriteRickMorte}
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
        />
      </button>
    </div>
  );
};

export default FavoriteButton;
