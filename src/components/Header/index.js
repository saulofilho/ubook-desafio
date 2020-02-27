import React from 'react';
import { Container, Image, Search, Button } from './styles';
import logo from '../../assets/images/ic-logo.png';
import plus from '../../assets/images/ic-plus.png';

function Header(props) {
  console.log('5', props.searchTerm);
  return (
    <Container>
      <div className="left">
        <Image src={logo} alt="Ubook" />
      </div>
      <div className="right">
        {props.contacts.length > 0 ? (
          <Button onClick={props.toggleFirstModal}>
            <img src={plus} alt="Plus" />
            Criar Contato
          </Button>
        ) : null}
        <Search
          placeholder="Buscar..."
          value={props.searchTerm}
          onChange={props.handleChange}
        />
      </div>
    </Container>
  );
}

export default Header;
