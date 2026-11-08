import React from 'react';
import { ArrowRight, FileText, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import type { NavTab } from '../../types';
import { Badge, Card, ProjectVisualFrame } from '../ui/primitives';

interface AboutViewProps {
  onNavigate: (tab: NavTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const { profile, projects } = portfolioData;
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="space-y-10">
      {/* Apple Cupertino Luminescence Hero Card */}
      <Card className="p-8 sm:p-12">
        <div className="text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
          {profile.role} • {profile.degree}
        </div>

        <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.035em] leading-[1.08] text-[var(--text-primary)] sm:text-5xl">
          Precision engineering,
          <br />
          crafted for human clarity.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
          {profile.tagline}
        </p>

        {/* Pill CTA Group */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="cupertino-btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {profile.resumes.map((cv) => (
            <a
              key={cv.url}
              href={cv.url}
              target="_blank"
              rel="noreferrer"
              className="cupertino-btn-secondary inline-flex items-center gap-2 px-5 py-3 text-sm"
            >
              <FileText className="h-4 w-4 text-[var(--accent)]" />
              <span>{cv.label}</span>
              <ExternalLink className="h-3.5 w-3.5 text-[var(--text-muted)]" />
            </a>
          ))}
        </div>

        {/* Key Highlights Strip */}
        <div className="mt-10 grid gap-4 border-t border-[var(--border-hairline)] pt-8 sm:grid-cols-3">
          {profile.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-xs font-semibold tracking-wide text-[var(--text-muted)] uppercase">
                {metric.label}
              </div>
              <div className="mt-1 text-xl font-extrabold tracking-tight text-[var(--text-primary)]">
                {metric.value}
              </div>
              <div className="mt-0.5 text-xs text-[var(--text-secondary)]">{metric.detail}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Human-Centered Story & Background */}
      <Card className="p-8 sm:p-10">
        <div className="text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
          Background & Philosophy
        </div>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          Bridging hardware execution and intuitive software.
        </h2>
        <div className="mt-4 grid gap-6 text-[15px] leading-relaxed text-[var(--text-secondary)] md:grid-cols-3">
          {profile.bioParagraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </Card>

      {/* Featured Showcase Grid (Cupertino Device Cards) */}
      <div>
        <div className="mb-5 flex items-end justify-between">
          <div>
            <div className="text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
              Selected Work
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              Flagship Systems
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            <span>All {projects.length} projects</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              onClick={() => onNavigate('projects')}
              className="flex flex-col justify-between p-6"
            >
              <div>
                <ProjectVisualFrame project={project} />
                <div className="text-xs font-bold tracking-wide text-[var(--accent)] uppercase">
                  {project.category}
                </div>
                <h3 className="mt-1.5 text-lg font-bold tracking-tight text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
