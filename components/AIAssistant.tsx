
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { getStylistAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hello! I'm your Doosseeh_xiv personal stylist. Need help picking an outfit for a special occasion?" }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    const advice = await getStylistAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'model', content: advice }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] transition-all">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center space-x-2 animate-bounce hover:animate-none"
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
          <span className="font-bold text-sm pr-2 hidden sm:inline">Stylist AI</span>
        </button>
      ) : (
        <div className="bg-white w-[calc(100vw-32px)] sm:w-[350px] md:w-[400px] h-[500px] md:h-[600px] rounded-[25px] md:rounded-[30px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-black p-4 md:p-5 flex justify-between items-center">
            <div className="flex items-center space-x-3">
               <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
               </div>
               <div>
                <span className="text-white font-serif font-bold italic block text-sm md:text-base">Doosseeh_xiv AI</span>
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Personal Stylist</span>
               </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-2 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 no-scrollbar bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-white text-black border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 text-black p-4 rounded-2xl rounded-tl-none text-xs flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce delay-100" />
                    <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce delay-200" />
                  </div>
                  <span className="font-medium">Curating your style...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 md:p-6 bg-white border-t border-gray-100 flex space-x-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Suggest an outfit for a gala..."
              className="flex-1 bg-gray-100 border-none outline-none rounded-full px-5 py-3 text-sm focus:ring-2 ring-black/5 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className={`bg-black text-white p-3 rounded-full hover:bg-zinc-800 transition-all transform active:scale-90 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
