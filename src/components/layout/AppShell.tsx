import React, { useEffect, useState } from 'react';
import type { NavTab } from '../../types';
import { Sidebar } from './Sidebar';
import { ScreenFrame } from './ScreenFrame';

interface AppShellProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ activeTab, onSelectTab, children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('cupertino-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cupertino-theme', theme);
  }, [theme]);

  return (
    <div className="flex h-dvh w-screen flex-col overflow-hidden bg-[var(--bg-canvas)] text-[var(--text-primary)] md:flex-row">
      <Sidebar
        activeTab={activeTab}
        onSelectTab={onSelectTab}
        theme={theme}
        onToggleTheme={setTheme}
      />
      <ScreenFrame activeTab={activeTab}>{children}</ScreenFrame>
    </div>
  );
};
