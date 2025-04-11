import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import { Link } from 'react-router-dom';

const BillerBills = () => {
  const bills = [
    { id: 101, consumerName: 'Consumer One', amount: 500, status: 'Unpaid' },
    { id: 102, consumerName: 'Consumer Two', amount: 1200, status: 'Paid' },
  ];

  const handleStatusChange = (billId, newStatus) => {
    alert(`Bill ID: ${billId} marked as ${newStatus}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl mb-4">All Bills</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Bill ID</th>
              <th className="border p-2">Consumer</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td className="border p-2">{bill.id}</td>
                <td className="border p-2">{bill.consumerName}</td>
                <td className="border p-2">{bill.amount}</td>
                <td className="border p-2">{bill.status}</td>
                <td className="border p-2 space-x-2">
                  <Link
                    to={`/biller/edit-bill/${bill.id}`}
                    className="text-blue-500 underline"
                  >
                    Edit
                  </Link>
                  {bill.status === 'Unpaid' ? (
                    <button
                      onClick={() => handleStatusChange(bill.id, 'Paid')}
                      className="text-green-600 underline ml-2"
                    >
                      Mark Paid
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatusChange(bill.id, 'Unpaid')}
                      className="text-red-600 underline ml-2"
                    >
                      Mark Unpaid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link
          to="/biller/create-bill"
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create New Bill
        </Link>
      </div>
    </div>
  );
};

export default BillerBills;
