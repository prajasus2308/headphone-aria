
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

type ChatMode = 'fast' | 'pro' | 'thinking';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>('pro');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let modelName = 'gemini-3-pro-preview';
      let config: any = {
        systemInstruction: "You are the Aria Soundworks Concierge, a luxury audio assistant. You are sophisticated, helpful, and concise. You help users understand the beauty of quiet, high-fidelity sound and the Aria lifestyle.",
      };

      if (mode === 'fast') {
        modelName = 'gemini-flash-lite-latest';
      } else if (mode === 'thinking') {
        config.thinkingConfig = { thinkingBudget: 32768 };
      }

      const response = await ai.models.generateContent({
        model: modelName,
        contents: userMessage,
        config: config,
      });

      const aiText = response.text || "I apologize, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "The service is currently adjusting its frequency. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-deep-taupe text-warm-cream flex items-center justify-center shadow-2xl hover:bg-earthy-brown transition-all duration-300 transform hover:scale-110 active:scale-95 group"
      >
        <span className={`material-symbols-outlined transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`}>
          {isOpen ? 'close' : 'chat_bubble'}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[550px] bg-warm-cream/95 backdrop-blur-xl border border-earthy-brown/20 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-6 bg-soft-sand/50 border-b border-earthy-brown/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-earthy-brown">filter_vintage</span>
                <span className="font-bold tracking-widest text-deep-taupe uppercase text-sm">Aria Concierge</span>
              </div>
              <div className="flex bg-warm-cream rounded-full p-1 border border-earthy-brown/10">
                {(['fast', 'pro', 'thinking'] as ChatMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                      mode === m ? 'bg-deep-taupe text-warm-cream shadow-sm' : 'text-earthy-brown/60 hover:text-earthy-brown'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-earthy-brown/60 uppercase tracking-widest font-bold">
              {mode === 'fast' && '⚡ Fast Mode Active'}
              {mode === 'pro' && '✨ Pro Excellence Active'}
              {mode === 'thinking' && '🧠 Deep Thinking Active'}
            </p>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 scroll-smooth">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 opacity-60">
                <span className="material-symbols-outlined text-4xl text-earthy-brown">waves</span>
                <p className="text-sm font-medium text-earthy-brown px-10 italic">
                  "How can I help you find your perfect frequency today?"
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-3xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-muted-clay text-white rounded-tr-none' 
                    : 'bg-soft-sand/80 text-deep-taupe rounded-tl-none border border-earthy-brown/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-soft-sand/80 px-5 py-3 rounded-3xl rounded-tl-none border border-earthy-brown/5 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-earthy-brown/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-earthy-brown/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-earthy-brown/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 pt-2">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Aria..."
                className="w-full bg-soft-sand/50 border-none rounded-full px-6 py-4 text-sm focus:ring-2 focus:ring-muted-clay/30 placeholder:text-earthy-brown/40 text-deep-taupe"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 w-10 h-10 bg-deep-taupe text-warm-cream rounded-full flex items-center justify-center hover:bg-earthy-brown transition-colors disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-xl">arrow_upward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
