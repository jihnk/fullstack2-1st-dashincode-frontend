import React from 'react';
import SignUp from '../components/SignUp/SignUp';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

export class Signup extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <SignUp />
        <Footer />
      </div>
    );
  }
}

export default Signup;
