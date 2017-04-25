import {Component} from 'react';
import ShopifyData from './shopify-data';

export default WrappedComponent => class extends Component {
  constructor() {
    super();

    this.state = {
      products: false
    };
  }

  componentDidMount() {
    this._shopify = new ShopifyData();
    this._shopify.fetchAllProducts().then(data => this.setState({products: data}));
  }
  
  render() {
    if (this.state.products) {
      return (<WrappedComponent products={this.state.products} {...this.props}/>);
    }

    return <div/>;
  }
}