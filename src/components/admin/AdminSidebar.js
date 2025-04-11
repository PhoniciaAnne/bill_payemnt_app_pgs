import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 min-h-screen text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/billers">Manage Billers</Link>
        </li>
        <li>
          <Link to="/admin/consumers">Manage Consumers</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
