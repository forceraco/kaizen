import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Play, Headset, Wind, Dumbbell } from 'lucide-react';

export default function PracticePage() {
  return (
    <div className="space-y-6 pb-20">
      <h1 className="text-2xl font-bold">Практика</h1>

      <div className="flex space-x-2 glass p-1 rounded-full">
        <button className="flex-1 py-2 rounded-full bg-accent text-white font-semibold">Тіло</button>
        <button className="flex-1 py-2 rounded-full text-text-secondary font-semibold">Розум</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <GlassCard className="p-6 flex flex-col items-center space-y-4 text-center aspect-square justify-center">
          <Dumbbell className="w-10 h-10 text-accent" />
          <h3 className="font-bold">Тренування</h3>
        </GlassCard>
        <GlassCard className="p-6 flex flex-col items-center space-y-4 text-center aspect-square justify-center">
          <Headset className="w-10 h-10 text-accent" />
          <h3 className="font-bold">Медитація</h3>
        </GlassCard>
        <GlassCard className="p-6 flex flex-col items-center space-y-4 text-center aspect-square justify-center">
          <Wind className="w-10 h-10 text-accent" />
          <h3 className="font-bold">Дихання</h3>
        </GlassCard>
        <GlassCard className="p-6 flex flex-col items-center space-y-4 text-center aspect-square justify-center">
          <Play className="w-10 h-10 text-accent" />
          <h3 className="font-bold">Історія</h3>
        </GlassCard>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Рекомендовано</h2>
        <GlassCard className="overflow-hidden">
          <div className="h-32 bg-accent/20 flex items-center justify-center">
            <Play className="w-12 h-12 text-accent" />
          </div>
          <div className="p-4">
            <h3 className="font-bold">Ранкова мобільність</h3>
            <p className="text-xs text-text-secondary">15 хв • Початковий рівень</p>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
