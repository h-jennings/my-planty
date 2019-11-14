import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.array.isRequired,
};

function ProductList({ products }) {
  return (
    <div className="ProductList--wrapper">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href="/products/[name]"
              as={`/products/${product.name}`}
            >
              <a>
                {product.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

ProductList.propTypes = propTypes;


export default ProductList;
