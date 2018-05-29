import React from 'react';
import Typography from '@material-ui/core/Typography';

const Landing = () => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <Typography variant="display4" color="inherit">
        Email.io
      </Typography>
      <Typography variant="title" color="inherit">
        Collect feedback from users
      </Typography>
    </div>
  )
};

export default Landing;