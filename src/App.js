// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';

// Navbar (common to everyone)
import Navbar from './components/common/Navbar';

// Auth Pages
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageBillers from './pages/admin/ManageBillers';
import ManageConsumers from './pages/admin/ManageConsumers';
import EditBiller from './pages/admin/EditBiller'; // If needed, also add EditConsumer

// Biller Pages
import BillerDashboard from './pages/biller/BillerDashboard';
import BillerBills from './pages/biller/BillerBills';
import CreateBill from './pages/biller/CreateBill';
import EditBill from './pages/biller/EditBill';

// Consumer Pages
import ConsumerDashboard from './pages/consumer/ConsumerDashboard';
import ConsumerBills from './pages/consumer/ConsumerBills';
import PayBill from './pages/consumer/PayBill';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Common Navbar at the top */}
        <Navbar />

        <Routes>
          {/* Public routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* -------------------- ADMIN routes -------------------- */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/billers"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ManageBillers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/consumers"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ManageConsumers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/edit-biller/:id"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <EditBiller />
              </ProtectedRoute>
            }
          />
          {/* Add more admin routes as needed, e.g. EditConsumer */}

          {/* -------------------- BILLER routes -------------------- */}
          <Route
            path="/biller/dashboard"
            element={
              <ProtectedRoute allowedRoles={['biller']}>
                <BillerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/biller/bills"
            element={
              <ProtectedRoute allowedRoles={['biller']}>
                <BillerBills />
              </ProtectedRoute>
            }
          />
          <Route
            path="/biller/create-bill"
            element={
              <ProtectedRoute allowedRoles={['biller']}>
                <CreateBill />
              </ProtectedRoute>
            }
          />
          <Route
            path="/biller/edit-bill/:billId"
            element={
              <ProtectedRoute allowedRoles={['biller']}>
                <EditBill />
              </ProtectedRoute>
            }
          />

          {/* -------------------- CONSUMER routes -------------------- */}
          <Route
            path="/consumer/dashboard"
            element={
              <ProtectedRoute allowedRoles={['consumer']}>
                <ConsumerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/consumer/bills"
            element={
              <ProtectedRoute allowedRoles={['consumer']}>
                <ConsumerBills />
              </ProtectedRoute>
            }
          />
          <Route
            path="/consumer/pay-bill/:billId"
            element={
              <ProtectedRoute allowedRoles={['consumer']}>
                <PayBill />
              </ProtectedRoute>
            }
          />

          {/* -------------------- Fallback (404) -------------------- */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-10">
                404 Not Found
              </h1>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
