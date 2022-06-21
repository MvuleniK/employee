
// import Registration  from './components/registration';
// import Form from './components/form';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard"
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (


    <div className="App">

      {/* Pages go here */}

      <Router>
        <Switch>
            <Route exact path="/" component = {Login}></Route>
            <Route path="/sign-up" component = {Register}></Route>
            <Route path="/" component = {Dashboard}></Route>
        </Switch>
      </Router>

      {/* testing the array */}
      {/* <Register/> */}

      {/* Working Form  */}
      {/* <Form/> */}

      {/* Login */}
      {/* <Login/> */}

      {/* registation page/index page
        <Registration/> */}


    </div>
  );
}

export default App;
