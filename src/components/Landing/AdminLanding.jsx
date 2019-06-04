/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import AdminLogin from '../Login/AdminLogin';

class AdminLanding extends React.Component {
  state = {
    isLoggedIn: false,
  };

  onAdminLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return this.state.isLoggedIn ? <div>Admin Home</div> : <AdminLogin onLoginClick={this.onAdminLogin} />;
  }
}

export default AdminLanding;
