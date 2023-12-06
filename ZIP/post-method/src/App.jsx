import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./components/Users/UsersList";
import { ClipLoader } from "react-spinners";
import AddProduct from "./components/AddProduct/AddProduct";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [fruits, setFruits] = useState([]);

  const getFruits = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://fruits-59f46-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    const data = await res.json();
    const formattedData = [];
    for (const key in data) {
      formattedData.unshift({ ...data[key], id: key });
    }
    setFruits(formattedData);
    setIsLoading(false);
  };

  useEffect(() => {
    getFruits();
  }, []);

  const onAddProduct = async (name, price) => {
    setIsLoading(true);
    const res = await fetch(
      "https://fruits-59f46-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, price }),
      }
    );
    const data = await res.json();
    setIsLoading(false);
    getFruits();
  };
  return (
    <div className="container">
      <AddProduct onAddProduct={onAddProduct} />
      <ClipLoader loading={isLoading} size={150} color="red" />
      {!isLoading && <UsersList users={fruits} />}
    </div>
  );
}

export default App;
