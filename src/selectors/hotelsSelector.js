import { createSelector } from 'reselect';

const getHotelsFromStore = store => store.hotels.hotels;

const hotelsSelector = createSelector(getHotelsFromStore, hotels => hotels);

export default hotelsSelector;
