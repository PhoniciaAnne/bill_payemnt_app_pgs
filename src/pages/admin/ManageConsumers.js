// src/pages/admin/ManageConsumers.js
import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import { Link } from 'react-router-dom';

const ManageConsumers = () => {
  // Hardcoded example data
  const consumers = [
    { id: 1, name: 'Consumer A', email: 'a@abc.com' },
    { id: 2, name: 'Consumer B', email: 'b@abc.com' },
  ];

  const handleRemove = (consumerId) => {
    alert(`Removing Consumer with ID: ${consumerId}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl mb-4">Manage Consumers</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {consumers.map((cons) => (
              <tr key={cons.id}>
                <td className="border p-2">{cons.id}</td>
                <td className="border p-2">{cons.name}</td>
                <td className="border p-2">{cons.email}</td>
                <td className="border p-2 space-x-2">
                  <Link
                    to={`/admin/edit-consumer/${cons.id}`}
                    className="text-blue-500 underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleRemove(cons.id)}
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

export default ManageConsumers;
