'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, CheckCircle, Bookmark, Share2 } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const { toggleBookmark, bookmarks } = useStore();
  const lessonId = params.lessonId as string;
  const isBookmarked = bookmarks.includes(lessonId);

  return (
    <div className="space-y-8 pb-32">
      <header className="flex justify-between items-center">
        <button onClick={() => router.back()} className="glass p-2 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex space-x-2">
          <button
            onClick={() => toggleBookmark(lessonId)}
            className={`glass p-2 rounded-full transition-colors ${isBookmarked ? 'text-accent bg-accent/10' : 'text-text-secondary'}`}
          >
            <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
          <button className="glass p-2 rounded-full"><Share2 className="w-5 h-5" /></button>
        </div>
      </header>

      <article className="space-y-6">
        <div className="space-y-2">
          <p className="text-accent text-xs font-bold uppercase tracking-widest underline decoration-2 underline-offset-4">Урок 3 • Комунікація</p>
          <h1 className="text-3xl font-bold tracking-tight">Мистецтво першого враження</h1>
        </div>

        <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-4 text-lg">
          <p>
            Перші 7 секунд зустрічі визначають 90% подальшого ставлення до вас.
            Це не магія, а біологія. Мозок миттєво зчитує мову тіла, тон голосу та впевненість.
          </p>
          <h3 className="text-text-primary font-bold text-xl mt-8">Ключові аспекти:</h3>
          <ul className="list-none space-y-4 mt-4">
            {[
              { label: 'Зоровий контакт', desc: 'правило 70/30' },
              { label: 'Відкрита поза', desc: 'руки поза кишенями' },
              { label: 'Щира посмішка', desc: 'стримана, але тепла' }
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
                <div>
                  <span className="text-text-primary font-bold">{item.label}</span>
                  <span className="text-text-tertiary"> — {item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <GlassCard className="p-6 border-accent/30 bg-accent/5 space-y-4 mt-12" strong>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <h3 className="font-bold text-accent uppercase tracking-widest text-xs">Практичне завдання</h3>
        </div>
        <p className="text-text-primary font-medium italic">
          "Сьогодні під час спілкування з незнайомою людиною (бариста, кур'єр, колега)
          втримуйте зоровий контакт на 2 секунди довше, ніж зазвичай, та додайте легку посмішку."
        </p>
        <Button className="w-full space-x-2 py-4 text-sm font-bold uppercase tracking-widest">
          <CheckCircle className="w-5 h-5" />
          <span>Позначити завершеним</span>
        </Button>
      </GlassCard>
    </div>
  );
}
