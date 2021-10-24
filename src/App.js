import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TheHeader from './components/common/TheHeader';
import AddUser from './components/user/AddUser';
import UpdateUser from './components/user/UpdateUser';
import Users from './components/user/Users';
import Error from './pages/Error';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <TheHeader />
      <Switch>
        <Route path="/edit-user">
          <UpdateUser></UpdateUser>
        </Route>
        <Route path="/all-users">
          <Users></Users>
        </Route>
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
