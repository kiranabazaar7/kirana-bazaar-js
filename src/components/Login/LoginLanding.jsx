/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginButtonsContainer from './LoginButtonsContainer';

const LoginLanding = () => (
  <Container>
    <Row>
      <Col>
        <LoginButtonsContainer isRetailer />
      </Col>
      <Col>
        <LoginButtonsContainer />
      </Col>
    </Row>
  </Container>
);

export default LoginLanding;
