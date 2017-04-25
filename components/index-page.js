import {style} from 'glamor';
import Router from 'next/router';
import ProductImage from './product-image';

const styles = {
  list: style({
    margin: '0 auto',
    width: '75%'
  }),
  item: style({
    textAlign: 'center'
  })
};

const replaceUrl = handle => Router.replace(`/product/${handle}`);

export default ({products}) => (
  <div {...styles.list}>
    {products.map(product => {
      return (
        <a key={product.id} href={`/product/${product.attrs.handle}`}>
          <div {...styles.item}>
            <ProductImage images={product.images}/>
          </div>
        </a>
      )
    })}
  </div>
);
