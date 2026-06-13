'use client';

import React, { useState } from 'react';
import { GlassCard } from './ui/GlassCard';
import { X, Send, Sparkles } from 'lucide-react';

export const AICoach = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white shadow-lg z-40 active:scale-90 transition-transform"
      >
        <Sparkles className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center px-4 pb-4">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <GlassCard className="w-full max-w-md h-[70vh] flex flex-col overflow-hidden relative" strong>
        <header className="p-4 border-b border-stroke-glass flex justify-between items-center bg-accent/10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">AI</div>
            <span className="font-bold">APEX Коуч</span>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-text-secondary" />
          </button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          <div className="flex flex-col items-start">
            <div className="glass p-3 rounded-2xl rounded-tl-none text-sm max-w-[80%]">
              Привіт, Георгію! Як я можу допомогти тобі у твоєму розвитку сьогодні?
            </div>
          </div>
        </div>

        <footer className="p-4 border-t border-stroke-glass">
          <div className="relative">
            <input
              type="text"
              placeholder="Запитати коуча..."
              className="w-full glass pl-4 pr-12 py-3 rounded-full outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </footer>
      </GlassCard>
    </div>
  );
};
