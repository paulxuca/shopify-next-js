import {style} from 'glamor';

const CartCount = ({cart}) => cart && <span> ({cart.lineItemCount})</span>

export default ({cart}) => (
  <ul {...styles.list}>
    <li>
      Cart
      <CartCount cart={cart}/>
    </li>
  </ul>
);

const styles = {
  list: style({
    margin: 0,
    padding: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    ' li': {
      fontSize: 12,
      display: 'inline',
      listStyle: 'none'
    }
  })
};