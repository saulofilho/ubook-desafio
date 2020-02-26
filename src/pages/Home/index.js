/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Modali, { useModali } from 'modali';
import EmptyContacts from '../../components/EmptyContacts';
import Header from '../../components/Header';
import TableRow from '../../components/TableRow';
import ModalCreate from '../../components/ModalCreate';
import ModalEdit from '../../components/ModalEdit';
import ModalDelete from '../../components/ModalDelete';

export default function Home() {
  // data
  const [contacts, setContacts] = useState([]);
  const initialFormState = { id: null, name: '', email: '', phone: '' };
  const [currentContact, setCurrentContact] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // local storage
  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');

    if (storageContacts) {
      setContacts(JSON.parse(storageContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // add
  const addContact = contact => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
  };

  // delete
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // update
  const updateContact = (id, updatedContact) => {
    setEditing(false);

    setContacts(
      contacts.map(contact => (contact.id === id ? updatedContact : contact))
    );
  };

  // edit
  const editRow = contact => {
    setEditing(true);

    setCurrentContact({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  };

  // modal
  const [firstModal, toggleFirstModal] = useModali({
    closeButton: false,
    animated: true,
  });
  const [secondModal, toggleSecondModal] = useModali({
    animated: true,
    closeButton: false,
  });
  const [thirdyModal, toggleThirdyModal] = useModali({
    animated: true,
    closeButton: false,
  });

  // home
  return (
    <>
      <Header contacts={contacts} toggleFirstModal={toggleFirstModal} />
      {contacts.length > 0 ? (
        <TableRow
          contacts={contacts}
          editRow={editRow}
          toggleSecondModal={toggleSecondModal}
          toggleThirdyModal={toggleThirdyModal}
          deleteContact={deleteContact}
        />
      ) : (
        <EmptyContacts toggleFirstModal={toggleFirstModal} />
      )}
      <Modali.Modal {...firstModal}>
        <ModalCreate addContact={addContact} />
      </Modali.Modal>
      <Modali.Modal {...secondModal}>
        <ModalEdit
          editing={editing}
          setEditing={setEditing}
          currentContact={currentContact}
          updateContact={updateContact}
        />
      </Modali.Modal>
      <Modali.Modal {...thirdyModal}>
        <ModalDelete contacts={contacts} deleteContact={deleteContact} />
      </Modali.Modal>
    </>
  );
}
