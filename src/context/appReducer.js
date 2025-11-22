export const ACTIONS = {
  SET_CHARACTERS: "SET_CHARACTERS",
  SEARCH_CHARACTERS: "SEARCH_CHARACTERS",
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  OPEN_FAVORITE: "OPEN_FAVORITE",
  CLOSE_FAVORITE: "CLOSE_FAVORITE",
  SET_ERROR: "SET_ERROR",
  RESET_APP: "RESET_APP",
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload.characters,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        error: false,
      };

    case ACTIONS.SEARCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        error: false,
      };

    case ACTIONS.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case ACTIONS.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };

    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        modalData: action.payload,
        showModal: true,
      };

    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        modalData: null,
        showModal: false,
      };

    case ACTIONS.OPEN_FAVORITE:
      return {
        ...state,
        showFavorite: true,
      };

    case ACTIONS.CLOSE_FAVORITE:
      return {
        ...state,
        showFavorite: false,
      };

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        characters: [],
        error: true,
      };

    case ACTIONS.RESET_APP:
      return initialState;

    default:
      return state;
  }
};
