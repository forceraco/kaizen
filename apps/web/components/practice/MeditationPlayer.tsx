'use client';

import React, { useState, useEffect } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Play, Pause, X, Wind, Headset } from 'lucide-react';

export const MeditationPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: any = null;
    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress(p => p + 0.1);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0D12] text-white flex flex-col items-center justify-center p-8 space-y-12">
      <button className="absolute top-8 right-8 glass p-2 rounded-full text-white/50">
        <X className="w-6 h-6" />
      </button>

      <div className="text-center space-y-2">
        <p className="text-accent font-bold uppercase tracking-widest text-xs">Медитація</p>
        <h1 className="text-3xl font-bold">Фокус та Присутність</h1>
      </div>

      {/* Breathing Circle */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className={`absolute inset-0 bg-accent/20 rounded-full blur-3xl transition-all duration-[4000ms] ${isPlaying ? 'scale-150 opacity-60' : 'scale-100 opacity-20'}`} />
        <div className={`w-48 h-48 border-2 border-accent/30 rounded-full flex items-center justify-center transition-all duration-[4000ms] ease-in-out ${isPlaying ? 'scale-125' : 'scale-90'}`}>
          <div className={`w-32 h-32 bg-accent/40 rounded-full flex items-center justify-center transition-all duration-[4000ms] ease-in-out ${isPlaying ? 'scale-110' : 'scale-75'}`}>
            <Wind className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      <div className="w-full space-y-4">
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-accent transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex justify-between text-[10px] font-bold text-white/40 tabular-nums">
          <span>04:20</span>
          <span>10:00</span>
        </div>
      </div>

      <div className="flex items-center space-x-12">
        <button className="text-white/40"><Headset className="w-6 h-6" /></button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-24 h-24 glass-strong rounded-full flex items-center justify-center text-white border-white/10"
        >
          {isPlaying ? <Pause className="w-12 h-12 fill-current" /> : <Play className="w-12 h-12 fill-current ml-2" />}
        </button>
        <button className="text-white/40"><Wind className="w-6 h-6" /></button>
      </div>

      <p className="text-white/60 text-sm italic">"Вдихайте спокій, видихайте напругу..."</p>
    </div>
  );
};
