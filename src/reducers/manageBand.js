import { v4 as uuidv4 } from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = { id: uuidv4(), name: action.name }
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
      return { bands };
    default:
      return state;
  }
};