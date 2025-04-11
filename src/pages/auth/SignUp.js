import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('consumer');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing up as ${role} with email: ${email}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96">
        <CardContent>
          <Typography variant="h5" className="mb-4 text-center">
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div>
              <label className="block mb-1">Role</label>
              <select
                className="w-full border border-gray-300 rounded p-2"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="biller">Biller</option>
                <option value="consumer">Consumer</option>
              </select>
            </div>

            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
