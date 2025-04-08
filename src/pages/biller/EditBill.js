// src/pages/biller/EditBill.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/common/Sidebar';

const EditBill = () => {
  const { billId } = useParams();
  const [billData, setBillData] = useState({
    consumerName: '',
    amount: '',
    dueDate: '',
    status: '',
  });

  useEffect(() => {
    // In a real scenario, fetch from an API, e.g.:
    // fetch(`/api/bills/${billId}`).then(res => ...)
    // We'll just hardcode sample data here
    const fakeBill = {
      consumerName: 'Consumer A',
      amount: '400',
      dueDate: '2025-05-10',
      status: 'Unpaid',
    };
    setBillData(fakeBill);
  }, [billId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert(
      `Updating Bill #${billId}:\n` +
      `Name: ${billData.consumerName}, Amount: ${billData.amount}, ` +
      `Due: ${billData.dueDate}, Status: ${billData.status}`
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl mb-4">Edit Bill (ID: {billId})</h2>
        <form onSubmit={handleUpdate} className="space-y-4 max-w-md">
          <div>
            <label className="block mb-1">Consumer Name</label>
            <input
              className="border w-full p-2"
              type="text"
              name="consumerName"
              value={billData.consumerName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Amount</label>
            <input
              className="border w-full p-2"
              type="number"
              name="amount"
              value={billData.amount}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Due Date</label>
            <input
              className="border w-full p-2"
              type="date"
              name="dueDate"
              value={billData.dueDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1">Status</label>
            <select
              className="border w-full p-2"
              name="status"
              value={billData.status}
              onChange={handleChange}
            >
              <option value="Unpaid">Unpaid</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Update Bill
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBill;
