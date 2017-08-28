import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as loginAction from '../../actions/login';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      dashboardRedirect: false,
      errors: {}
    };
  }

  handleChange = ({target}) => {
  	let errors = {...this.state.error};
  	delete errors[target.name];
  	this.setState({
  		[target.name]: target.value,
  		errors
  	});
  }  

  render() {
    return (
      <form name="loginForm">
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={e => this.setState({ email: e.target.value })} />
            <p className="error">{this.state.errors.email}</p>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={e => this.setState({ password: e.target.value })} />
            <p className="error">{this.state.errors.password}</p>
          </div>
        </div>        
        <input type="button" value="Login" onClick={this.onSubmit}/>
        <p className="error">{this.state.errors.invalidUser}</p>
      </form>
    )
  }

  onSubmit = (e) => {
   e.preventDefault();
    this.props.onLoginRequest(this.state);
    this.setState({
      email: '',
      password: ''
    });
  }
}


///////////////Redux part ///////////////

function mapDispatchToProps(dispatch) {
  return bindActionCreators(loginAction, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
