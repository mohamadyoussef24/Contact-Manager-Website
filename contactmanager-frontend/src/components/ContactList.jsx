import React from 'react';
import ContactCard from './ContactCard';


const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;