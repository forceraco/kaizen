'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Trophy, Flame, Calendar, ChevronRight, Plus, Trash2, X } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function QuestsPage() {
  const { habits, addHabit, removeHabit } = useStore();
  const [newHabitName, setNewHabitName] = useState('');
  const [showAdd, setShowAdd] = useState(false);

  const challenges = [
    { id: 1, title: '30 днів без цукру', progress: 14, total: 30, color: 'text-accent' },
    { id: 2, title: 'Ранок о 6:00', progress: 5, total: 7, color: 'text-accent-2' },
  ];

  const handleAddHabit = () => {
    if (newHabitName.trim()) {
      addHabit(newHabitName);
      setNewHabitName('');
      setShowAdd(false);
    }
  };

  return (
    <div className="space-y-8 pb-20">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Квести та Дисципліна</h1>
        <button
          onClick={() => setShowAdd(true)}
          className="glass p-2 rounded-full text-accent"
        >
          <Plus className="w-6 h-6" />
        </button>
      </header>

      {showAdd && (
        <GlassCard className="p-6 space-y-4" strong>
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Нова звичка</h3>
            <button onClick={() => setShowAdd(false)}><X className="w-5 h-5 text-text-tertiary" /></button>
          </div>
          <input
            type="text"
            value={newHabitName}
            onChange={(e) => setNewHabitName(e.target.value)}
            placeholder="Назва звички..."
            className="w-full glass px-4 py-3 rounded-xl outline-none"
          />
          <Button onClick={handleAddHabit} className="w-full">Додати</Button>
        </GlassCard>
      )}

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Активні челенджі</h2>
          <span className="text-xs text-accent font-bold uppercase tracking-widest">Каталог</span>
        </div>
        <div className="space-y-4">
          {challenges.map(c => (
            <GlassCard key={c.id} className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">{c.title}</h3>
                <span className="text-xs font-semibold text-text-secondary">{c.progress}/{c.total} днів</span>
              </div>
              <div className="w-full h-2 glass rounded-full overflow-hidden">
                <div
                  className={`h-full bg-accent transition-all duration-500`}
                  style={{ width: `${(c.progress / c.total) * 100}%` }}
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Звички</h2>
          <Calendar className="w-5 h-5 text-text-tertiary" />
        </div>
        <div className="space-y-3">
          {habits.map(habit => (
            <GlassCard key={habit.id} className="p-4 flex items-center justify-between group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center">
                  <Flame className="w-5 h-5 text-warn" />
                </div>
                <span className="font-semibold">{habit.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-bold">{habit.streak} 🔥</span>
                <button
                  onClick={() => removeHabit(habit.id)}
                  className="text-danger opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <ChevronRight className="w-4 h-4 text-text-tertiary" />
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Досягнення</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex-shrink-0 w-20 h-20 glass rounded-full flex items-center justify-center">
              <Trophy className={`w-8 h-8 ${i === 1 ? 'text-gold' : 'text-text-tertiary opacity-50'}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
