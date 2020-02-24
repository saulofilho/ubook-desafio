import React from 'react';
import TableRow from '../../components/TableRow';

function Contacts() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Contatos</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th />
          </tr>
        </thead>
        <tbody>{TableRow()}</tbody>
      </table>
    </>
  );
}

export default Contacts;
