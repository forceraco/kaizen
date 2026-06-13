'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PILLARS } from '@apex/core';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, Play, Clock, BarChart } from 'lucide-react';

export default function PillarPage() {
  const params = useParams();
  const router = useRouter();
  const pillarId = params.pillarId as string;
  const pillar = PILLARS.find(p => p.id === pillarId);

  if (!pillar) return <div>Pillar not found</div>;

  const courses = [
    { id: 'foundation', title: 'Основи та впевненість', lessons: 8, time: '2 год', level: 'Початківець' },
    { id: 'advanced', title: 'Майстерність комунікації', lessons: 12, time: '5 год', level: 'Середній' },
  ];

  return (
    <div className="space-y-8 pb-20">
      <header className="flex items-center space-x-4">
        <button onClick={() => router.back()} className="glass p-2 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">{pillar.name}</h1>
      </header>

      <section className="relative h-48 rounded-3xl overflow-hidden glass">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent-2/30" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white font-semibold text-lg">{pillar.description}</p>
          <div className="mt-2 w-full h-1.5 glass rounded-full overflow-hidden">
            <div className="h-full bg-accent w-1/4" />
          </div>
          <p className="text-white/70 text-xs mt-1">25% пройдено</p>
        </div>
      </section>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Курси</h2>
        {courses.map(course => (
          <GlassCard key={course.id} className="p-4 flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold">{course.title}</h3>
              <div className="flex items-center space-x-3 text-xs text-text-secondary">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.time}</span>
                <span className="flex items-center gap-1"><BarChart className="w-3 h-3" /> {course.level}</span>
              </div>
            </div>
            <Button
              size="sm"
              className="rounded-xl"
              onClick={() => router.push(`/academy/${pillarId}/${course.id}/intro`)}
            >
              <Play className="w-4 h-4 fill-current" />
            </Button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
