import { useState } from "react";

function FilterAssign({ apiUrl, setOrders }) {
  const [paid, setPaid] = useState("");
  const [maxDistance, setMaxDistance] = useState("");
  const [result, setResult] = useState(null);

  const filterOrders = async () => {
    let url = `${apiUrl}/orders/filter?`;
    if (paid !== "") url += `paid=${paid}&`;
    if (maxDistance !== "") url += `maxDistance=${maxDistance}`;

    const res = await fetch(url);
    const data = await res.json();
    setOrders(data);
  };

  const assignDelivery = async () => {
    const res = await fetch(
      `${apiUrl}/orders/assign?maxDistance=${maxDistance}`,
      { method: "POST" }
    );
    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <h3>Filter & Assign</h3>

      <select onChange={(e) => setPaid(e.target.value)}>
        <option value="">All</option>
        <option value="true">Paid</option>
        <option value="false">Unpaid</option>
      </select>
      <br />

      <input
        placeholder="Max Distance"
        onChange={(e) => setMaxDistance(e.target.value)}
      />
      <br />

      <button onClick={filterOrders}>Filter Orders</button>
      <button onClick={assignDelivery}>Assign Delivery</button>

      {result && (
        <div className="output">
          <strong>Output:</strong>
          <br />
          {result.message
            ? result.message
            : `Assigned Order ID: ${result.orderId}`}
        </div>
      )}
    </div>
  );
}

export default FilterAssign;
