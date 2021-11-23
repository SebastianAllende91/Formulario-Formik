import { TYPES } from "../type/formularioAction";

export const formularioReducer = (state, action) => {
  switch (action.type) {
    case TYPES.CREATE_DATA:
      return [...state, action.payload];

    case TYPES.DELETE_DATA:
      return state.filter((contacto) => contacto.id !== action.id);

    case TYPES.UPDATE_DATA: {
      console.log(state);

      let newData = state.map((el) => (el.id === state.id ? state : el));
      return newData;
    }
    default:
      return state;
  }
};
