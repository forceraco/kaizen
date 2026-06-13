import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Settings, Edit2, Share2, Award } from 'lucide-react';
import { PILLARS } from '@apex/core';

export default function ProfilePage() {
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
          <h2 className="text-xl font-bold">Георгій Марченко</h2>
          <p className="text-xs text-text-secondary uppercase tracking-widest">Рівень 14 • Оптимізатор</p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-center">Карта сил</h2>
        <GlassCard className="aspect-square w-full p-8 flex items-center justify-center">
          <div className="relative w-full h-full border border-stroke-glass rounded-full flex items-center justify-center">
            {PILLARS.map((p, i) => (
              <div
                key={p.id}
                className="absolute text-[8px] font-bold text-text-tertiary"
                style={{
                  transform: `rotate(${i * (360 / PILLARS.length)}deg) translateY(-80px)`
                }}
              >
                {p.name.split(' ')[0]}
              </div>
            ))}
            <div className="w-1/2 h-1/2 bg-accent/30 rounded-full blur-xl" />
            <Award className="w-12 h-12 text-accent" />
          </div>
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
