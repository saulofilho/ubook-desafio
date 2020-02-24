import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 432px;
`;

export const Form = styled.form`
  width: 432px;
  height: 342px;
  border-radius: 16px;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  overflow: hidden;

  input {
    width: 384px;
    height: 32px;
    border-radius: 4px;
    border: solid 1px #c0c3d2;
    background-color: #ffffff;
    margin: 0 24px;
  }
`;
