import React from "react";
import './login.css'
// import { Alert } from "react-bootstrap";
// import Home from "./Home"; 
// import Form from './components/form';
import {Link} from 'react-router-dom';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';




class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      emailog:"",
      passwordlog:"",

    }
    this.handleSubmit=this.handleSubmit.bind(this)

  }

  emailoghandler = (event) => {
    this.setState({
      emaillog: event.target.value
    })
  }

  passwordloghandler = (event) => {
    this.setState({
      passwordlog: event.target.value
    })
  }



  handleLogin = (event) => {
  
    let mail = localStorage.getItem("email").replace(/"/g, "");
    let pass = localStorage.getItem("password").replace(/"/g, "");


    if(this.state.emailog === mail && this.state.passwordlog === pass){
      alert('You are logged in , redirecting you to the dashboard')
      // redirect user to dashboard
    }else if(!this.state.emailog && !this.state.passwordlog){
      alert('Empty!')
      console.log('succussful login')
      // redirect user to dashboard
      window.location='/employee/src/components/dashboard.js';
    }else if(this.state.emailog !== pass && this.state.passwordlog !== mail){
      alert('Please recheck you credientials')
    }

    event.preventDefault()
    
  }





  render(){
    return(

  



      <div className="container">
          <form onSubmit={this.handleLogin}>

            <h1>Login</h1>


            <label>FullName :</label> <input type="text" value={this.state.emailog} onChange={this.emailoghandler} placeholder="User email..." /><br />
            <label>Email :</label> <input type="password" value={this.state.passwordlog} onChange={this.passwordloghandler} placeholder="Password of user..." /><br />

            {/* <button type="submit" className="btn-login">
                 Login
            </button> */}
            <br></br>
            <input type="Submit" value="Submit" />


          </form>
          {/* <p>No account? {""}<Link to="/sign-up">Register</Link></p> */}
          <p>Not registered yet?{""}<Link to="/dashboard">Register</Link></p>


        </div>


    )
  }

}

export default Login;











