import React, { useState } from 'react';
import Table from './Table';

const App = () => {
  const [data, setData] = useState([
    { name: 'Washing machine', price: 28000, category: 'Home appliances' },
    { name: 'T-shirt', price: 500, category: 'Fashion' },
    { name: 'Dresses', price: 600, category: 'Fashion' },
    { name: 'Jeans', price: 900, category: 'Fashion' },
    { name: 'iphone11', price: 50000, category: 'Mobile-phones' },
    { name: 'Sunglasses', price: 2000, category: 'Accessories' },
  ]);

  const addItem = (newItem) => {
    setData([...data, newItem]);
  };

  return (
    <div>
      <h1>Search Products</h1>
      <Table data={data} addItem={addItem} />
    </div>
  );
};

export default App;
