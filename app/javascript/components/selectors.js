import { createSelector } from 'reselect';

export const elementsIsLoading = (state) => state.elements.isLoading;
export const getElements = (state) => state.elements.data;

export const getElementById = (id) => createSelector(
  [getElements], (elements) => elements.filter(
    (element) => element.id === id,
  )[0],
);

export const currentUser = (state) => state.auth.user;
