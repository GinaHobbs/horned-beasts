import React from 'react';
import GreyHeart from './img/heart-grey.png';
import RedHeart from './img/red-heart.png';
import Card from 'react-bootstrap/Card';

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
        <Card style={{ width: '18rem' }} onClick={this.click}>
          <Card.Img variant="top" src={this.props.image_src} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              <p>{this.props.description}</p>
              <p>Number of horns: {this.props.horns}</p>
              <p>Favorited: {fav} {this.state.clicked} </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default HornedBeast;