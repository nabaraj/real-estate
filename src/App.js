
import './css/app.scss';
import Home from './view/Home';
import { Route, Switch } from 'react-router-dom';
import CreateProject from './view/CreateProject';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/create' component={CreateProject} />
      </Switch>
    </main>
  );
}

export default App;
