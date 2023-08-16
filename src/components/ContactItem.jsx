import React from 'react';
import styles from '../index.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact, getOneContact } from '../store/contactSlice';
import { Link } from 'react-router-dom';

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.list__items}>
            <div className={styles.list__item}>
            <img src={contact.image} alt="eror" />
                <div className={styles.info}>
                    <h2>{contact.name}</h2>
                    <p>{contact.number}</p>
                </div>
            </div>
            <div className={styles.btns}>
            <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
            <Link to={`/edit/${contact.id}`}>
                <button onClick={() => dispatch(getOneContact(contact.id))}>Edit</button>
            </Link>
            </div>
        </div>
    );
};

export default ContactItem;