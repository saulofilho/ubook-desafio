import styled from 'styled-components';

export const Table = styled.table`
  background-color: #ffffff;
  border-spacing: 0;
  overflow: hidden;
  width: 100%;
  height: auto;
  text-align: left;
  border-collapse: separate;
  border: 1px solid #e1e1e1;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;

  .iconLetter {
    width: 50px;
  }

  .iconLetter span {
    width: 24px;
    height: 24px;
    background-color: #fa8d68;
    border-radius: 50%;
    display: inline-block;
    margin-left: 8px;
  }

  .iconLetter span p {
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: normal;
    padding: 3px;
  }

  thead th {
    font-size: 13px;
    color: #9198af;
    font-weight: normal;
    height: 40px;
    border-bottom: 1px solid #e1e1e1;
  }

  tbody td {
    height: 40px;
    color: #2a2d3b;
    font-size: 14px;
    font-weight: normal;
  }

  tbody tr:hover {
    background-color: #fff3f2;
    cursor: pointer;
  }

  tbody tr td {
    border-bottom: 1px solid #e1e1e1;
  }

  button {
    border: 0;
    background: none;
  }

  .noContacts {
    padding-left: 25px;
  }
`;
