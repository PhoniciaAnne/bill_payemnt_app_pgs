// src/pages/consumer/ConsumerBills.js
import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import { Link } from 'react-router-dom';

const ConsumerBills = () => {
  const bills = [
    { id: 201, amount: 500, status: 'Unpaid' },
    { id: 202, amount: 900, status: 'Paid' },
  ];

  const requestEdit = (billId) => {
    alert(`Requesting edit for Bill ID: ${billId}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl mb-4">My Bills</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Bill ID</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td className="border p-2">{bill.id}</td>
                <td className="border p-2">{bill.amount}</td>
                <td className="border p-2">{bill.status}</td>
                <td className="border p-2 space-x-2">
                  {bill.status === 'Unpaid' && (
                    <Link
                      to={`/consumer/pay-bill/${bill.id}`}
                      className="text-blue-600 underline"
                    >
                      Pay Now
                    </Link>
                  )}
                  <button
                    className="text-red-600 underline ml-2"
                    onClick={() => requestEdit(bill.id)}
                  >
                    Request Edit
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

export default ConsumerBills;
