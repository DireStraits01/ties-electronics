import React from 'react';
import style from './Items.module.css';
import PopUp from './PopUp';

function Items({ items, deleteItemHandle, deleteImageHandle }) {
  return (
    <>
      <div className={style.table_backrgound}>
        <div className={style.table_wrapper}>
          <table className={style.fl_table}>
            <thead>
              <tr>
                <th>выбрать</th>
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
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              {items &&
                items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{item.type}</td>
                    <td>
                      <img src={item.image} alt="" width="10%" />
                    </td>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.storage}</td>
                    <td>{item.color}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                      <PopUp>
                        <p>textetxtxtetext</p>
                      </PopUp>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Items;
