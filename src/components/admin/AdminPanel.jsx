import React, { useState, useRef } from 'react';
import { db } from '../config/firebase'; // make sure to import db from your Firebase config
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import style from './Admin.module.css';
import Items from './Items';

function AdminPanel() {
  const [itemType, setItemType] = useState('laptop');
  const [imageItem, setImageItem] = useState('');
  const [itemBrand, setItemBrand] = useState('');
  const [itemModel, setItemModel] = useState('');
  const [itemStorage, setItemStorage] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const addItem = async () => {
    const docRef = await addDoc(collection(db, 'items'), {
      type: itemType,
      image: imageItem,
      brand: itemBrand,
      model: itemModel,
      storage: itemStorage,
      description: itemDescription,
      price: itemPrice,
    });
    setItemType('');
    setImageItem('');
    setItemBrand('');
    setItemModel('');
    setItemStorage('');
    setItemDescription('');
    setItemPrice(0);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const fileInput = useRef();
  const handleUpload = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, `${itemType}/${image.name}`);
    const snapshot = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(snapshot.ref);
    setImageUrl(url);
    fileInput.current.value = ''; // clear the file input field
  };
  return (
    <>
      <select
        value={itemType}
        onChange={(e) => {
          setItemType(e.target.value);
        }}
      >
        <option value="laptops">Laptops</option>
        <option value="cellphones">Cellphones</option>
        <option value="pads">Pads</option>
        <option value="watch">Watch</option>
        <option value="accessories">Accessories</option>
      </select>
      <input
        type="text"
        value={itemBrand}
        onChange={(e) => setItemBrand(e.target.value)}
        placeholder="Item brand"
      />
      <input
        type="text"
        value={itemModel}
        onChange={(e) => setItemModel(e.target.value)}
        placeholder="series"
      />
      <input
        type="text"
        value={itemStorage}
        onChange={(e) => setItemStorage(e.target.value)}
        placeholder="storage"
      />
      <input
        type="text"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
        placeholder="description"
      />
      <input
        type="text"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
        placeholder="price"
      />
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <button
        onClick={() => {
          handleUpload();
          addItem();
        }}
      >
        Add Item
      </button>

      <Items />
    </>
  );
}

export default AdminPanel;
