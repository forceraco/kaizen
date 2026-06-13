'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { CheckCircle2, Flame, Bell, PartyPopper } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/Button';

export default function TodayPage() {
  const { rituals, toggleRitual, user } = useStore();

  const completedCount = rituals.filter(r => r.completed).length;
  const progress = Math.round((completedCount / rituals.length) * 100);
  const isAllDone = progress === 100;

  return (
    <div className="space-y-8 pb-20">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Доброго ранку, {user.name}</h1>
          <p className="text-text-secondary">Четвер, 12 Червня</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 glass px-3 py-1 rounded-full">
            <Flame className="w-4 h-4 text-warn fill-warn" />
            <span className="font-bold">{user.streak}</span>
          </div>
          <Bell className="w-6 h-6 text-text-secondary" />
        </div>
      </header>

      <section className="flex justify-center py-4">
        {isAllDone ? (
          <GlassCard className="w-64 h-64 flex flex-col items-center justify-center text-center p-6 space-y-4 border-accent-2/30 bg-accent-2/5" strong>
            <div className="w-20 h-20 bg-accent-2/20 rounded-full flex items-center justify-center text-accent-2">
              <PartyPopper className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Ти закрив день!</h2>
              <p className="text-sm text-text-secondary">Чудова робота. Твій стандарт підвищено.</p>
            </div>
          </GlassCard>
        ) : (
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96" cy="96" r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-text-tertiary opacity-20"
              />
              <circle
                cx="96" cy="96" r="88"
                stroke="currentColor"
                strokeWidth="12"
                strokeDasharray={552.92}
                strokeDashoffset={552.92 * (1 - progress / 100)}
                strokeLinecap="round"
                fill="transparent"
                className="text-accent-2 transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-bold">{progress}%</span>
              <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Прогрес</span>
            </div>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Денний ритуал</h2>
        <div className="space-y-3">
          {rituals.map((ritual) => (
            <GlassCard
              key={ritual.id}
              className={`p-4 flex items-center justify-between cursor-pointer transition-all active:scale-98 ${ritual.completed ? 'opacity-60' : ''}`}
              onClick={() => toggleRitual(ritual.id)}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${ritual.completed ? 'bg-accent-2/20 text-accent-2' : 'glass text-text-secondary'}`}>
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-semibold ${ritual.completed ? 'text-text-tertiary line-through' : 'text-text-primary'}`}>
                    {ritual.title}
                  </h3>
                  <p className="text-[10px] text-text-tertiary uppercase font-bold tracking-tighter">{ritual.type} • {ritual.time}</p>
                </div>
              </div>
              {!ritual.completed && <div className="w-6 h-6 rounded-full border-2 border-stroke-glass" />}
            </GlassCard>
          ))}
        </div>
      </section>

      <GlassCard className="p-4 bg-gradient-to-br from-accent/10 to-accent-2/10 border-accent/20">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">AI</div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Інсайт від AI-Коуча</p>
            <p className="text-xs text-text-secondary mt-1">Твій сон сьогодні був на 15% ефективнішим. Це чудовий час для складного тренування.</p>
          </div>
          <Button variant="ghost" size="sm" className="px-2 py-1 h-auto text-[10px]">ДЕТАЛІ</Button>
        </div>
      </GlassCard>
    </div>
  );
}
