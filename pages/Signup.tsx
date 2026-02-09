
import React from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface SignupPageProps {
  onNavigate: (page: Page) => void;
  onSignup: () => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onNavigate, onSignup }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-serif text-3xl">V</span>
          </div>
          <h1 className="text-4xl font-serif mb-3">Join the Avenue</h1>
          <p className="text-gray-400">Create your account for exclusive access</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input 
                type="text" 
                required
                className="w-full bg-gray-50 border-none outline-none rounded-2xl pl-14 pr-6 py-4 focus:ring-2 ring-black/5 transition-all" 
                placeholder="John Doe" 
              />
            </div>
          </div>
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
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Password</label>
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
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <button 
              onClick={() => onNavigate('login')}
              className="font-bold text-black hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
