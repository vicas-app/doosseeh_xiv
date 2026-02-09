
import React from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface LoginPageProps {
  onNavigate: (page: Page) => void;
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate, onLogin }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-serif text-3xl">V</span>
          </div>
          <h1 className="text-4xl font-serif mb-3">Welcome Back</h1>
          <p className="text-gray-400">Sign in to your VogueHub account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input 
                type="email" 
                required
                className="w-full bg-gray-50 border-none outline-none rounded-2xl pl-14 pr-6 py-4 focus:ring-2 ring-black/5 transition-all" 
                placeholder="email@example.com" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center ml-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Password</label>
              <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-black hover:underline">Forgot?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input 
                type="password" 
                required
                className="w-full bg-gray-50 border-none outline-none rounded-2xl pl-14 pr-6 py-4 focus:ring-2 ring-black/5 transition-all" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <button className="w-full bg-black text-white py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors shadow-lg group">
            <span className="inline-flex items-center space-x-2">
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <button 
              onClick={() => onNavigate('signup')}
              className="font-bold text-black hover:underline"
            >
              Create one now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
