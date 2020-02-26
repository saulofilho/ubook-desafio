import styled from 'styled-components';

export const Container = styled.header`
  display: block;
  overflow: hidden;
  width: 100%;
  height: 64px;

  .left {
    float: left;
  }
  .right {
    float: right;
  }

  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    flex-flow: column;

    .left {
      float: none;
    }
    .right {
      float: none;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 32px;
  max-width: 148px;
  object-fit: contain;
`;

export const Search = styled.input`
  background-color: #e4e7f4;
  border: 0;
  width: calc(70vw - 15vw);
  height: 32px;
  border-radius: 4px;
  background-image: url('https://cursorcss.s3-sa-east-1.amazonaws.com/ic-search.png');
  background-repeat: no-repeat;
  background-position: 99%;
  padding: 7px 0 6px 8px;
  margin-left: 10px;
`;

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
