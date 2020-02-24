import React from 'react';
import { Link } from 'react-router-dom';
import ButtonHeader from '../ButtonHeader';
import { Container, Image, Search } from './styles';
import logo from '../../assets/images/ic-logo.png';

function Header() {
  return (
    <Container>
      <div className="left">
        <Link to="/">
          <Image src={logo} alt="Ubook" />
        </Link>
      </div>
      <div className="right">
        <ButtonHeader />
        <Search placeholder="Buscar..." />
      </div>
    </Container>
  );
}

export default Header;
