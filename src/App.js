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
import SelectedBeast from './SelectedBeast.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_modal: false,
      image_src: ''
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

  render() {
    return (
      <div>
        <Header />
        <Main data={data} modal_on={this.modal_on}/>
        <SelectedBeast modal_on={this.state.display_modal} modal_off={this.modal_off} image_src={this.state.image_src}/>
        <Footer />
      </div>
    );
  }
}

export default App;
