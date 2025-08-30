import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      tag: "Hosting Service",
      date: "MARCH 24, 2024",
      title: "Transforming Challenges into Opportunities",
      authorImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      authorName: "Admin",
      authorRole: "Co, Founder"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      tag: "Technology",
      date: "MARCH 14, 2024",
      title: "10 Popular Tips for Growing Your Online Business",
      authorImg: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      authorName: "Admin",
      authorRole: "Co, Founder"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      tag: "Creative",
      date: "MARCH 29, 2024",
      title: "How to Secure Your Digital Presence in 2024",
      authorImg: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      authorName: "Admin",
      authorRole: "Co, Founder"
    }
  ];

  return (
    <section className="blog-section py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="row">
          <div className="col-12 flex justify-center">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                <span className="text-indigo-600 font-medium">Blog & News</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured News And Insights</h2>
              <p className="text-lg text-gray-600">Stay updated with the latest trends and insights in technology</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="blog-card-thumb overflow-hidden">
                <img 
                  src={post.image} 
                  alt="blog post" 
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="blog-card-body p-6">
                <div className="blog-meta flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                  <a href="#">{post.title}</a>
                </h3>
                
                <div className="author-meta flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <img 
                        src={post.authorImg} 
                        alt={post.authorName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="text-sm font-medium text-gray-900">{post.authorName}</h6>
                      <p className="text-xs text-gray-500">{post.authorRole}</p>
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center transition-all duration-300 hover:bg-indigo-600 hover:text-white group/link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/link:translate-x-0.5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;