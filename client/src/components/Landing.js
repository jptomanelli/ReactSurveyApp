import React from 'react';
import Typography from '@material-ui/core/Typography';

const Landing = () => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <Typography variant="display4" style={{ marginTop: '5%'}} color="inherit">
        Email.io
      </Typography>
      <Typography variant="title" color="primary">
        Collect feedback from users
      </Typography>
    </div>
  )
};

export default Landing;