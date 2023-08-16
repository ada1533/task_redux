import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveChanges } from '../store/contactSlice';
import { Link } from 'react-router-dom';
import './EditForm.css'

const EditContact = () => {
    const oneContact = useSelector(state => state.contacts.oneContact);
    
    const [contact, setContact] = useState(oneContact);
    
    const dispatch = useDispatch();

    return (
        <div id='editform'>
            <div id='editform_center'>
            <h2 id='h2'>Edit Contacts component</h2>
            <input type="url" onChange={e => setContact({ ...contact, image: e.target.value })} value={contact.image} />
            <input type="text" onChange={e => setContact({ ...contact, name: e.target.value })} value={contact.name} />
            <input type="text" onChange={e => setContact({ ...contact, number: e.target.value })} value={contact.number} />
            <Link to='/'>
            <button onClick={() => dispatch(saveChanges(contact))}>Save</button>
            </Link>
            </div>
        </div>
    );
};

export default EditContact;
