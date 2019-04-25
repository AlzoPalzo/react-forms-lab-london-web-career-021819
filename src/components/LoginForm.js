import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUserNameChange = (event) =>
  {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) =>
  {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) =>
  {
    event.preventDefault()
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      alert('Fill the fields you cunt')
    }
    else{
      // debugger
      const name = this.state.username
      const pass = this.state.password
      console.log(name + pass)
      this.props.handleLogin({username: name, password: pass})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUserNameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
