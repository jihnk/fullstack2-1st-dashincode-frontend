import React from 'react';
import Cardlist from '../components/List/Cardlist/Cardlist';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

export class List extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Cardlist />
        <Footer />
      </>
    );
  }
}

export default List;
