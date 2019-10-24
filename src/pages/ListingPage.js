import React, { Component } from 'react';

class ListingPage extends Component {
  
  render() {
    const componentName = 'PropertyCard'
    const Component = require(`../components/${componentName}`).default;

    return (
      <Component />    
    );
  }
}

export default ListingPage;