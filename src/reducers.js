import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";

import { toast } from "react-toastify";

const initial = {
  favs: readFavsFromLocalStorage(),
  current: null,
  error: null,
  loading: true,
};

export function writeFavsToLocalStorage(favs) {
  localStorage.setItem("s10g4", JSON.stringify(favs));
}

function readFavsFromLocalStorage() {
  if (!JSON.parse(localStorage.getItem("s10g4"))) return [];
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      writeFavsToLocalStorage([...state.favs, action.payload]);
      let favKontrol = state.favs.every(
        (item) => item.activity !== action.payload.activity
      );
      toast.success(`Favoriye eklenmiştir`);
      return {
        ...state,
        favs: favKontrol ? [...state.favs, action.payload] : [...state.favs],
      };

    case FAV_REMOVE:
      toast.info("Favori listesinden çıkarılmıştır.");
      writeFavsToLocalStorage(
        state.favs.filter((item) => item.key !== action.payload)
      );
      return {
        ...state,
        favs: state.favs.filter((item) => item.key !== action.payload),
      };

    case FETCH_SUCCESS:
      toast.success("🦄 Yeni bir öneri geliyor.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return {
        ...state,
        current: action.payload,
        loading: false,
      };

    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case GET_FAVS_FROM_LS:
      return { ...state, favs: readFavsFromLocalStorage() };

    default:
      return state;
  }
}
