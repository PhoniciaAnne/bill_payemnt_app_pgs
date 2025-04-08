// src/pages/consumer/ConsumerDashboard.js
import React from 'react';
import Sidebar from '../../components/common/Sidebar';

const ConsumerDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl mb-4">Consumer Dashboard</h2>
        <p>
          View your bills, pay online, request edits to bills or profile, etc.
        </p>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
