/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import swal from '@sweetalert/with-react';
import { Table, Container, Form } from './styles';
import edit from '../../assets/images/ic-edit.png';
import delet from '../../assets/images/ic-delete.png';

function TableRow(props) {
  // const [colors, setColors] = useState([
  //   'red',
  //   'yellow',
  //   'blue',
  //   'green',
  //   'purple',
  //   'pink',
  // ]);

  // const changeColor = () => {
  //   const { colors } = useState;
  //   const color = colors[Math.floor(Math.random() * colors.length)];
  //   document.body.style.backgroundColor = color;
  //   console.log(changeColor);
  // };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th />
            <th>Contatos</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {props.contacts.length > 0
            ? props.contacts.map(contact => (
                <tr key={contact.id}>
                  <td className="iconLetter">
                    <span>
                      <p>{contact.name.charAt(0).toUpperCase()}</p>
                    </span>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <span role="button" onClick={props.toggleSecondModal}>
                      <button
                        className="editBtn"
                        type="button"
                        onClick={() => {
                          props.editRow(contact);
                        }}
                      >
                        <img src={edit} alt="Edit" />
                      </button>
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        swal({
                          buttons: {},
                          content: (
                            <Container>
                              <Form>
                                <p>Excluir contato</p>
                                <label htmlFor="name">
                                  Deseja realmente excluir o contato?
                                </label>
                                <div className="buttons">
                                  <button
                                    className="cancelar"
                                    type="button"
                                    onClick={null}
                                  >
                                    Cancelar
                                  </button>
                                  <button
                                    className="excluir"
                                    type="button"
                                    onClick={() =>
                                      props.deleteContact(contact.id)
                                    }
                                  >
                                    Excluir
                                  </button>
                                </div>
                              </Form>
                            </Container>
                          ),
                        })
                      }
                    >
                      <img src={delet} alt="Delete" />
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </>
  );
}

export default TableRow;
