import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import { Typography } from '@mui/material';

const AdminDashboard = () => {
  return (
    <div className="flex">
      {}
      <Sidebar />
      {}
      <div className="flex-1 p-4">
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>

        {}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-purple-500 text-white p-4 rounded shadow">
            Total Billers
          </div>
          <div className="bg-green-500 text-white p-4 rounded shadow">
            Total Consumers
          </div>
          <div className="bg-blue-500 text-white p-4 rounded shadow">
            Total Bills
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
