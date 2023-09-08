// src/contactSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action) => {
      const { id, updatedContact } = action.payload;
      const contactIndex = state.contacts.findIndex((contact) => contact.id === id);
      if (contactIndex !== -1) {
        state.contacts[contactIndex] = { ...state.contacts[contactIndex], ...updatedContact };
      }
    },
    deleteContact: (state, action) => {
      const id = action.payload;
      state.contacts = state.contacts.filter((contact) => contact.id !== id);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
