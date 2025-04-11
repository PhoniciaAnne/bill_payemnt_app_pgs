import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { TextField, Button, Card, CardContent, Typography, Alert } from '@mui/material';

const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMsg('');

    
    if (email === 'admin@abc.com' && password === 'admin123') {
      login('admin', 'AdminUser');
      return navigate('/admin/dashboard');
    }

    if (email === 'biller@abc.com' && password === 'biller123') {
      login('biller', 'BillerUser');
      return navigate('/biller/dashboard');
    }

    if (email === 'consumer@abc.com' && password === 'consumer123') {
      login('consumer', 'ConsumerUser');
      return navigate('/consumer/dashboard');
    }

    setErrorMsg('Invalid credentials, please try again.');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96">
        <CardContent>
          <Typography variant="h5" className="mb-4 text-center">
            Sign In
          </Typography>
          {errorMsg && <Alert severity="error" className="mb-4">{errorMsg}</Alert>}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <TextField
              label="Email"
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

            <Button type="submit" variant="contained" color="primary">
              Sign In
            </Button>

            {}
            <Typography variant="body2" className="mt-2">
              <strong>Test Logins</strong><br />
              Admin: admin@abc.com / admin123 <br />
              Biller: biller@abc.com / biller123 <br />
              Consumer: consumer@abc.com / consumer123
            </Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
