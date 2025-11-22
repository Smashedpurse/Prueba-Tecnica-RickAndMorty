import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import CharacterCard from "../components/CharacterCard";
import { AnimatePresence, motion } from "framer-motion";

const FavoriteSection = () => {
  const { state, closeFavorite } = useContext(AppContext);

  return (
    <AnimatePresence>
      {state.showFavorite && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-5 rounded-lg w-4/5 h-auto object-cover shadow-lg"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex justify-end">
              <button
                className="top-5 right-5 cursor-pointer"
                onClick={closeFavorite}
              >
                ✖
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {state.favorites?.length > 0 ? (
                state.favorites.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))
              ) : (
                <p className="text-center w-full">
                  No hay favoritos seleccionados en este momento
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FavoriteSection;
