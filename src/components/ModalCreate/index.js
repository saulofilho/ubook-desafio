import React, { useState } from 'react';
import { Container, Form } from './styles';

function ModalCreate() {
  const [contacts, setContact] = useState(['']);
  const [newContact, setNewContact] = useState('');

  function handleAdd(e) {
    e.preventDefault();
    setContact([...contacts, newContact]);
    setNewContact('');
  }

  return (
    <Container>
      <Form>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="fullName"
          placeholder="Nome Completo"
          value={newContact}
          onChange={e => setNewContact(e.target.value)}
        />
        <label htmlFor="name">E-mail</label>
        <input
          type="text"
          id="fullName"
          placeholder="Nome Completo"
          value={newContact}
          onChange={e => setNewContact(e.target.value)}
        />
        <label htmlFor="name">Telefone</label>
        <input
          type="text"
          id="fullName"
          placeholder="Nome Completo"
          value={newContact}
          onChange={e => setNewContact(e.target.value)}
        />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </Form>
    </Container>
  );
}

export default ModalCreate;

/* <tr>
{contacts.map(contact => (
  <li key={contact}>{contact}</li>
))}
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>
  <button type="button" onClick={handleAdd}>
    Add
  </button>
</td>
</tr>
<input
type="text"
value={newContact}
onChange={e => setNewContact(e.target.value)}
/> */
