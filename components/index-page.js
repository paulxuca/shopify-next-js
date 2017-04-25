import {style} from 'glamor';
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

export default ({products}) => (
  <div {...styles.list}>
    {products.map(product => (
      <div key={product.id} {...styles.item}>
        <ProductImage images={product.images}/>
      </div>
    ))}
  </div>
);
