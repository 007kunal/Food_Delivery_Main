function OrderList({ orders }) {
  return (
    <div>
      <h3>All Orders</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Restaurant</th>
            <th>Items</th>
            <th>Paid</th>
            <th>Distance (KM)</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.restaurantName}</td>
              <td>{order.itemCount}</td>
              <td>{order.paid ? "Yes" : "No"}</td>
              <td>{order.deliveryDistance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
