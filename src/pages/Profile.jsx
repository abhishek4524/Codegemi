import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = () => {
      try {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user'); // ✅ Corrected
        
        if (!token) {
          setError('No authentication token found. Please log in.');
          setLoading(false);
          navigate('/login');
          return;
        }
        
        if (userData) {
          setUser(JSON.parse(userData));
        } else {
          setError('User data not found. Please log in again.');
        }
      } catch (err) {
        setError('Failed to load profile data.');
        console.error('Profile error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <div className="text-red-500 text-center font-medium">{error}</div>
          <button 
            onClick={() => navigate('/login')}
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-blue-600 px-6 py-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-blue-700 rounded-full h-24 w-24 flex items-center justify-center text-3xl font-bold">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="ml-6">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-blue-100">{user.email}</p>
                  <p className="text-blue-100 mt-1">{user.phone || 'No phone number'}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>
          
          {/* Profile Details */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{user.name || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="font-medium">{user.phone || 'Not provided'}</p>
                  </div>
                </div>
              </div>
              
              {/* Hiring Preferences */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Hiring Preferences</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Hiring Needs</p>
                    <p className="font-medium">{user.hiringNeeds || 'Not specified'}</p>
                  </div>
                  {user.meetingDate && (
                    <div>
                      <p className="text-sm text-gray-500">Preferred Meeting Date</p>
                      <p className="font-medium">{new Date(user.meetingDate).toLocaleDateString()}</p>
                    </div>
                  )}
                  {user.meetingTime && (
                    <div>
                      <p className="text-sm text-gray-500">Preferred Meeting Time</p>
                      <p className="font-medium">{user.meetingTime}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-gray-500">Timezone</p>
                    <p className="font-medium">{user.timezone || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills Section */}
            {user.skills && user.skills.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Guests Section */}
            {user.guests && user.guests.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Guests</h2>
                <ul className="divide-y divide-gray-200">
                  {user.guests.map((guest, index) => (
                    <li key={index} className="py-2">
                      <p className="text-gray-800">{guest}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="mt-8 flex justify-end space-x-4">
              <button 
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                onClick={() => navigate('/')}
              >
                Back to Home
              </button>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                onClick={() => alert('Edit profile functionality would go here')}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;