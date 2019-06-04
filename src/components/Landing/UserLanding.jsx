/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Toggle from 'terra-toggle';
import LoginLanding from '../Login/LoginLanding';
import SignUpLanding from '../SignUp/SignUpLanding';
import ToggleBody from '../ToggleBoby/ToggleBody';

class UserLanding extends React.Component {
  state = {
    showToggleSection: false,
    showLogin: false,
    showSignUp: false,
  };

  onLoginClick = () => {
    this.clearState(() => {
      this.setState({
        showToggleSection: true,
        showLogin: true,
      });
    });
  };

  onSignUpClick = () => {
    this.clearState(() => {
      this.setState({
        showToggleSection: true,
        showSignUp: true,
      });
    });
  };

  onCloseToggleSection = () => {
    this.clearState(() => {
      this.setState({
        showToggleSection: false,
      });
    });
  };

  clearState = (callBack) => {
    this.setState(
      {
        showLogin: false,
        showSignUp: false,
      },
      callBack,
    );
  };

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Kirana Bazaar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link onClick={this.onLoginClick}>Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.onSignUpClick}>Sign Up</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Toggle isOpen={this.state.showToggleSection} isAnimated>
          <ToggleBody onClose={this.onCloseToggleSection}>
            {this.state.showLogin && <LoginLanding />}
            {this.state.showSignUp && <SignUpLanding />}
          </ToggleBody>
        </Toggle>
      </div>
    );
  }
}

export default UserLanding;
