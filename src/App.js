import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TheHeader from './components/common/TheHeader';
import AddUser from './components/user/AddUser';
import Error from './pages/Error';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <TheHeader />
      <Switch>
        <Route path="/add-user">
          <AddUser></AddUser>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
