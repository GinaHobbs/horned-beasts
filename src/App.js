import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Stretch from './Stretch.js';
import Lab02 from './Lab02.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json'
import SelectedBeast from './SelectedBeast.js';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import BeastForm from './BeastForm.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: data,
      display_modal: false,
      image_src: '',
      horns_num: ''
    }
  }

  modal_on = (obj) => {
    this.setState({
      display_modal: true,
      image_src: obj.image_src
    })
  }

  modal_off = () => {
    this.setState({
      display_modal: false
    })
  }

  handleFormSubmitted = e => {
    e.preventDefault();
  }

  handleDropdown = e => {
    this.setState({
      horn_num: e.target.value
    })
  }

  filterHorns = (e) => {
    e.preventDefault();
    console.log(typeof(this.state.horn_num))
    this.setState({
      beasts: data.filter(animal => {
        return animal.horns === parseInt(this.state.horn_num)
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Main data={this.state.beasts} modal_on={this.modal_on} horn_num={this.state.horn_num}/>
        <BeastForm handleDropdown={this.handleDropdown} filterHorns={this.filterHorns}/>
        <SelectedBeast modal_on={this.state.display_modal} modal_off={this.modal_off} image_src={this.state.image_src}/>
        <Footer />
      </div>
    );
  }
}

export default App;
