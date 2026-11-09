import React from 'react';
import type { ProjectItem } from '../../types';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => (
  <div
    onClick={onClick}
    className={`cupertino-card ${onClick ? 'cupertino-card-interactive group' : ''} ${className}`}
  >
    {children}
  </div>
);

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'status';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const styles = {
    default:
      'bg-[var(--bg-subtle)] text-[var(--text-secondary)] border-[var(--border-hairline)]',
    accent:
      'bg-[var(--accent-soft)] text-[var(--accent)] border-[var(--accent-border)]',
    status:
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-tight ${styles} ${className}`}
    >
      {children}
    </span>
  );
};

interface SectionHeaderProps {
  kicker: string;
  title: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ kicker, title, subtitle }) => (
  <header className="mb-10">
    <div className="mb-2 text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
      {kicker}
    </div>
    <h1 className="text-3xl font-extrabold tracking-[-0.03em] text-[var(--text-primary)] sm:text-4xl">
      {title}
    </h1>
    <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
      {subtitle}
    </p>
  </header>
);

export const ProjectVisualFrame: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const heroImg = project.caseStudy?.images?.[0];

  if (heroImg) {
    return (
      <div className="relative mb-5 h-48 w-full overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
        <img
          src={heroImg}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  // Fallback architectural schematic diagram for projects without photography
  return (
    <div className="relative mb-5 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-6">
      <svg
        viewBox="0 0 360 120"
        className="h-full w-full max-w-[320px] text-[var(--text-secondary)]"
        fill="none"
        aria-hidden="true"
      >
        {/* Connecting paths */}
        <path
          d="M70 32 C115 32, 115 60, 150 60 M70 88 C115 88, 115 60, 150 60 M210 60 L280 60"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1.75"
          strokeDasharray="4 4"
        />
        {/* Input Nodes */}
        <rect
          x="14"
          y="16"
          width="56"
          height="32"
          rx="8"
          fill="var(--bg-card)"
          stroke="currentColor"
          strokeOpacity="0.2"
        />
        <text x="42" y="36" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="600">
          {project.tags[0]?.slice(0, 8) || 'SENSOR'}
        </text>

        <rect
          x="14"
          y="72"
          width="56"
          height="32"
          rx="8"
          fill="var(--bg-card)"
          stroke="currentColor"
          strokeOpacity="0.2"
        />
        <text x="42" y="92" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="600">
          {project.tags[1]?.slice(0, 8) || 'INPUT'}
        </text>

        {/* Central Core Node */}
        <rect
          x="146"
          y="34"
          width="68"
          height="52"
          rx="14"
          fill="var(--accent)"
        />
        <text x="180" y="57" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700">
          CORE
        </text>
        <text x="180" y="70" textAnchor="middle" fill="#ffffff" fontSize="8" opacity="0.85">
          ENGINE
        </text>

        {/* Output Node */}
        <rect
          x="280"
          y="40"
          width="66"
          height="40"
          rx="10"
          fill="var(--bg-card)"
          stroke="var(--accent)"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
        <circle cx="295" cy="60" r="4" fill="#10b981" />
        <text x="319" y="63" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="600">
          ACTIVE
        </text>
      </svg>
    </div>
  );
};
