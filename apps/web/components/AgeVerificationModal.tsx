'use client';

import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { ShieldAlert, X } from 'lucide-react';
import { useStore } from '@/store/useStore';

interface AgeVerificationModalProps {
  onClose: () => void;
}

export const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ onClose }) => {
  const { verifyAge } = useStore();

  const handleVerify = () => {
    verifyAge();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={onClose} />
      <GlassCard className="w-full max-w-sm p-8 text-center space-y-6 relative" strong>
        <button onClick={onClose} className="absolute top-4 right-4 text-text-tertiary">
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center">
          <div className="w-16 h-16 bg-warn/20 rounded-full flex items-center justify-center text-warn">
            <ShieldAlert className="w-8 h-8" />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Вам є 18 років?</h2>
          <p className="text-sm text-text-secondary">
            Цей розділ містить освітній контент про близькість та інтимне здоров'я, призначений виключно для дорослих.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button onClick={handleVerify} className="w-full">
            Мені виповнилось 18
          </Button>
          <Button variant="ghost" onClick={onClose} className="w-full">
            Скасувати
          </Button>
        </div>
      </GlassCard>
    </div>
  );
};
