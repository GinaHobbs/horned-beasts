import React from 'react';

class HornedBeast extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_src} alt={this.props.image_alt} title={this.props.image_title}></img>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;