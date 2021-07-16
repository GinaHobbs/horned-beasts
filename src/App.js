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
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div>
        <Header />
        <Form>
          <Form.Group controlId="formController">
            <Form.Label>Horns</Form.Label>
            <Form.Control type="text" placeholder="Enter number of horns" onInput={this.handleDropdown} />
            {/* <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select> */}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Main data={data} modal_on={this.modal_on} horn_num={this.state.horn_num}/>
        <SelectedBeast modal_on={this.state.display_modal} modal_off={this.modal_off} image_src={this.state.image_src}/>
        <Footer />
      </div>
    );
  }
}

export default App;
