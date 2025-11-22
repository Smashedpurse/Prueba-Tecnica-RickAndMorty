import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AnimatePresence, motion } from "framer-motion";

const CharacterModal = () => {
  const { state, closeModal } = useContext(AppContext);

  if (!state.showModal) return null;

  return (
    <AnimatePresence>
      {state.showModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-5 rounded-lg w-[350px] relative"
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button className="absolute top-5 right-5" onClick={closeModal}>
              ✖
            </button>

            <img
              src={state.modalData.image}
              alt={state.modalData.name}
              className="rounded-md w-full"
            />

            <div className="text-center">
              <h2 className="text-xl mt-3 font-bold">{state.modalData.name}</h2>
              <p>Status: {state.modalData.status}</p>
              <p>Species: {state.modalData.species}</p>
              <p>Gender: {state.modalData.gender}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CharacterModal;
