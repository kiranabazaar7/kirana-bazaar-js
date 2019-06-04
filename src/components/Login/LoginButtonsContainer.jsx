/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import PropTypes from 'proptypes';
import { Card } from 'react-bootstrap';
import SignUpLoginButton from '../SignUpLoginButton/SignUpLoginButton';

const LoginButtonsContainer = (props) => (
  <Card style={{ border: 0 }}>
    <Card.Body>
      <SignUpLoginButton text={`Login as ${props.isRetailer ? 'retailer' : 'buyer'}`} />
      <Card.Text>{props.isRetailer ? 'Publish your goods online' : 'Get your needs delivered to you'}</Card.Text>
    </Card.Body>
  </Card>
);

LoginButtonsContainer.propTypes = {
  isRetailer: PropTypes.bool,
};

LoginButtonsContainer.defaultProps = {
  isRetailer: false,
};

export default LoginButtonsContainer;
