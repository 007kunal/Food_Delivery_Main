import { useState } from "react";

function AddOrderForm({ apiUrl, onOrderAdded }) {
  const [order, setOrder] = useState({
    orderId: "",
    restaurantName: "",
    itemCount: "",
    isPaid: false,
    deliveryDistance: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setOrder({
      ...order,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: Number(order.orderId),
        restaurantName: order.restaurantName,
        itemCount: Number(order.itemCount),
        isPaid: order.isPaid,
        deliveryDistance: Number(order.deliveryDistance)
      })
    });

    setOrder({
      orderId: "",
      restaurantName: "",
      itemCount: "",
      isPaid: false,
      deliveryDistance: ""
    });

    onOrderAdded();
  };

  return (
    <div>
      <h3>Add Order</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="orderId"
          placeholder="Order ID"
          value={order.orderId}
          onChange={handleChange}
        /><br />

        <input
          name="restaurantName"
          placeholder="Restaurant Name"
          value={order.restaurantName}
          onChange={handleChange}
        /><br />

        <input
          name="itemCount"
          placeholder="Item Count"
          value={order.itemCount}
          onChange={handleChange}
        /><br />

        <input
          name="deliveryDistance"
          placeholder="Distance (KM)"
          value={order.deliveryDistance}
          onChange={handleChange}
        /><br />

        <div className="checkbox-row">
  <input
    type="checkbox"
    name="isPaid"
    checked={order.isPaid}
    onChange={handleChange}
  />
  <label>Paid</label>
</div>

        <button type="submit">Add Order</button>
      </form>
    </div>
  );
}

export default AddOrderForm;
