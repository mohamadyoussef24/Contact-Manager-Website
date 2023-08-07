
import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';
import axios from 'axios'; 

const App = () => {
  const [contacts, setContacts] = useState([]);

  
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/contacts'); 
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const addContact = async newContact => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/contact', newContact);
      setContacts([...contacts, response.data]);
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div className="app">
      <h1>Contact Manager</h1>
      <ContactList contacts={contacts} />
      <AddContactForm onAddContact={addContact} />
    </div>
  );
};

export default App;