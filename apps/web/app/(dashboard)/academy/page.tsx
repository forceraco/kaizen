'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { PILLARS } from '@apex/core';
import { Search, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { AgeVerificationModal } from '@/components/AgeVerificationModal';

export default function AcademyPage() {
  const router = useRouter();
  const { isAgeVerified } = useStore();
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [pendingPillarId, setPendingPillarId] = useState<string | null>(null);

  const handlePillarClick = (pillarId: string) => {
    if (pillarId === 'intimacy' && !isAgeVerified) {
      setPendingPillarId(pillarId);
      setShowAgeModal(true);
    } else {
      router.push(`/academy/${pillarId}`);
    }
  };

  const handleVerified = () => {
    setShowAgeModal(false);
    if (pendingPillarId) {
      router.push(`/academy/${pendingPillarId}`);
      setPendingPillarId(null);
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <header className="space-y-4">
        <h1 className="text-2xl font-bold">Академія</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
          <input
            type="text"
            placeholder="Пошук курсів..."
            className="w-full glass pl-10 pr-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-accent/50"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {PILLARS.map((pillar) => (
          <GlassCard
            key={pillar.id}
            className="p-4 flex items-center space-x-4 cursor-pointer active:scale-98 transition-transform"
            onClick={() => handlePillarClick(pillar.id)}
          >
            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-accent">
              {pillar.id === 'intimacy' && !isAgeVerified ? <Lock className="w-6 h-6" /> : <span className="text-xl font-bold">{pillar.name[0]}</span>}
            </div>
            <div className="flex-1">
              <h3 className="font-bold">{pillar.name}</h3>
              <p className="text-xs text-text-secondary">{pillar.description}</p>
            </div>
            <div className="text-xs font-semibold text-accent">0%</div>
          </GlassCard>
        ))}
      </div>

      {showAgeModal && (
        <AgeVerificationModal onClose={() => setShowAgeModal(false)} />
      )}
    </div>
  );
}
