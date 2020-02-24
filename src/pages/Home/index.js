import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Button, Text } from './styles';
import book from '../../assets/images/ic-book.png';
import plus from '../../assets/images/ic-plus.png';

function Home() {
  return (
    <Container>
      <Logo src={book} alt="Ubook" />
      <Text>Nenhum contato foi criado ainda.</Text>
      <Link to="/contacts">
        <Button>
          <img src={plus} alt="Plus" />
          Criar Contato
        </Button>
      </Link>
    </Container>
  );
}

export default Home;
