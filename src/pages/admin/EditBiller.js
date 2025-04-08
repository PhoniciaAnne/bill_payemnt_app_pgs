// src/pages/admin/EditBiller.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/common/Sidebar';

const EditBiller = () => {
  const { id } = useParams();
  const [officeAddress, setOfficeAddress] = useState('');
  const [contactNo, setContactNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Updating Biller ID: ${id}\nAddress: ${officeAddress}\nContact: ${contactNo}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4">Edit Biller (ID: {id})</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <label className="block mb-1">Office Address</label>
            <input
              className="border w-full p-2"
              type="text"
              value={officeAddress}
              onChange={(e) => setOfficeAddress(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Contact Number</label>
            <input
              className="border w-full p-2"
              type="text"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBiller;
