/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Container, Form } from './styles';

function ModalDelete() {
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
        <p>Excluir contato</p>
        <label htmlFor="name">Deseja realmente excluir o contato?</label>
        <div className="buttons">
          <button className="cancelar" type="button" onClick={handleAdd}>
            Cancelar
          </button>
          <button className="excluir" type="button" onClick={handleAdd}>
            Excluir
          </button>
        </div>
      </Form>
    </Container>
  );
}

export default ModalDelete;
