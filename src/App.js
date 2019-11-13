import React, { Component } from 'react';
// import './styles/css/App.css';
import NavBar from './components/shared/navbar';
import { LocalizedContext } from './context/globalContext';
import Routes from './components/routes/routes';
class App extends Component {

  constructor(props) {
    super(props);
    let lang = localStorage.getItem('lang');
    this.state = {
      language:"tr"
    }

  }
  componentDidMount() {
   
  }
  render() {
    // TODO implement hospital selection and patient selection from ujrl
    // TODO Refactor these conditional renders
    return (
     
          <LocalizedContext.Provider value={{ language: this.state.language }}>
          
                          {/* <NavBar  /> */}
                          <Routes />
          </LocalizedContext.Provider>

    );
  }
}

export default (App);
