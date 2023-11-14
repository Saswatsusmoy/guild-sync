import React from 'react';
import './userlogin.css'

class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'login',
      errorMsg: ''
    };
  }

  handleTabChange = tab => {
    this.setState({
      activeTab: tab
    });
  }

  handleLogin = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const password = e.target.elements.password.value;

    if (!name || !password) {
      this.setState({errorMsg: 'Please fill all fields'});
      return;
    }

    if (password.length < 8) {
      this.setState({errorMsg: 'Password must be at least 8 characters'});
      return;
    }
    
    // Login logic
    const storedUser = localStorage.getItem(name);
    
    if (storedUser && storedUser.password === password) {
      alert('Successfully logged in!');
      // Navigate to homepage
    } else {
      alert('Invalid credentials');
    }
  }

  handleSignup = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const name = e.target.elements.name.value;
    const password = e.target.elements.password.value;

    if (!email || !name || !password) {
      this.setState({errorMsg: 'Please fill all fields'});
      return;
    }

    if (password.length < 8) {
      this.setState({errorMsg: 'Password must be at least 8 characters'});
      return;
    }
    
    // Signup logic
    localStorage.setItem(name, {email, password});
    alert('Successfully signed up!');
  }

  render() {
    return (
      <div className="box">
        <img src="icon.png"/>

        <div className="header">
          <a className={this.state.activeTab === 'login' ? 'active' : ''} 
            onClick={() => this.handleTabChange('login')}>Login</a>
          <a className={this.state.activeTab === 'signup' ? 'active' : ''}
            onClick={() => this.handleTabChange('signup')}>Signup</a>
        </div>

        {this.state.errorMsg && <div className="error">{this.state.errorMsg}</div>}

        {this.state.activeTab === 'login' && 
          <form onSubmit={this.handleLogin}>
            <input type="text" name="name" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            
            <input type="submit" value="Login"/>
          </form>
        }

        {this.state.activeTab === 'signup' &&
          <form onSubmit={this.handleSignup}>
            <input type="email" name="email" placeholder="Email"/>
            <input type="text" name="name" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>

            <input type="submit" value="Signup"/>
          </form>  
        }
      </div>
    );
  }
}

export default LoginSignup;