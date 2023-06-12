import React, { useState, useRef, useEffect } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../config/firebase'; // make sure to import db from your Firebase config
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import Items from './Items';

function AdminPanel({ items, setItems }) {
  const [itemType, setItemType] = useState('laptop');
  const [itemBrand, setItemBrand] = useState('');
  const [itemModel, setItemModel] = useState('');
  const [itemStorage, setItemStorage] = useState('');
  const [itemColor, setItemColor] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const addItem = async () => {
    await addDoc(collection(db, 'items'), {
      type: itemType,
      image: imageUrl,
      brand: itemBrand,
      model: itemModel,
      storage: itemStorage,
      color: itemColor,
      description: itemDescription,
      price: itemPrice,
    });

    // Refresh items after adding a new item.
    const data = await getDocs(collection(db, 'items'));
    setItems(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );

    setItemType('');
    setItemBrand('');
    setItemModel('');
    setItemStorage('');
    setItemColor('');
    setItemDescription('');
    setItemPrice(0);
  };

  const deleteData = async (id) => {
    await deleteDoc(doc(db, 'items', id));
    const data = await getDocs(collection(db, 'items'));
    console.log(`data: ${data} and docs: ${data.docs}`);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const fileInput = useRef();
  const handleUpload = async () => {
    const storageRef = ref(getStorage(), `${itemType}/${image.name}`);
    const snapshot = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(snapshot.ref);
    setImageUrl(url);
    fileInput.current.value = ''; // clear the file input field
  };
  useEffect(() => {
    if (imageUrl !== '') {
      addItem();
    }
  }, [imageUrl]);

  const deleteImage = (imagePath) => {
    deleteObject(ref(getStorage(), imagePath));
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
        value={itemColor}
        onChange={(e) => setItemColor(e.target.value)}
        placeholder="color"
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
        onClick={async () => {
          await handleUpload();
        }}
      >
        Add Item
      </button>
      <Items
        items={items}
        deleteItemHandle={deleteData}
        deleteImageHandle={deleteImage}
      />
    </>
  );
}

export default AdminPanel;
