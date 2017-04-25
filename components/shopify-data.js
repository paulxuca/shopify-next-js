import ShopifyBuy from 'shopify-buy';
import shopifyConfig from '../config';

const client = ShopifyBuy.buildClient(shopifyConfig);

class ShopifyData {
  constructor() {
    this._shopify = client;
  }

  fetchAllProducts() {
    return this._shopify.fetchAllProducts();
  }

  createCart() {
    return this._shopify.createCart();
  }
}

export default ShopifyData;

