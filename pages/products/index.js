import ProductList from '../../components/ProductList';
import data from '../../data/products.json';

const products = data.products;

const product_page = () => <ProductList products={products} />

export default product_page;