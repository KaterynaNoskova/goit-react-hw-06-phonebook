import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const {
  actions: { setFilter },
  reducer: filterReducer,
} = filterSlice;


export const getContacts = state => state.contacts.contacts;

export const initialFilter = state => state.filter.filter;
