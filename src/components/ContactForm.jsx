import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactForm } from '../store/contactSlice';
import { Link } from 'react-router-dom';
import './ContactForm.css'

const ContactForm = () => {
    const [contactImg, setContactImg] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const dispatch = useDispatch();

    function createContact() {
        if (!contactImg.trim() || !contactName.trim() || !contactNumber.trim()) {
            return alert('Some input fields are empty');
        }

        let newContact = {
            id: Date.now(),
            image: contactImg,
            name: contactName,
            number: contactNumber
        };
    
        dispatch(addContactForm(newContact));
        setContactImg('');
        setContactName('');
        setContactNumber('');
    }

    return (
        <div id='addform'>
            <div id='addform_center'>
            <h3>Create Contact</h3>
            <input type="url" onChange={e => setContactImg(e.target.value)} value={contactImg} />
            <input type="text" onChange={e => setContactName(e.target.value)} value={contactName} />
            <input type="text" onChange={e => setContactNumber(e.target.value)} value={contactNumber} />
            <Link to="/">
                <button onClick={createContact}>Create</button>
            </Link>
            </div>
        </div>
    );
};

export default ContactForm;
