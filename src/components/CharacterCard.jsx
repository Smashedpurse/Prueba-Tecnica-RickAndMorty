import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { Star } from "./Star.jsx";

const CharacterCard = ({ character }) => {
  const { addFavorite, removeFavorite, openModal, state } =
    useContext(AppContext);

  const isFavorite = state.favorites.some((fav) => fav.id === character.id);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className=" bg-white rounded-lg shadow p-4"
      onClick={() => openModal(character)}
    >
      <img
        src={character.image}
        alt={character.name}
        className="rounded-md w-full cursor-pointer"
      />

      <div className="flex justify-between">
        <h3 className="mt-2 font-bold text-center">{character.name}</h3>

        <div className="flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              isFavorite
                ? removeFavorite(character.id)
                : addFavorite(character);
            }}
            className="mt-2 px-3 py-1 text-sm rounded bg-blue-600 text-white cursor-pointer"
          >
            {isFavorite ? <Star color="#FCD34D" /> : <Star color="#FFFFFF" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterCard;
