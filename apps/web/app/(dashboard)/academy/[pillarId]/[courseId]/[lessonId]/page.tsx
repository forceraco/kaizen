'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, CheckCircle, Bookmark, Share2 } from 'lucide-react';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="space-y-8 pb-32">
      <header className="flex justify-between items-center">
        <button onClick={() => router.back()} className="glass p-2 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex space-x-2">
          <button className="glass p-2 rounded-full"><Bookmark className="w-5 h-5" /></button>
          <button className="glass p-2 rounded-full"><Share2 className="w-5 h-5" /></button>
        </div>
      </header>

      <article className="space-y-6">
        <div className="space-y-2">
          <p className="text-accent text-xs font-bold uppercase tracking-widest">Урок 3 • Комунікація</p>
          <h1 className="text-3xl font-bold">Мистецтво першого враження</h1>
        </div>

        <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-4">
          <p>
            Перші 7 секунд зустрічі визначають 90% подальшого ставлення до вас.
            Це не магія, а біологія. Мозок миттєво зчитує мову тіла, тон голосу та впевненість.
          </p>
          <h3 className="text-text-primary font-bold text-xl">Ключові аспекти:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Зоровий контакт (правило 70/30)</li>
            <li>Відкрита поза (руки поза кишенями)</li>
            <li>Щира, але стримана посмішка</li>
          </ul>
        </div>
      </article>

      <GlassCard className="p-6 border-accent/30 bg-accent/5 space-y-4">
        <h3 className="font-bold text-accent">Практичне завдання</h3>
        <p className="text-sm text-text-secondary italic">
          "Сьогодні під час спілкування з незнайомою людиною (бариста, кур'єр, колега)
          втримуйте зоровий контакт на 2 секунди довше, ніж зазвичай, та додайте легку посмішку."
        </p>
        <Button className="w-full space-x-2">
          <CheckCircle className="w-5 h-5" />
          <span>Позначити завершеним</span>
        </Button>
      </GlassCard>
    </div>
  );
}
