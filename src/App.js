
import './App.css';
import {BrowserRouter as Router,Redirect, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import NotFound from './pages/NotFound';
import EducatorDashboard from './pages/EducatorDashboard';

function App() {
  


  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/register' exact>
          <Register />
        </Route>
        <Route path='/user/dashboard'>
          <EducatorDashboard />
        </Route>
        <Route path="/404" >
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
