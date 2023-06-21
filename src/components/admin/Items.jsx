import React, { useState } from 'react';
import style from './Items.module.css';
import PopUp from './PopUp';
import { FcDeleteRow } from 'react-icons/fc';
import FilterItemTable from './FilterItemTable';
function Items({
  items,
  deleteItemHandle,
  deleteImageHandle,
  isChecked,
  setIsChecked,
  allIsChecked,
  setAllIsChecked,
}) {
  // Checkbobex function
  // const [allIsChecked, setAllIsChecked] = useState(false);

  const handleCheckBox = (index) => {
    setIsChecked({ ...isChecked, [index]: !isChecked[index] });
  };

  const handleAllCheckBoxes = () => {
    const newChecked = { ...isChecked };
    for (let i = 0; i < items.length; i++) {
      newChecked[i] = !allIsChecked;
    }
    setAllIsChecked(!allIsChecked);
    setIsChecked(newChecked);
  };
  //__________________________________________________

  const [filteredItems, setFilteredItems] = useState([]);

  return (
    <>
      <div className={style.table_backrgound}>
        <FilterItemTable items={items} func={setFilteredItems} />
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
                  <input
                    type="checkbox"
                    checked={allIsChecked}
                    onChange={() => handleAllCheckBoxes()}
                  />
                </td>
              </tr>
              {filteredItems &&
                filteredItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={isChecked[index] || false}
                        onChange={() => {
                          handleCheckBox(index);
                          console.log(isChecked);
                        }}
                      />
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
                      <PopUp
                        icon={<FcDeleteRow />}
                        saveChanges={() => {
                          deleteItemHandle(item.id);
                          deleteImageHandle(item.image);
                        }}
                      >
                        <p>
                          удалить {item.type}
                          {item.brand} {item.model}?
                        </p>
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
