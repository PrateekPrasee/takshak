import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

import PostDetails from './components/PostDetails/PostDetails';
import Sidebar from './components/Navbar/Sidebar';
import Auth from './components/Auth/Auth';
import About from './components/About/about';
import Contact from './components/Contact/contact';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Sidebar} />
          <Route path="/posts/search" exact component={Sidebar} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
          <Route path="/about" exact component = {About} />
          <Route path="/contact" exact component = {Contact} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
