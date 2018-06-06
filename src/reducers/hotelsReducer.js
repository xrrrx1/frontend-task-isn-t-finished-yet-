import { HOTELS_REQUEST, HOTELS_REQUEST_FAILED, HOTELS_RECEIVE } from '../constants';

const initialState = {
  hotels: [],
  error: '',
  hasData: false,
  isLoading: false,
  isError: false,
  hotelId: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case HOTELS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case HOTELS_REQUEST_FAILED:
      return {
        ...state,
        isError: true,
        error: payload,
      };
    case HOTELS_RECEIVE:
      return {
        ...state,
        hotels: payload,
        isLoading: false,
        hasData: true,
        hotelId: payload.id,
      };

    default:
      return state;
  }
}
