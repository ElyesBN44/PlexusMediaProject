import React, { useEffect, useState } from 'react';
import ViewCardUsers_Admin from './ViewCardUsers_Admin';
import { fetchContacts } from '../../../../api/api_Admin/api_admin';

const ViewUsers_Admin = () => {
  const [viewList, setViewList] = useState([]); 

  const getallusers = async () => {
    try {
      console.log('Fetching users...');
      const data = await fetchContacts();
      console.log('Data:', data.Contacts);
      setViewList(data.Contacts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getallusers();
  }, []);

  
  console.log(viewList[0]);

  return (
    <div>
      {
        viewList.length > 0
          ? viewList.map((el) => <ViewCardUsers_Admin key={el.id} el={el} />)
          : <div>Loading...</div> 
      }
    </div>
  );
};

export default ViewUsers_Admin;