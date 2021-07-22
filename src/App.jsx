import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import LoginPage from './LoginPage';

export default function App() {
  return (
    <Router>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route>
        {' '}
        404 not found <Link to="/login"> link </Link>{' '}
      </Route>
    </Router>
  );
}
