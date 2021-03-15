import sortObjectByKey from '../../lib/helpers';

export function getSortedProducts(field, products, isDescending) {
  if (field) {
    const sortedProducts = sortObjectByKey(field, products, isDescending);
    return sortedProducts;
  }
  return products;
}
