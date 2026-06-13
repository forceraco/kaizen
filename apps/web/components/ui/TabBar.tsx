'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Dumbbell, Trophy, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Сьогодні', href: '/today' },
  { icon: BookOpen, label: 'Академія', href: '/academy' },
  { icon: Dumbbell, label: 'Практика', href: '/practice' },
  { icon: Trophy, label: 'Квести', href: '/quests' },
  { icon: User, label: 'Профіль', href: '/profile' },
];

export const TabBar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md h-16 glass-strong rounded-full flex items-center justify-around px-4 z-50">
      {navItems.map(({ icon: Icon, label, href }) => {
        const isActive = pathname === href;
        return (
          <Link key={href} href={href} className="relative flex flex-col items-center">
            <Icon className={`w-6 h-6 transition-colors ${isActive ? 'text-accent' : 'text-text-secondary'}`} />
            <span className={`text-[10px] mt-1 ${isActive ? 'text-accent' : 'text-text-secondary'}`}>{label}</span>
            {isActive && <div className="absolute -bottom-1 w-1 h-1 bg-accent rounded-full" />}
          </Link>
        );
      })}
    </div>
  );
};
