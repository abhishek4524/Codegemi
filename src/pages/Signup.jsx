import React, { useState } from 'react';

const HireMe = () => {
  const [step, setStep] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hiringNeeds: 'Full-time'
  });

  const skillCategories = [
    {
      title: "Not sure, need advice",
      skills: ["React", "Node.js"],
      icon: "💡"
    },
    {
      title: "Mobile Development",
      skills: ["Android", "Java", "Swift (for iOS)", "React Native"],
      icon: "📱"
    },
    {
      title: "Web Development",
      skills: ["PHP", "Ruby on Rails", "Angular", "Vue.js", "Go"],
      icon: "🌐"
    },
    {
      title: "Data & AI",
      skills: ["Data Engineering", "Machine Learning", "Python", "Scala"],
      icon: "🤖"
    }
  ];

  const availableDates = [
    15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 29, 30
  ];

  const timeSlots = [
    "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM", "3:00 AM"
  ];

  const handleSkillToggle = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-6 px-8 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-lg mr-3">
              <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 14H11C7.757 14 5 11.243 5 8V6H3V8C3 12.079 6.02 15.446 10 15.938V18H6V20H18V18H14V15.938C17.98 15.446 21 12.079 21 8V6H19V8C19 11.243 16.243 14 13 14Z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white">CODEGEMI</h1>
          </div>
          <div className="text-white text-sm bg-indigo-700 px-3 py-1 rounded-full">
            Step {step} of 3
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-gradient-to-b from-indigo-700 to-purple-600 p-8 text-white hidden md:block">
            <h2 className="text-2xl font-bold mb-6">Find Elite Developers</h2>
            <p className="mb-6">Connect with the top 1% of software talent. Our developers are pre-vetted and ready to join your team.</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-indigo-500 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Pre-vetted talent</span>
              </div>
              <div className="flex items-center">
                <div className="bg-indigo-500 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Time zone aligned</span>
              </div>
              <div className="flex items-center">
                <div className="bg-indigo-500 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Flexible engagement</span>
              </div>
            </div>
            
            <div className="bg-indigo-800 p-4 rounded-lg mt-10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mr-3">
                  <span className="text-sm">JD</span>
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-indigo-300 text-sm">CTO, TechStart Inc.</p>
                </div>
              </div>
              <p className="text-sm italic">"CodeGemi provided us with exceptional developers who integrated seamlessly with our team. The quality is outstanding!"</p>
            </div>
          </div>
          
          <div className="md:w-3/5 p-8">
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Let's find your developers</h2>
                <p className="text-gray-600 mb-6">Select at least one skill to get started</p>
                
                <div className="space-y-6 mb-8">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="border-l-4 border-indigo-500 pl-4 py-2">
                      <h3 className="font-medium text-gray-700 mb-2 flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <button
                            key={skillIndex}
                            type="button"
                            onClick={() => handleSkillToggle(skill)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                              selectedSkills.includes(skill)
                                ? 'bg-indigo-100 text-indigo-700 border border-indigo-300 shadow-sm'
                                : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                            }`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Enter other skills (100+ available)</h3>
                  <input 
                    type="text" 
                    placeholder="Add skills" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your work email</label>
                    <input 
                      type="email" 
                      placeholder="name@company.com" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={formData.email}
                      onChange={handleInputChange}
                      name="email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                    <div className="flex">
                      <select className="px-4 py-3 border border-gray-300 rounded-l-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <input 
                        type="tel" 
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        value={formData.phone}
                        onChange={handleInputChange}
                        name="phone"
                      />
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
                >
                  Continue to Scheduling
                </button>
              </div>
            )}
            
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Partner with CodeGemi</h2>
                <p className="text-gray-600 mb-6">30 min • Select a Date & Time</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">September 2025</h3>
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                      <div key={day} className="text-center text-sm font-medium text-gray-500">{day}</div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7].map(day => (
                      <div key={day} className="text-center py-2 text-gray-400">{day}</div>
                    ))}
                    {[8, 9, 10, 11, 12, 13, 14].map(day => (
                      <div key={day} className="text-center py-2 text-gray-400">{day}</div>
                    ))}
                    {availableDates.map(day => (
                      <button
                        key={day}
                        onClick={() => handleDateSelect(day)}
                        className={`text-center py-2 rounded-full transition-all ${
                          selectedDate === day
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                    {[21, 28].map(day => (
                      <div key={day} className="text-center py-2 text-gray-400">{day}</div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time zone</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option>India Standard Time (IST)</option>
                    <option>Pacific Standard Time (PST)</option>
                    <option>Eastern Standard Time (EST)</option>
                  </select>
                </div>
                
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-2 text-gray-600 hover:text-gray-800 focus:outline-none flex items-center"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!selectedDate}
                    className={`px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                      selectedDate
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Continue to Details
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Partner with CodeGemi</h2>
                <p className="text-gray-600 mb-2">30 min • {selectedTime || '12:30am'} - 1:00am, Tuesday, September {selectedDate || 16}, 2025</p>
                <p className="text-gray-500 text-sm mb-6">India Standard Time</p>
                
                <h3 className="text-lg font-medium text-gray-700 mb-4">Enter Details</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={formData.name}
                      onChange={handleInputChange}
                      name="name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={formData.email}
                      onChange={handleInputChange}
                      name="email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Add Guests</label>
                    <input 
                      type="text" 
                      placeholder="Add email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your hiring needs *</label>
                    <div className="flex space-x-6 mt-2">
                      <label className="inline-flex items-center">
                        <input 
                          type="radio" 
                          className="form-radio text-indigo-600"
                          name="hiringNeeds"
                          value="Full-time"
                          checked={formData.hiringNeeds === 'Full-time'}
                          onChange={handleInputChange}
                        />
                        <span className="ml-2">Full-time</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input 
                          type="radio" 
                          className="form-radio text-indigo-600"
                          name="hiringNeeds"
                          value="Part-time"
                          checked={formData.hiringNeeds === 'Part-time'}
                          onChange={handleInputChange}
                        />
                        <span className="ml-2">Part-time</span>
                      </label>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-6">
                    By proceeding, you confirm that you have read and agree to CodeGemi's Terms of Use and Privacy Notice.
                  </p>
                  
                  <div className="flex justify-between pt-6">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-2 text-gray-600 hover:text-gray-800 focus:outline-none flex items-center"
                    >
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transition-all"
                    >
                      Schedule Meeting
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;