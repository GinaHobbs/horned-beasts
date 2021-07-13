import React from 'react';
import HornedBeast from './HornedBeasts.js';
import deer from './img/deer.jpeg';
import rhino from './img/rhino.jpeg';

class Main extends React.Component {
  render () {
    return (
      <div>
        <HornedBeast title={'Horned Beast 1'} image_src={deer} description={'this is a horned beast'}/>
        <HornedBeast title={'Horned Beast 2'} image_src={rhino} description={'this is another horned beast'}/>
      </div>
    ) 
  }
}

export default Main;