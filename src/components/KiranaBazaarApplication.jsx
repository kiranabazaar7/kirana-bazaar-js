/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import PropTypes from 'proptypes';
import ContentContainer from 'terra-content-container';
import UserLanding from './Landing/UserLanding';
import AdminLanding from './Landing/AdminLanding';

const KiranaBazaarApplication = (props) => (
  <ContentContainer fill>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    {props.isUserPage ? <UserLanding /> : <AdminLanding />}
  </ContentContainer>
);

KiranaBazaarApplication.propTypes = {
  isUserPage: PropTypes.bool.isRequired,
};

export default KiranaBazaarApplication;
