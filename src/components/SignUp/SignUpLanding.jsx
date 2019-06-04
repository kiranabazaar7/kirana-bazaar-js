/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SignUpButtonsContainer from './SignUpButtonsContainer';

const SignUpLanding = () => (
  <Container>
    <Row>
      <Col>
        <SignUpButtonsContainer isRetailer />
      </Col>
      <Col>
        <SignUpButtonsContainer />
      </Col>
    </Row>
  </Container>
);

export default SignUpLanding;
