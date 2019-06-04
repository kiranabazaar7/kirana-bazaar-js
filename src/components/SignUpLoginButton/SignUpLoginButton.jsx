/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import PropTypes from 'proptypes';
import { Button } from 'react-bootstrap';
import { FaCaretRight } from 'react-icons/fa';
import Spacer from 'terra-spacer';
import Arrange from 'terra-arrange';

const SignUpLoginButton = (props) => (
  <Button variant="light">
    <Spacer margin="medium">
      <Arrange
        style={{ color: 'grey' }}
        fill={<h1>{props.text}</h1>}
        fitEnd={<FaCaretRight style={{ fontSize: '2em' }} />}
        alignFitEnd="center"
      />
    </Spacer>
  </Button>
);

SignUpLoginButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SignUpLoginButton;
