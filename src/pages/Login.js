import React from 'react';
import LoginPage from '../components/LoginPage/LoginPage';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
export class Login extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <LoginPage />
        <Footer />
      </div>
    );
  }
}

export default Login;
