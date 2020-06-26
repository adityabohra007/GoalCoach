import React from 'react';
import GoalItem from './../GoalItem';
import Header from './../Header';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {StyledHeader, StyledNav} from './styles.js';
import GoalUpdate from './../GoalUpdate';
const Component = props => {
  return (
    <>
      <Router>
        <div>
          <StyledHeader>
            <h4>
              Goal Coach <p>Get Trained</p>{' '}
            </h4>
            <StyledNav>
              <ul>
                <li>
                  <Link to="/report">Report</Link>
                </li>
                <li>
                  <Link to="/">Goal Update</Link>
                </li>
              </ul>
            </StyledNav>
          </StyledHeader>

          <Switch>
            <Route path="/report">
              <GoalItem {...props} />
            </Route>
            <Route path="/">
              <GoalUpdate />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default Component;
