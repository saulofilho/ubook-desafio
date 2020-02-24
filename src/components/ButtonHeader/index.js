import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from './styles';
import plus from '../../assets/images/ic-plus.png';

const ButtonHeader = props => {
  const { location } = props;

  if (location.pathname.match(/contacts/)) {
    return (
      <>
        <Button>
          <img src={plus} alt="Plus" />
          Criar Contato
        </Button>
      </>
    );
  }
  return null;
};

export default withRouter(ButtonHeader);
