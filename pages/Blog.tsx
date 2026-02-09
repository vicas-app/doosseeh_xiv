
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <header className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">VogueHub Journal</h2>
          <h1 className="text-6xl font-serif mb-6">Inside the Fashion Avenue</h1>
          <p className="text-gray-500 max-w-xl mx-auto italic">Exploring the intersections of style, culture, and sustainable luxury in the modern world.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Featured Post */}
          <div className="md:col-span-12 group cursor-pointer">
            <div className="relative h-[600px] rounded-[60px] overflow-hidden mb-8">
              <img 
                src={BLOG_POSTS[0].image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Featured Post"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-end">
                <span className="bg-white/20 backdrop-blur-md w-fit px-4 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                  {BLOG_POSTS[0].category}
                </span>
                <h3 className="text-white text-5xl font-serif max-w-2xl mb-6 leading-tight">
                  {BLOG_POSTS[0].title}
                </h3>
                <div className="flex items-center space-x-6 text-white/60 text-sm">
                  <span className="font-bold">{BLOG_POSTS[0].author}</span>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Posts */}
          {BLOG_POSTS.slice(1).map(post => (
            <div key={post.id} className="md:col-span-6 group cursor-pointer">
              <div className="relative aspect-video rounded-[40px] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={post.title} 
                />
                <span className="absolute top-6 left-6 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  {post.category}
                </span>
              </div>
              <h4 className="text-3xl font-serif mb-4 group-hover:text-gray-600 transition-colors">{post.title}</h4>
              <p className="text-gray-500 mb-6 line-clamp-2 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{post.date}</span>
                <div className="flex items-center space-x-2 text-black font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
