import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { useSelector } from 'react-redux';
import EditContact from './components/EditContact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import styles from './index.module.css'




const App = () => {
  const oneContact = useSelector(state => state.contacts.oneContact);
  return (
    <div className={styles.body}>
    <Header />
      <Routes>
        <Route path="/add" element={<ContactForm/>} />
        <Route path="/" element={<ContactList/>} />
        <Route path="/edit/:id" element={oneContact && <EditContact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;