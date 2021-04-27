import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText}  style={{width:'300px'}}/>;
  }
}

export default Image;