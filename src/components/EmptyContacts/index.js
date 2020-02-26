import React from 'react';
import { Container, Logo, Button, Text } from './styles';
import book from '../../assets/images/ic-book.png';
import plus from '../../assets/images/ic-plus.png';

function EmptyContacts(props) {
  return (
    <>
      <Container>
        <Logo src={book} alt="Ubook" />
        <Text>Nenhum contato foi criado ainda.</Text>
        <Button onClick={props.toggleFirstModal}>
          <img src={plus} alt="Plus" />
          Criar Contato
        </Button>
      </Container>
    </>
  );
}

export default EmptyContacts;
