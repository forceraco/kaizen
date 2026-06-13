'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Settings, Edit2, Share2, Award, Sun, Moon, Monitor } from 'lucide-react';
import { PILLARS } from '@apex/core';
import { useStore } from '@/store/useStore';
import { RadarChart } from '@/components/ui/RadarChart';

export default function ProfilePage() {
  const { user, theme, setTheme } = useStore();

  // Mock progress data for the radar chart
  const progressData = [65, 40, 85, 70, 55, 90, 60, 45, 80, 75];
  const pillarLabels = PILLARS.map(p => p.name);

  return (
    <div className="space-y-8 pb-20">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Мій Профіль</h1>
        <Settings className="w-6 h-6 text-text-secondary" />
      </header>

      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full glass border-2 border-accent p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-accent-2" />
          </div>
          <button className="absolute bottom-0 right-0 p-1 bg-accent rounded-full text-white">
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-xs text-text-secondary uppercase tracking-widest">Рівень {user.level} • Оптимізатор</p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Налаштування теми</h2>
        <div className="flex space-x-2 glass p-1 rounded-full">
          {[
            { id: 'light', icon: Sun, label: 'Світла' },
            { id: 'dark', icon: Moon, label: 'Темна' },
            { id: 'system', icon: Monitor, label: 'Системна' },
          ].map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id as any)}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-full transition-all ${
                  theme === t.id ? 'bg-accent text-white font-semibold' : 'text-text-secondary'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs">{t.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-center">Карта сил</h2>
        <GlassCard className="aspect-square w-full flex items-center justify-center overflow-hidden">
          <RadarChart data={progressData} labels={pillarLabels} size={300} />
          <Award className="absolute w-10 h-10 text-accent opacity-20 pointer-events-none" />
        </GlassCard>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <GlassCard className="p-4 text-center">
          <p className="text-2xl font-bold">124</p>
          <p className="text-xs text-text-secondary">СЕСІЙ</p>
        </GlassCard>
        <GlassCard className="p-4 text-center">
          <p className="text-2xl font-bold">48г</p>
          <p className="text-xs text-text-secondary">ПРАКТИКИ</p>
        </GlassCard>
      </div>

      <button className="w-full glass border border-stroke-glass text-text-primary rounded-full px-6 py-3 font-semibold transition-all flex items-center justify-center space-x-2">
        <Share2 className="w-4 h-4" />
        <span>Поділитись прогресом</span>
      </button>
    </div>
  );
}
