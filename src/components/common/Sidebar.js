// src/components/common/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();

  // Fallback if no user is logged in
  if (!user) {
    return null;
  }

  // We'll define separate menu configs for each role
  const menuItemsByRole = {
    admin: [
      { to: '/admin/dashboard', label: 'Admin Dashboard' },
      { to: '/admin/billers', label: 'Manage Billers' },
      { to: '/admin/consumers', label: 'Manage Consumers' },
    ],
    biller: [
      { to: '/biller/dashboard', label: 'Biller Dashboard' },
      { to: '/biller/bills', label: 'All Bills' },
      { to: '/biller/create-bill', label: 'Create Bill' },
    ],
    consumer: [
      { to: '/consumer/dashboard', label: 'Consumer Dashboard' },
      { to: '/consumer/bills', label: 'My Bills' },
    ],
  };

  // Grab the correct links array based on role
  const menuItems = menuItemsByRole[user.role] || [];

  return (
    <div className="w-64 bg-gray-800 min-h-screen text-white p-4">
      <h2 className="text-xl font-bold mb-4 capitalize">{user.role} Menu</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="hover:text-yellow-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
