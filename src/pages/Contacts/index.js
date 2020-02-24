import React, { useState, useEffect } from 'react';
import TableRow from '../../components/TableRow';
import ModalCreate from '../../components/ModalCreate';
import ModalEdit from '../../components/ModalEdit';
import ModalDelete from '../../components/ModalDelete';

function Contacts() {
  // const contactsBook = [{ id: 0, name: 'x', email: 'x@x.com', phone: '123' }];
  // data
  const [contacts, setContacts] = useState([]);
  const initialFormState = { id: null, name: '', email: '', phone: '' };
  const [currentContact, setCurrentContact] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addContact = contact => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const updateContact = (id, updatedContact) => {
    setEditing(false);

    setContacts(
      contacts.map(contact => (contact.id === id ? updatedContact : contact))
    );
  };

  const editRow = contact => {
    setEditing(true);

    setCurrentContact({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  };

  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');

    if (storageContacts) {
      setContacts(JSON.parse(storageContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <TableRow
        contacts={contacts}
        editRow={editRow}
        deleteContact={deleteContact}
      />
      <ModalCreate addContact={addContact} />
      <ModalEdit
        editing={editing}
        setEditing={setEditing}
        currentContact={currentContact}
        updateContact={updateContact}
      />
      <ModalDelete />
    </>
  );
}

export default Contacts;
