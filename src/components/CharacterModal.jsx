import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AnimatePresence, motion } from "framer-motion";

const CharacterModal = () => {
  const { state, closeModal } = useContext(AppContext);

  if (!state.showModal) return null;

  console.log("state", state);

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
            <button
              className="absolute top-5 right-5 pr-1.5 pl-1.5 rounded-2xl bg-red-300/40 cursor-pointer"
              onClick={closeModal}
            >
              <span className="text-red-500 font-semibold">Cerrar X</span>
            </button>

            <img
              src={state.modalData.image}
              alt={state.modalData.name}
              className="rounded-md w-full"
            />

            <div className="text-center">
              <h2 className="text-xl mt-3 font-bold">{state.modalData.name}</h2>
              <div className="flex justify-evenly my-3">
                <p className="px-1.5 py-1 rounded-2xl bg-blue-500/40 text-center flex items-center">
                  <span>
                    <strong>Estado:</strong> {state.modalData.status}
                  </span>
                </p>
                <p className="px-1.5 py-1 rounded-2xl bg-indigo-500/40 text-center flex items-center">
                  <span>
                    <strong>Genero:</strong> {state.modalData.gender}
                  </span>
                </p>
              </div>
              <div className="flex justify-evenly my-3">
                <p className="px-1.5 py-1 rounded-2xl bg-green-300/40  text-center flex items-center">
                  <span>
                    <strong>Especie:</strong> {state.modalData.species}
                  </span>
                </p>
                <p className="px-1.5 py-1 rounded-2xl bg-amber-200/40 text-center flex items-center">
                  <span>
                    <strong>Origen:</strong> {state.modalData.origin.name}
                  </span>
                </p>
              </div>
              <div className="flex justify-evenly my-3">
                <p className="px-1.5 py-1 rounded-2xl bg-orange-100/90 text-center flex items-center">
                  <span>
                    <strong>Ubicación:</strong> {state.modalData.location.name}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CharacterModal;
