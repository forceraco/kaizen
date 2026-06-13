'use client';

import React from 'react';
import { Play, SkipForward, X } from 'lucide-react';

export const MiniPlayer = () => {
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md h-12 glass rounded-full flex items-center justify-between px-4 z-40 border border-accent/30">
      <div className="flex items-center space-x-3 overflow-hidden">
        <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
          <Play className="w-4 h-4 fill-accent" />
        </div>
        <div className="overflow-hidden">
          <p className="text-[10px] font-bold text-text-primary truncate">10-хв медитація фокусу</p>
          <p className="text-[8px] text-text-tertiary">04:20 / 10:00</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <SkipForward className="w-4 h-4 text-text-secondary" />
        <div className="w-px h-4 bg-stroke-glass" />
        <X className="w-4 h-4 text-text-secondary" />
      </div>
    </div>
  );
};
