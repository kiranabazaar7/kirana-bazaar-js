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

const SignUpButtonsContainer = (props) => (
  <Card style={{ border: 0 }}>
    <Card.Body>
      <SignUpLoginButton text={`Sign up to ${props.isRetailer ? 'sell' : 'buy'} goods`} />
    </Card.Body>
  </Card>
);

SignUpButtonsContainer.propTypes = {
  isRetailer: PropTypes.bool,
};

SignUpButtonsContainer.defaultProps = {
  isRetailer: false,
};

export default SignUpButtonsContainer;
