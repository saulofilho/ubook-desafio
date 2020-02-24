import React, { useState } from 'react';
import { Container, Modal } from './styles';

function TableRow() {
  const [contacts, setContact] = useState(['']);
  const [newContact, setNewContact] = useState('');

  return (
    <>
      <tr>
        {contacts.map(contact => (
          <li key={contact}>{contact}</li>
        ))}
        <td>nome</td>
        <td>email</td>
        <td>tel</td>
        <td>
          <button type="button">edit</button>
        </td>
        <td>
          <button type="button">delete</button>
        </td>
      </tr>
    </>
  );
}

export default TableRow;
