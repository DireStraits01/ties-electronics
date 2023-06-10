import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

function Items({ itemType, itemBrand, itemModel, itemDescription, itemPrice }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, 'items'));
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  return (
    <>
      {items.map((item, index) => (
        <div>
          <p>{item.brand}</p>
          <p>{item.model}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </>
  );
}

export default Items;
