import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 237px;
  margin-top: 160px;
  object-fit: contain;
`;

export const Text = styled.p`
  margin-top: 24px;
  color: #2a2d3b;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 144px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(255, 255, 255, 0.16);
  background-color: #dbff90;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #fa7268;
  margin-top: 24px;

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
