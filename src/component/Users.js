import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = ({ setItemId }) => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const items = await data.json();
    setItems(items);
  }


  return (
    <div className='users'>
      {items.map(item => (
        <h2 key={item.id}>
          <Link onClick={() => setItemId(item.id)} to={`/users/${item.id}`}>
            {item.name}
          </Link>
        </h2>
      ))}

    </div>
  );
}

export default Users;
