import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    skills: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.username) {
        newErrors.username = 'Username is required';
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Dummy user data for demonstration
  const dummyUsers = [
    { 
      email: 'demo@example.com', 
      password: 'anypassword', 
      name: 'Demo User',
      username: 'demo_user',
      skills: 'JavaScript, React, Node.js'
    },
    { 
      email: 'test@test.com', 
      password: 'test123', 
      name: 'Test User',
      username: 'test_user',
      skills: 'Python, Django, PostgreSQL'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      if (isLogin) {
        // Check against dummy data for login
        const user = dummyUsers.find(u => u.email === formData.email && u.password === formData.password);
        
        if (user) {
          // Save dummy token and user data to localStorage
          localStorage.setItem('token', 'dummy-auth-token');
          localStorage.setItem('user', JSON.stringify({
            id: 1,
            name: user.name,
            email: user.email,
            username: user.username,
            skills: user.skills,
            role: 'developer'
          }));
          
          alert('Login successful! (Demo mode)');
          console.log('User logged in (demo):', user);
        } else {
          throw new Error('Invalid email or password');
        }
      } else {
        // For signup, just create a dummy user
        const newUser = {
          name: formData.name,
          email: formData.email,
          username: formData.username,
          skills: formData.skills,
          id: Date.now() // Generate a unique ID
        };
        
        // Save dummy token and user data to localStorage
        localStorage.setItem('token', 'dummy-auth-token-new');
        localStorage.setItem('user', JSON.stringify(newUser));
        
        alert('Account created successfully! (Demo mode)');
        console.log('New user created (demo):', newUser);
      }
    } catch (err) {
      alert(err.message || 'Authentication failed. Please try again.');
      console.error('Auth error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Side - Illustration */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-800 p-8 flex flex-col justify-center items-center text-white">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">CodeGemi</h1>
            <p className="text-blue-100">Where developers unite and collaborate</p>
          </div>
          
          <div className="w-full max-w-xs mb-6">
            <div className="bg-blue-500 rounded-lg p-4 mb-4 flex items-center">
              <div className="bg-white text-blue-600 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Code Together</p>
                <p className="text-sm text-blue-100">Collaborate in real-time</p>
              </div>
            </div>
            
            <div className="bg-blue-500 rounded-lg p-4 mb-4 flex items-center">
              <div className="bg-white text-blue-600 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Build Network</p>
                <p className="text-sm text-blue-100">Connect with developers</p>
              </div>
            </div>
            
            <div className="bg-blue-500 rounded-lg p-4 flex items-center">
              <div className="bg-white text-blue-600 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Portfolio Showcase</p>
                <p className="text-sm text-blue-100">Display your projects</p>
              </div>
            </div>
          </div>
          
          <div className="text-center text-blue-200 mt-4">
            <p>Join thousands of developers worldwide</p>
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="w-full md:w-3/5 bg-gray-800 p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {isLogin ? 'Sign In to Your Account' : 'Create Developer Account'}
            </h2>
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
            >
              {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
            </button>
          </div>
          
          <div className="mb-6">
            <button className="w-full flex items-center justify-center bg-white text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" width="24" height="24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          </div>
          
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-4 text-gray-400">or continue with email</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.username ? 'border-red-500' : 'border-gray-600'}`}
                      placeholder="johndoe"
                    />
                    {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username}</p>}
                  </div>
                </>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                  placeholder="name@company.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              
              {!isLogin && (
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-300 mb-1">Skills (optional)</label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="JavaScript, React, Node.js"
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.password ? 'border-red-500' : 'border-gray-600'}`}
                  placeholder="••••••••"
                />
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
              </div>
              
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-600'}`}
                    placeholder="••••••••"
                  />
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                </div>
              )}
            </div>
            
            {isLogin && (
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Remember me
                  </label>
                </div>
                
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg mt-6 font-medium hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : isLogin ? 'Sign in' : 'Create account'}
            </button>
          </form>
          
          {isLogin && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Demo Login: try <span className="text-indigo-400">demo@example.com</span> / <span className="text-indigo-400">anypassword</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Or try <span className="text-indigo-400">test@test.com</span> / <span className="text-indigo-400">test123</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;