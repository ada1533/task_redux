import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem'
import styles from '../index.module.css'

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts)

    return (
        <div className={styles.list}>
            <div>
                {contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    );
};

export default ContactList;