import React, { useEffect, useState } from 'react';

const User = ({ itemId, setItemId }) => {

  let pathname = window.location.pathname;
  pathname = pathname[pathname.length - 1];
  useEffect(() => {
    fetchItem();
    setItemId(pathname);
  }, [itemId]);



  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${itemId}`);
    const item = await data.json();
    setItem(item);
  }
  return (
    <div className='users'>
      <h1>{item.name}</h1>
      <p>{item.email}</p>
    </div>
  );
}

export default User;