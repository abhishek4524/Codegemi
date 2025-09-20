import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  // Dummy user data for demonstration
  const dummyUsers = [
    { email: 'user@example.com', password: 'password123', name: 'Demo User' },
    { email: 'test@test.com', password: 'test123', name: 'Test User' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      // Check against dummy data
      const user = dummyUsers.find(u => u.email === email && u.password === password);
      
      if (user) {
        // Save dummy token and user data to localStorage
        localStorage.setItem('token', 'dummy-auth-token');
        localStorage.setItem('user', JSON.stringify({
          id: 1,
          name: user.name,
          email: user.email,
          role: 'customer'
        }));
        
        alert('Login successful! (Demo mode)');
        console.log('User logged in (demo):', user);
        
        // Redirect to dashboard or home page
        navigate('/');
      } else {
        throw new Error('Invalid email or password');
      }
      
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Left side with image and overlay */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-80"></div>
        </div>
        
        {/* Floating text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-16 text-white">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-4">Unlock Your Potential</h2>
            <p className="text-xl opacity-90">Join thousands of developers building the future with Codegemi</p>
          </div>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-4 md:p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              CODEGEMI
            </h1>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Where developers and companies connect</p>
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Demo credentials hint */}
          <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-4 text-sm">
            <p className="font-semibold">Demo Credentials:</p>
            <p>user@example.com / password123</p>
            <p>test@test.com / test123</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-evenly space-x-6 mb-6 border-b pb-4">
            <button className="font-medium text-blue-600 hover:text-blue-800 relative group text-sm md:text-base">
              Customers
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link to="/developer/login" className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-300 text-sm md:text-base">Developers</Link>
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <label className={`absolute left-4 transition-all duration-300 ${
                isFocused.email || email ? 'top-0 text-xs text-blue-600' : 'top-3 text-sm text-gray-500'
              }`}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            <div className="relative">
              <label className={`absolute left-4 transition-all duration-300 ${
                isFocused.password || password ? 'top-0 text-xs text-blue-600' : 'top-3 text-sm text-gray-500'
              }`}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
                className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors duration-300"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-300">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">or continue with</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" width="24" height="24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center border-t pt-4">
            <p className="text-xs text-gray-500">
              © 2025 Codegemi. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Don't have an account? <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300">Hire now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;