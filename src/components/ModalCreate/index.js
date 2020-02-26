/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import MaskedInput from 'react-text-mask';
import { Container, Form } from './styles';

function ModalCreate(props) {
  const initialFormState = { id: null, name: '', email: '', phone: '' };
  const [contact, setContact] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setContact({ ...contact, [name]: value });
  };

  const validations = yup.object().shape({
    name: yup
      .string()
      .min()
      .required(),
    email: yup
      .string()
      .email()
      .required(),
    phone: yup
      .string()
      .min()
      .required(),
  });

  return (
    <Container>
      <Form>
        <p>Criar novo contato</p>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome Completo"
          value={contact.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="seu@email.com"
          value={contact.email}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Telefone</label>
        <MaskedInput
          mask={[
            '(',
            /[1-9]/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          type="text"
          name="phone"
          id="phone"
          placeholder="(01) 2345-6789"
          value={contact.phone}
          onChange={handleInputChange}
        />
        <div className="buttons">
          <button className="cancelar" type="button" onClick={null}>
            Cancelar
          </button>
          <button
            className="salvar"
            type="button"
            onClick={e => {
              e.preventDefault();
              if (!contact.name || !contact.email || !contact.phone) return;

              props.addContact(contact);
              setContact(initialFormState);
            }}
          >
            Salvar
          </button>
        </div>
      </Form>
    </Container>
  );
}

export default ModalCreate;
