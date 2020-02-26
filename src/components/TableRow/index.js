/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Table } from './styles';
import edit from '../../assets/images/ic-edit.png';
import delet from '../../assets/images/ic-delete.png';

function TableRow(props) {
  return (
    <>
      <Table>
        <thead>
          <th />
          <th>Contatos</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th />
          <th />
        </thead>
        <tbody>
          {props.contacts.length > 0
            ? props.contacts.map(contact => (
                <tr key={contact.id}>
                  <td className="iconLetter">
                    <span>
                      <p>{contact.id}</p>
                    </span>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td onClick={props.toggleSecondModal}>
                    <button
                      type="button"
                      onClick={() => {
                        props.editRow(contact);
                      }}
                    >
                      <img src={edit} alt="Edit" />
                    </button>
                  </td>
                  <td>
                    <button type="button" onClick={props.toggleThirdyModal}>
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
