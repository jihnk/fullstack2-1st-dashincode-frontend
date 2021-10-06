import React from 'react';
import LoginPage from '../components/LoginPage/LoginPage';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
export class Login extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <LoginPage />
        <Footer />
      </div>
    );
  }
}

export default Login;
