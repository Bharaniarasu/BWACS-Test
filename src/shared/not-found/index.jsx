import React from 'react';
import { Result } from 'antd';
import { withRouter } from 'react-router-dom';

const NotFound = () => (
  <Result
    status="error"
    title="404 Page not found"
    subTitle="We are sorry, but the page you are looking for does not exist."
  />
);

export default withRouter(NotFound);
