import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlamPage from './pages/Glam';
import MobileFrame from './components/Mobile';
import MyPage from 'pages/Mypage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MobileFrame>
        <Switch>
          <Route exact path="/home" component={GlamPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Redirect to="/home" />
        </Switch>
      </MobileFrame>
    </BrowserRouter>
  );
};

export default App;
