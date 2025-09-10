import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogs = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    date: "17",
    month: "Feb",
    category: "IT Services",
    title: "Simplify Streamline Succeed IT Solutions",
    excerpt: "Discover how modern IT solutions can transform your business operations and drive growth.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1200&q=80",
    date: "20",
    month: "May",
    category: "UI/UX Design",
    title: "Unlocking Potential Through Technology",
    excerpt: "Learn how exceptional UI/UX design creates seamless digital experiences that convert visitors to customers.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    date: "10",
    month: "Feb",
    category: "Cyber Security",
    title: "Supervisor Disapproved of Latest Work",
    excerpt: "Essential cybersecurity practices every business should implement to protect digital assets.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    date: "05",
    month: "Mar",
    category: "Web Development",
    title: "The Future of Modern Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    date: "12",
    month: "Apr",
    category: "Cloud Services",
    title: "Empowering Businesses With Cloud",
    excerpt: "How cloud computing is revolutionizing business operations and driving innovation.",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80",
    date: "08",
    month: "Jan",
    category: "AI / ML",
    title: "How AI is Changing Everything",
    excerpt: "The transformative impact of artificial intelligence across industries and daily life.",
  },
];

const BlogGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <Navbar />

      {/* Breadcrumb Section */}
      <section className="relative bg-cover bg-center py-24 text-white overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526378722484-cc5c5106d4a0?auto=format&fit=crop&w=1600&q=80')"
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></div>
        <div className="relative z-10 container mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-22 text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl max-w-2xl mx-auto mb-8 text-purple-100"
          >
            Insights, trends and news about technology and digital transformation
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Articles</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredCard(blog.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-white/70 backdrop-blur-md hover:shadow-2xl transition-all"
              >
                {/* Image with overlay */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-3 rounded-xl text-center shadow-lg">
                    <span className="block text-xl font-bold">{blog.date}</span>
                    <span className="text-sm uppercase tracking-wider">{blog.month}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    <a href={`/blog/${blog.id}`}>{blog.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-5 line-clamp-2">{blog.excerpt}</p>
                  <motion.a
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-cover bg-center text-white relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-indigo-900/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated With Our Latest News
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-indigo-100">
            Subscribe to our newsletter and never miss our latest articles, product updates, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
            />
            <motion.button
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default BlogGrid;
