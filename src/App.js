import './App.css';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.component'

const HatsPage = () => <h1>Hats Page</h1>

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={HomePage}></Route>
        <Route path="/shop/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
