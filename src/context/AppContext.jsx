import axios from "axios";
import { createContext, useReducer } from "react";
import { appReducer, ACTIONS } from "./appReducer.js";

//Creación de nuestro contexto
export const AppContext = createContext();

//  Estado inicial de nuestros objeto, en este caso 2 arreglos, uno de personajes y favoritos
export const initialState = {
  characters: [],
  totalPages: 1,
  currentPage: 1,
  favorites: [],
  modalData: null,
  showModal: false,
  showFavorite: false,
  error: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Función Global para obtener la infomrmación de nuestra consulta

  const getCharacters = async (page = 1) => {
    try {
      //Generamos la consulta de nuestra API
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      // Mostramos por consola el resultado obtenidos de la consulta para generar la desestructuración de la información que necesitamos
      // console.log("res", res);
      // Si todo sale bien por medio de dispatch generamos el envío de la información
      dispatch({
        type: ACTIONS.SET_CHARACTERS,
        payload: {
          characters: res.data.results, // <-- SOLO el arreglo
          totalPages: res.data.info.pages,
          currentPage: page,
        },
      });
      // En caso de falla atrapamos el error y lo mostramos en consola
    } catch (error) {
      console.error("Error en consulta de personajes:", error);
    }
  };

  // Función Global para obtener la una consulta con base en el query de la barra de busqueda

  const searchCharacters = async (query) => {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?name=${query}`
      );

      dispatch({
        type: ACTIONS.SEARCH_CHARACTERS,
        payload: res.data.results,
      });
    } catch (error) {
      console.error("Error en consulta de personajes:", error);
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: error.response?.data?.error || "Error desconocido",
      });
    }
  };

  // Función global para añadir a favoritos

  const addFavorite = (character) => {
    dispatch({
      type: ACTIONS.ADD_FAVORITE,
      payload: character,
    });
  };

  // Función global para eliminar a favoritos

  const removeFavorite = (id) => {
    dispatch({
      type: ACTIONS.REMOVE_FAVORITE,
      payload: id,
    });
  };

  // Apertura del modal

  const openModal = (character) => {
    dispatch({
      type: ACTIONS.OPEN_MODAL,
      payload: character,
    });
  };

  // Cierre del modal

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  // Apertura de la sección favoritos

  const openFavorite = () => {
    dispatch({ type: ACTIONS.OPEN_FAVORITE });
  };

  // Cierre de la sección favoritos

  const closeFavorite = () => {
    dispatch({ type: ACTIONS.CLOSE_FAVORITE });
  };

  // Reinicio de la app
  const resetApp = () => {
    dispatch({ type: ACTIONS.RESET_APP });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        getCharacters,
        searchCharacters,
        addFavorite,
        removeFavorite,
        openModal,
        closeModal,
        openFavorite,
        closeFavorite,
        resetApp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
