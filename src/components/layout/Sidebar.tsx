import React from 'react';
import {
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  Mail,
  FileText,
  Github,
  Linkedin,
  MapPin,
  Sun,
  Moon,
} from 'lucide-react';
import type { NavTab } from '../../types';
import { portfolioData } from '../../data/portfolioData';

interface SidebarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  theme: 'light' | 'dark';
  onToggleTheme: (mode: 'light' | 'dark') => void;
}

const NAV_ITEMS: { id: NavTab; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'about', label: 'Overview', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'skills', label: 'Capabilities', icon: Cpu },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  theme,
  onToggleTheme,
}) => {
  const { profile } = portfolioData;

  return (
    <>
      {/* Mobile Top Cupertino Bar */}
      <div className="flex items-center justify-between border-b border-[var(--border-hairline)] bg-[var(--bg-sidebar)] px-4 py-3 backdrop-blur-xl md:hidden">
        <div className="flex items-center gap-3">
          <img
            src={profile.avatarLogo}
            alt={profile.name}
            className="h-9 w-9 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-card)] object-contain p-1.5 shadow-xs"
          />
          <div>
            <div className="text-sm font-bold tracking-tight text-[var(--text-primary)]">
              {profile.shortName}
            </div>
            <div className="text-[11px] font-medium text-[var(--text-muted)]">
              Software & Hardware Engineer
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onToggleTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle color appearance"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-hairline)] bg-[var(--bg-card)] text-[var(--text-primary)] shadow-xs"
        >
          {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
      </div>

      {/* Desktop Left Cupertino Vibrancy Sidebar (<aside>) */}
      <aside
        aria-label="Primary Navigation Sidebar"
        className="hidden h-full w-[288px] shrink-0 flex-col justify-between border-r border-[var(--border-hairline)] bg-[var(--bg-sidebar)] p-6 backdrop-blur-2xl md:flex"
      >
        <div>
          {/* Profile Identity Card */}
          <div className="flex items-center gap-3.5">
            <img
              src={profile.avatarLogo}
              alt={profile.name}
              className="h-12 w-12 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-card)] object-contain p-2 shadow-sm"
            />
            <div className="min-w-0">
              <h2 className="truncate text-[15px] font-bold tracking-tight text-[var(--text-primary)]">
                {profile.name}
              </h2>
              <p className="truncate text-xs font-medium text-[var(--text-muted)]">
                Computer Engineering
              </p>
            </div>
          </div>

          {/* Availability Pill */}
          <div className="mt-4 flex items-center gap-2.5 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-card)] px-3.5 py-2.5 shadow-2xs">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="truncate text-xs font-semibold text-[var(--text-secondary)]">
              {profile.status}
            </span>
          </div>

          <div className="mt-2.5 flex items-center gap-1.5 px-1 text-xs font-medium text-[var(--text-muted)]">
            <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
            <span>{profile.location}</span>
          </div>

          {/* Primary Navigation (<nav>) */}
          <nav aria-label="Portfolio Sections" className="mt-8 space-y-1.5">
            <div className="mb-2 px-3 text-[11px] font-bold tracking-[0.08em] text-[var(--text-muted)] uppercase">
              Sections
            </div>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectTab(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group flex w-full items-center justify-between rounded-2xl px-3.5 py-2.5 text-left text-[14px] font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--accent)] text-white shadow-[var(--shadow-pill)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      className={`h-4 w-4 transition-colors ${
                        isActive
                          ? 'text-white'
                          : 'text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'
                      }`}
                    />
                    <span>{item.label}</span>
                  </span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Controls: Theme Segmented Switcher, Resume & Socials */}
        <div className="space-y-4 border-t border-[var(--border-hairline)] pt-5">
          {/* Apple Cupertino Dual-Mode Segmented Control */}
          <div
            role="group"
            aria-label="Appearance Mode"
            className="grid grid-cols-2 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-1"
          >
            <button
              type="button"
              onClick={() => onToggleTheme('light')}
              className={`flex items-center justify-center gap-1.5 rounded-full py-1.5 text-xs font-semibold transition-all ${
                theme === 'light'
                  ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Sun className="h-3.5 w-3.5" />
              <span>Light</span>
            </button>
            <button
              type="button"
              onClick={() => onToggleTheme('dark')}
              className={`flex items-center justify-center gap-1.5 rounded-full py-1.5 text-xs font-semibold transition-all ${
                theme === 'dark'
                  ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Moon className="h-3.5 w-3.5" />
              <span>Dark</span>
            </button>
          </div>

          <a
            href={profile.resumes[0].url}
            target="_blank"
            rel="noreferrer"
            className="cupertino-btn-secondary flex w-full items-center justify-center gap-2 border border-[var(--border-hairline)] px-4 py-2.5 text-xs"
          >
            <FileText className="h-3.5 w-3.5 text-[var(--accent)]" />
            <span>Download Resume</span>
          </a>

          <div className="flex items-center justify-between px-2 pt-1">
            <a
              href="https://github.com/DenisWahyuRizqullah"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/deniswahyurizqullah"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-full p-2 text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Sticky Bottom Tab Bar (<nav>) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="fixed right-0 bottom-0 left-0 z-40 flex items-center justify-around border-t border-[var(--border-hairline)] bg-[var(--bg-sidebar)] px-2 py-2 backdrop-blur-xl md:hidden"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] font-semibold transition-colors ${
                isActive
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
