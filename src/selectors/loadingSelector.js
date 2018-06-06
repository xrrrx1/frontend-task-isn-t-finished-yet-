import { createSelector } from 'reselect';

const getLoadingFromStore = store => store.hotels.isLoading;

const loadingSelector = createSelector(getLoadingFromStore, isLoading => isLoading);

export default loadingSelector;
