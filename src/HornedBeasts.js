import React from 'react';
import GreyHeart from './img/heart-grey.png'
import RedHeart from './img/red-heart.png'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
      favorite: false
    }
  }

  click = () => {
    this.setState({
      clicked: this.state.clicked + 1,
      favorite: true
    })
    this.props.modal_on({image_src: this.props.image_src})
  }

  render () {
    //vanilla JS would go here
    let fav = ''
    if (this.state.favorite === true) {
      fav = <img src={RedHeart} width='25px'/>
    } else {
      fav = <img src={GreyHeart} width='25px'/>
    }

    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_src} alt={this.props.image_alt} title={this.props.image_title} onClick={this.click} width='200px'/>
        <p>{this.props.description}</p>
        <p>{this.props.horns}</p>
        <span>Favorited: {this.state.clicked} </span>
        {fav}
      </div>
    )
  }
}

export default HornedBeast;