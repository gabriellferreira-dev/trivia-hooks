import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import Feedback from './pages/Feedback';

import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/trivia-hooks" exact component={ HomePage } />
        <Route path="/trivia-hooks/game" component={ GamePage } />
        <Route path="/trivia-hooks/feedback" component={ Feedback } />
      </Switch>
    </>
  );
}

export default App;
