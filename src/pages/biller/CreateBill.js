// src/pages/biller/CreateBill.js
import React, { useState } from 'react';
import Sidebar from '../../components/common/Sidebar';

const CreateBill = () => {
  const [consumerName, setConsumerName] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    alert(`Creating bill for ${consumerName}, amount: ${amount}, due: ${dueDate}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl mb-4">Create New Bill</h2>
        <form onSubmit={handleCreate} className="space-y-4 max-w-md">
          <div>
            <label className="block mb-1">Consumer Name</label>
            <input
              className="border w-full p-2"
              type="text"
              value={consumerName}
              onChange={(e) => setConsumerName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1">Amount</label>
            <input
              className="border w-full p-2"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1">Due Date</label>
            <input
              className="border w-full p-2"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
            Create Bill
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBill;
