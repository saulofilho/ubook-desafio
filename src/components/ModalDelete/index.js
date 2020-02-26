/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Container, Form } from './styles';

function ModalDelete(props) {
  return (
    <Container>
      {props.contacts.length > 0
        ? props.contacts.map(contact => (
            <Form>
              <p>Excluir contato</p>
              <label htmlFor="name">Deseja realmente excluir o contato?</label>
              <div className="buttons">
                <button className="cancelar" type="button" onClick={null}>
                  Cancelar
                </button>
                <button
                  className="excluir"
                  type="button"
                  onClick={() => props.deleteContact(contact.id)}
                >
                  Excluir
                </button>
              </div>
            </Form>
          ))
        : null}
    </Container>
  );
}

export default ModalDelete;
