import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import pageData from '../api/offerListing.json';

class OfferListing extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      components: []
    }
    this.renderComponent = this.renderComponent.bind(this);
  }

  componentDidMount() {
    if(pageData && pageData.response && pageData.response.components) {
      this.setState({components: pageData.response.components});
    }
  }

  renderComponent(componentName, componentProps) {
    const Component = require(`../components/${componentName}`).default;
    return (
      <Component {...componentProps} />
    )
  }

  render() {

    if(this.state.components.length === 0) {
      return null
    }

    return (
      <React.Fragment>
        <CssBaseline />
        {
          this.state.components.map(element => {
            return this.renderComponent(element.componentName, element.propData);
          })
        }
      </React.Fragment>
    );
  }
}

export default OfferListing;