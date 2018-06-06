import axios from 'axios';
import { HOTELS_RECEIVE, HOTELS_API, HOTELS_REQUEST, HOTELS_REQUEST_FAILED } from '../constants';

export const getHotels = () => async dispatch => {
  try {
    const hotels = await axios.get(HOTELS_API);
    dispatch({
      type: HOTELS_REQUEST,
    });
    setTimeout(() => {
      dispatch({
        type: HOTELS_RECEIVE,
        payload: hotels.data,
      });
    }, 1400);
  } catch (e) {
    console.error(e);
    dispatch({
      type: HOTELS_REQUEST_FAILED,
      payload: e,
    });
  }
};

export const anotherAction = () => {};
