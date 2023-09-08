// src/ContactApp.js
import React, { useState } from 'react';
import './styles.css'; // Import the CSS file
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact, deleteContact } from './contactSlice';

const ContactApp = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleAddContact = () => {
    if (name && email) {
      const newContact = {
        id: new Date().getTime(),
        name,
        email,
      };
      dispatch(addContact(newContact));
      setName('');
      setEmail('');
    }
  };

  const handleEditContact = () => {
    if (selectedContact) {
      dispatch(editContact({ id: selectedContact.id, updatedContact: { name, email } }));
      setSelectedContact(null);
      setName('');
      setEmail('');
    }
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (

    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Management App </h1>
      <nav className="navbar">
        <div className="navbar-brand">
          <h1 className="navbar-logo">Assignment</h1>
          <button className={`navbar-toggler ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          </button>
        </div>
        <a href='http://localhost:3002/'><button  > Charts and Maps</button></a>
      </nav>
      <div>
        <h2 className="text-xl font-semibold mb-2">Add/Edit Contact</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          onClick={selectedContact ? handleEditContact : handleAddContact}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {selectedContact ? 'Edit Contact' : 'Add Contact'}
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-4 mb-2">Contact List</h2>
        <u >
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="bg-white p-4 shadow-md rounded mb-2 flex justify-between items-center"
            >
              <div className='edit'>
                <div className='name'>Name-<span>{contact.name}</span></div>  <div className='name'>Email- <span>{contact.email}</span></div>
              </div>
              <div className='edit'>
                <button
                  onClick={() => setSelectedContact(contact)}
                  className="bg-yellow-500 text-white py-2 px-4 rounded mr-2 hover:bg-yellow-600"
                >
                  View
                </button>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </u>
      </div>
      <div>
        <div className="text">Contact Details ---</div>
        {selectedContact && (
          <div className="bg-white p-4 shadow-md rounded">
            <p className="font-semibold"><span className='user'>The Name of the user is :</span> {selectedContact.name}</p>
            <p className="font-semibold"><span className='user'>Email :</span> {selectedContact.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactApp;
