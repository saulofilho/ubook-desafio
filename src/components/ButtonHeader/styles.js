import styled from 'styled-components';

export const Button = styled.button`
  width: 144px;
  height: 32px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(255, 255, 255, 0.16);
  background-color: #dbff90;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #fa7268;

  &:hover {
    background-color: #fff3f2;
  }

  img {
    width: 100%;
    max-width: 10px;
    height: 10px;
    margin-right: 5px;
  }
`;
