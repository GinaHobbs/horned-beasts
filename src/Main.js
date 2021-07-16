import React from 'react';
import HornedBeast from './HornedBeasts.js';
import deer from './img/deer.jpeg';
import rhino from './img/rhino.jpeg';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
  }


  render () {
    console.log(this.props.horn_num)

    return (
      this.props.data.map(animal => {
        if (this.props.horn_num == animal.horns) { 
          return <HornedBeast modal_on={this.props.modal_on} title={animal.title} image_src={animal.image_url} image_title={animal.title} image_alt={animal.description} description={animal.description} horns={animal.horns}/>
          }
        }
      )
    ) 
  }
}

export default Main;