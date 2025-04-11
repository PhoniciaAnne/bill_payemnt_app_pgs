import React from 'react';
import Sidebar from '../../components/common/Sidebar';

const BillerDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl mb-4">Biller Dashboard</h2>
        {}
        <div className="bg-yellow-300 p-4 rounded shadow mb-4">
          Overview: X Bills Generated, Y Paid, Z Unpaid
        </div>
      </div>
    </div>
  );
};

export default BillerDashboard;
