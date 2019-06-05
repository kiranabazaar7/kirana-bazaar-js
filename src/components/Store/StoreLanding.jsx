import React from 'react';
import Lorem from 'react-lorem-component';
import UserLanding from '../Landing/UserLanding';
import StoreHeader from './StoreHeader';

const StoreLanding = () => (
  <div>
    <UserLanding />
    <StoreHeader />
    <Lorem count={50} />
  </div>
);

export default StoreLanding;
