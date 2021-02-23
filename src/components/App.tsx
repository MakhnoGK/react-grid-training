import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { TrackerTable } from '.';

const App = () => (
  <Container maxWidth="md">
    <Typography variant="h3" align="center">
      COVID-19 Tracker
    </Typography>

    <TrackerTable />
  </Container>
);

App.propTypes = {};

export default App;
