import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { NavTab } from '../../types';

interface ScreenFrameProps {
  activeTab: NavTab;
  children: React.ReactNode;
}

const SECTION_TITLES: Record<NavTab, string> = {
  about: 'Overview',
  experience: 'Experience & Research',
  projects: 'Selected Projects',
  skills: 'Capabilities & Stack',
  contact: 'Get in Touch',
};

export const ScreenFrame: React.FC<ScreenFrameProps> = ({ activeTab, children }) => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <main
      ref={mainRef}
      className="workstation-scroll relative flex-1 overflow-y-auto overscroll-contain bg-[var(--bg-canvas)] pb-28 md:pb-16"
    >
      {/* Subtle Cupertino Frosted Top Bar */}
      <div className="sticky top-0 z-20 hidden items-center justify-between border-b border-[var(--border-hairline)] bg-[var(--bg-header)] px-10 py-3.5 backdrop-blur-xl md:flex">
        <div className="text-xs font-semibold tracking-tight text-[var(--text-secondary)]">
          {SECTION_TITLES[activeTab]}
        </div>
        <div className="text-xs font-medium text-[var(--text-muted)]">
          Denis Wahyu Rizqullah • Malang, Indonesia
        </div>
      </div>

      {/* Main Content Canvas with Equal Edges */}
      <div className="mx-auto max-w-[1040px] px-6 pt-8 sm:px-10 md:pt-12 lg:px-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              opacity: 0,
              y: -8,
              transition: { duration: 0.16, ease: 'easeIn' },
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};
