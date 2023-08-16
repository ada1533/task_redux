import { createSlice } from '@reduxjs/toolkit';


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
    contacts: [],
    oneContact: null
    },
    reducers: {
        addContactForm: (state, action) => {
            state.contacts.push(action.payload);
        },

        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        getOneContact: (state, action) => {
            let oneContact = state.contacts.find(contact => contact.id === action.payload);
            state.oneContact = oneContact;
        },
        saveChanges: (state, action) => {
            state.contacts = state.contacts.map(contact => {
                if(contact.id === action.payload.id) return action.payload;
                return contact;
            });
            state.oneContact = null;
        }
    }
})

export const { addContactForm, deleteContact, getOneContact, saveChanges } = contactSlice.actions;
export default contactSlice.reducer;