import {Component} from 'react';
import ShopifyData from './shopify-data';

export default WrappedComponent => class extends Component {
  constructor() {
    super();

    this.state = {
      cart: false
    };
  }
  
  componentDidMount() {
    this._shopify = new ShopifyData();
    this._shopify.createCart().then(cart => this.setState({cart}));
  }
  
  render() {
    return <WrappedComponent cart={this.state.cart} {...this.props}/>;
  }
}