import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Image, Search, Button } from './styles';
import logo from '../../assets/images/ic-logo.png';
import plus from '../../assets/images/ic-plus.png';

function Header() {
  return (
    <Container>
      <div className="left">
        <Link to="/">
          <Image src={logo} alt="Ubook" />
        </Link>
      </div>
      <div className="right">
        <Button>
          <img src={plus} alt="Plus" />
          Criar Contato
        </Button>
        <Search placeholder="Buscar..." />
      </div>
    </Container>
  );
}

export default Header;
