/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import PropTypes from 'proptypes';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
import Input from 'terra-form-input';
import adminImage from '../../images/admin.png';

class AdminLogin extends React.Component {
  static propTypes = {
    onLoginClick: PropTypes.func,
  };

  static defaultProps = {
    onLoginClick: () => {},
  };

  state = {
    userName: '',
    password: '',
  };

  onLoginClick = () => {
    this.props.onLoginClick(this.state.userName, this.state.password);
  };

  render() {
    return (
      <Spacer style={{ backgroundColor: '#F0F0F0', height: '100%', paddingTop: '5rem' }}>
        <Container style={{ maxWidth: '30rem', backgroundColor: '#F0F0F0' }}>
          <Row>
            <Col>
              <Card style={{ backgroundColor: '#D3D3D3' }}>
                <Spacer margin="medium">
                  <Row style={{ textAlign: 'center' }}>
                    <Col>
                      <Card.Img variant="top" src={adminImage} style={{ height: '5rem', width: '5rem' }} />
                    </Col>
                  </Row>
                  <Card.Body>
                    <Container>
                      <Spacer margin="small">
                        <Row>
                          <Col xs={4}>
                            <Text>Username</Text>
                          </Col>
                          <Col>
                            <Input
                              defaultValue={this.state.userName}
                              onChange={(event) => {
                                this.setState({ userName: event.target.value });
                              }}
                              placeholder="Enter Username"
                            />
                          </Col>
                        </Row>
                      </Spacer>
                      <Spacer margin="small">
                        <Row>
                          <Col xs={4}>
                            <Text>Password</Text>
                          </Col>
                          <Col>
                            <Input
                              defaultValue={this.state.password}
                              type="password"
                              onChange={(event) => {
                                this.setState({ password: event.target.value });
                              }}
                              placeholder="Enter Password"
                            />
                          </Col>
                        </Row>
                      </Spacer>
                      <Spacer marginTop="large+2">
                        <Row style={{ textAlign: 'center' }}>
                          <Col xs={12}>
                            <Button variant="dark" onClick={this.onLoginClick}>
                              Login
                            </Button>
                          </Col>
                        </Row>
                      </Spacer>
                    </Container>
                  </Card.Body>
                </Spacer>
              </Card>
            </Col>
          </Row>
        </Container>
      </Spacer>
    );
  }
}

export default AdminLogin;
