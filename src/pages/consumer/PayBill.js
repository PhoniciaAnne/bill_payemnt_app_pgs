// src/pages/consumer/PayBill.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/common/Sidebar';

const PayBill = () => {
  const { billId } = useParams();

  const handlePay = (e) => {
    e.preventDefault();
    alert(`Processing payment for Bill ID: ${billId}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl mb-4">Pay Bill (ID: {billId})</h2>
        <form onSubmit={handlePay} className="space-y-4 max-w-md">
          <div>
            <label className="block mb-1">Amount to Pay</label>
            <input className="border w-full p-2" type="number" required />
          </div>
          <div>
            <label className="block mb-1">Payment Method</label>
            <select className="border w-full p-2">
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="netbanking">Net Banking</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayBill;
