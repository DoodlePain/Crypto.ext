import React from 'react';
import FacebookProvider, {Login} from 'react-facebook';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleError = (error) => {
    this.setState({error});
  }
  render() {

    let login = null;

    let user = sessionStorage.getItem('user');

    if (user === null) {
      login = (<FacebookProvider appId="140137076692279">
        <Login scope="email" onResponse={this.props.handleResponse} onError={this.handleError}>
          <button className="facebook" onClick={this.props.loginChange}>Login via Facebook</button>
        </Login>
      </FacebookProvider>)
    }

    if (user !== null) {
      login = <button className="facebook" onClick={this.props.handleResponse}>Logout</button>
    }

    return (<div>
      {login}
    </div>)
  }
};

export default LoginForm;
