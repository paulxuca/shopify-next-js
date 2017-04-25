import withLayout from '../components/with-layout';
import withCart from '../components/with-cart';
import withProductList from '../components/with-product-list';
import IndexPage from '../components/index-page';

export default withCart(withLayout(withProductList(IndexPage)));
