// src/pages/admin/ManageBillers.js
import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import { Link } from 'react-router-dom';

const ManageBillers = () => {
  // Hardcoded example data
  const billers = [
    { id: 1, name: 'Biller One', officeAddress: '123 Street' },
    { id: 2, name: 'Biller Two', officeAddress: '456 Avenue' },
  ];

  const handleRemove = (billerId) => {
    alert(`Removing Biller with ID: ${billerId}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl mb-4">Manage Billers</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Office Address</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {billers.map((biller) => (
              <tr key={biller.id}>
                <td className="border p-2">{biller.id}</td>
                <td className="border p-2">{biller.name}</td>
                <td className="border p-2">{biller.officeAddress}</td>
                <td className="border p-2 space-x-2">
                  <Link
                    to={`/admin/edit-biller/${biller.id}`}
                    className="text-blue-500 underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleRemove(biller.id)}
                    className="text-red-500 underline ml-2"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBillers;
