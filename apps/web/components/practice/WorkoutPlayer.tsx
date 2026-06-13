'use client';

import React, { useState, useEffect } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Play, Pause, RotateCcw, ChevronRight, Check } from 'lucide-react';

export const WorkoutPlayer = () => {
  const [isActive, setIsOpen] = useState(false);
  const [timeLeft, setTime] = useState(45);
  const [isPaused, setPaused] = useState(true);

  useEffect(() => {
    let interval: any = null;
    if (!isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPaused, timeLeft]);

  if (!isActive) {
    return (
      <Button onClick={() => setIsOpen(true)} className="w-full">
        Почати тренування
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-bg-0 flex flex-col p-6 space-y-8">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Вправа 3/10</h2>
        <button onClick={() => setIsOpen(false)} className="glass p-2 rounded-full text-text-secondary">
          Завершити
        </button>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center space-y-8">
        <GlassCard className="w-full aspect-video bg-accent/10 flex items-center justify-center relative overflow-hidden">
          {/* Exercise animation placeholder */}
          <div className="w-24 h-24 rounded-full border-4 border-accent border-t-transparent animate-spin" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-2xl font-bold">Відтискання</h3>
            <p className="text-text-secondary">3 підходи × 15 разів</p>
          </div>
        </GlassCard>

        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-text-tertiary opacity-20" />
            <circle
              cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8"
              strokeDasharray={552.92} strokeDashoffset={552.92 * (1 - timeLeft / 45)}
              strokeLinecap="round" fill="transparent" className="text-accent transition-all duration-1000"
            />
          </svg>
          <span className="absolute text-5xl font-bold tabular-nums">{timeLeft}</span>
        </div>

        <div className="flex items-center space-x-6">
          <button onClick={() => setTime(45)} className="glass p-4 rounded-full text-text-secondary">
            <RotateCcw className="w-6 h-6" />
          </button>
          <button
            onClick={() => setPaused(!isPaused)}
            className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white shadow-lg"
          >
            {isPaused ? <Play className="w-10 h-10 fill-current ml-1" /> : <Pause className="w-10 h-10 fill-current" />}
          </button>
          <button className="glass p-4 rounded-full text-accent">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      <footer className="pb-8">
        <Button variant="secondary" className="w-full space-x-2">
          <Check className="w-5 h-5" />
          <span>Підхід виконано</span>
        </Button>
      </footer>
    </div>
  );
};
