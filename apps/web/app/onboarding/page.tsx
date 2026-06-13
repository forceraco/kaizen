'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { PILLARS } from '@apex/core';

const STEPS = [
  'Welcome',
  'Goals',
  'Baseline',
  'Rhythm',
  'Permissions',
  'Ready'
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [goals, setGoals] = useState<string[]>([]);
  const router = useRouter();

  const nextStep = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      router.push('/today');
    }
  };

  const toggleGoal = (id: string) => {
    setGoals(prev => prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
      <div className="w-full flex justify-between px-2">
        {STEPS.map((_, i) => (
          <div key={i} className={`h-1 flex-1 mx-1 rounded-full ${i <= step ? 'bg-accent' : 'bg-text-tertiary'}`} />
        ))}
      </div>

      <GlassCard className="w-full p-8 space-y-6 min-h-[400px] flex flex-col justify-center items-center text-center">
        {step === 0 && (
          <>
            <h1 className="text-3xl font-bold">Вітаємо в APEX</h1>
            <p className="text-text-secondary italic">"Один ритуал щодня."</p>
            <p className="text-text-secondary">Тренуй тіло і характер. Стань впевненим у спілкуванні.</p>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold">Які твої цілі?</h2>
            <div className="grid grid-cols-2 gap-4 w-full">
              {PILLARS.map(p => (
                <button
                  key={p.id}
                  onClick={() => toggleGoal(p.id)}
                  className={`p-3 rounded-xl border transition-all text-sm ${goals.includes(p.id) ? 'bg-accent border-accent text-white' : 'glass border-stroke-glass text-text-secondary'}`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </>
        )}

        {step > 1 && step < 5 && (
          <>
            <h2 className="text-2xl font-bold">{STEPS[step]}</h2>
            <p className="text-text-secondary">Налаштування персонального плану...</p>
          </>
        )}

        {step === 5 && (
          <>
            <h2 className="text-2xl font-bold text-accent-2">Все готово!</h2>
            <p className="text-text-secondary">Твій план на сьогодні готовий.</p>
          </>
        )}

        <Button onClick={nextStep} className="mt-8 w-full">
          {step === 5 ? 'Почати' : 'Далі'}
        </Button>
      </GlassCard>
    </div>
  );
}
