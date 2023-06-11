// import React from 'react';
// import { db } from './config/firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import React, { useState, useEffect } from 'react';
// import Items from './admin/Items';

// function ParentComponent() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getDocs(collection(db, 'items'));
//       console.log(data);
//       setItems(
//         data.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }))
//       );
//     };
//     fetchData();
//   }, []);
//   return (
//     <>
//       <Items items={items} />
//     </>
//   );
// }

// export default ParentComponent;
