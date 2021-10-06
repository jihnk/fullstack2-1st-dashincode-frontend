import React from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Cardlist from '../components/List/Cardlist/Cardlist';

export class List extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NavBar />
        <Cardlist />
        <Footer />
      </>
    );
  }
}

export default List;
