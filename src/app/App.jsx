import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import { createContext, useContext, useState } from "react";

export const ShopContext = createContext({
  items: new Map(),
  addItems: function (product) {},
  removeItems: function (product) {},
});

function App() {
  const [items, setItems] = useState(new Map());

  const addItems = (imgSource, title, id, price) => {
    const newMap = new Map(items);
    newMap.set(
      id,
      newMap.has(id)
        ? { ...newMap.get(id), quantity: newMap.get(id).quantity + 1 }
        : {
            id: id,
            imgSource: imgSource,
            title: title,
            quantity: 1,
            price: price,
          },
    );
    setItems(newMap);
  };

  const deleteItem = (id) => {
    const newMap = new Map(items);
    newMap.delete(id);
    setItems(newMap);
  };

  const removeItem = (id)=>{
    const newMap = new Map(items)
    if(newMap.get(id).quantity>1){
      newMap.set(id, {...newMap.get(id), quantity: newMap.get(id).quantity-1})
      setItems(newMap)
    } else{
      deleteItem(id)
    }
    
  }

  return (
    <>
      <ShopContext.Provider value={{ items, addItems, removeItem, deleteItem }}>
        <Navbar />
      </ShopContext.Provider>
    </>
  );
}

export default App;
