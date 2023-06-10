import React, { useState, useEffect } from 'react';
import style from './Admin.module.css';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

function Items() {
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
      <table className={style.table}>
        <thead>
          <tr>
            <th>Вид</th>
            <th>Изображение</th>
            <th>Марка</th>
            <th>Модель</th>
            <th>Память</th>
            <th>Цвет</th>
            <th>Описание</th>
            <th>Цена</th>
            <th>действия</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <th>{item.type}</th>
              <th>
                <p>image</p>
              </th>
              <th>{item.brand}</th>
              <th>{item.model}</th>
              <th>{item.storage}</th>
              <th>{item.color}</th>
              <th>{item.description}</th>
              <th>{item.price}</th>
              <th>x</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Items;
