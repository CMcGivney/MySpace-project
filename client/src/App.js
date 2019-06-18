import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import People from './components/People'
import PersonForm from './components/ProfileForm'

const App = () => (
  <Fragment>
    <NavBar />
    <FetchUser>
     <Container>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/people" component={People} />
        <Route exact path="/person/new" component={PersonForm} />

        <Route component={NoMatch} />
      </Switch>
     </Container>
    </FetchUser>
  </Fragment>
)

export default App;
