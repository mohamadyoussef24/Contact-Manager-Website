import React, { useState } from 'react';

const AddContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    latitude: '',
    longitude: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(formData);
    setFormData({
      name: '',
      phone: '',
      latitude: '',
      longitude: '',
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="add-contact-form">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="latitude"
          placeholder="Latitude"
          value={formData.latitude}
          onChange={handleChange}
        />
        <input
          type="text"
          name="longitude"
          placeholder="Longitude"
          value={formData.longitude}
          onChange={handleChange}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContactForm;
