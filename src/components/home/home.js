import React, { Component } from 'react';
import estateImage from '../../assest/images/estate-image.jpg';
// import './styles/css/App.css';

class home extends Component {

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
        <div className="user">

        <img src={estateImage} alt="Preview selected" style={{ width: "100%", color: "white", height:"500px" }} />

    </div>
        // <div>dsafsdfsdf</div>

    );
  }
}

export default (home);