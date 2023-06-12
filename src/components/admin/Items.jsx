import React from 'react';
import style from './Admin.module.css';

function Items({ items, deleteItemHandle, deleteImageHandle }) {
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
          {items &&
            items.map((item, index) => (
              <tr key={index}>
                <th>{item.type}</th>
                <th>
                  <img src={item.image} alt="" width="20%" />
                </th>
                <th>{item.brand}</th>
                <th>{item.model}</th>
                <th>{item.storage}</th>
                <th>{item.color}</th>
                <th>{item.description}</th>
                <th>{item.price}</th>
                <th>
                  <button
                    onClick={() => {
                      deleteItemHandle(item.id);
                      deleteImageHandle(item.image);
                    }}
                  ></button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Items;
