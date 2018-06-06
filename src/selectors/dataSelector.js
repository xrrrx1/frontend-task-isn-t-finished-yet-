import { createSelector } from 'reselect';

const getDataFromStore = store => store.hotels.hasData;

const dataSelector = createSelector(getDataFromStore, hasData => hasData);

export default dataSelector;
