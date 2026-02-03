import { useEffect, useState } from "react";
import AddOrderForm from "./components/AddOrderForm";
import OrderList from "./components/OrderList";
import FilterAssign from "./components/FilterAssign";

const API_URL = "http://localhost:9966";

function App() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    const res = await fetch(`${API_URL}/orders`);
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="container">
      <h1 className="app-title">Speedo Delivery</h1>


      <div className="card">
        <AddOrderForm apiUrl={API_URL} onOrderAdded={loadOrders} />
      </div>

      <div className="card">
        <OrderList orders={orders} />
      </div>

      <div className="card">
        <FilterAssign apiUrl={API_URL} setOrders={setOrders} />
      </div>
    </div>
  );
}

export default App;
