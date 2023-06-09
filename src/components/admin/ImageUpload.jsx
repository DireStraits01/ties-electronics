import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function ImageUpload({ folderType }) {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, `${folderType}/${image.name}`);
    const snapshot = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(snapshot.ref);
    setImageUrl(url);
  };
  return (
    <>
      <div>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload</button>
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>
    </>
  );
}

export default ImageUpload;
