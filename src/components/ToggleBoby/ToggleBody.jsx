/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import PropTypes from 'proptypes';
import { Container, Row, Col } from 'react-bootstrap';
import Spacer from 'terra-spacer';
import Button from 'terra-button';
import IconClose from 'terra-icon/lib/icon/IconClose';

const ToggleBody = (props) => (
  <Spacer margin="large">
    <Container>
      <Row>
        <Col style={{ textAlign: 'right' }}>
          <Spacer margin="medium">
            <Button onClick={props.onClose} icon={<IconClose />} isIconOnly text="Close" variant="utility" />
          </Spacer>
        </Col>
      </Row>
      <Row>
        <Col>
          <Spacer marginBottom="medium">{props.children}</Spacer>
        </Col>
      </Row>
    </Container>
  </Spacer>
);

ToggleBody.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

ToggleBody.defaultProps = {
  onClose: () => {},
  children: null,
};

export default ToggleBody;
