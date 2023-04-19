export function ProductsListSalesGreaterThanQuantity({ products }) {
  return (
    <div>
      <h1>Products List Sales Greater Than Quantity</h1>
      <ul>
        {products.filter(({ sales, quantity }) => sales > quantity).map(({ name, sales, quantity }) => <li>Name: {name}, Sales: {sales}, Quantity: {quantity}</li>)}
      </ul>
    </div>
  );
}
