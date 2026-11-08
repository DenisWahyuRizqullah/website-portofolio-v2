import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  FileText,
  ExternalLink,
  X,
  ArrowUpRight,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import type { ProjectCategory, ProjectItem } from '../../types';
import { Badge, Card, ProjectVisualFrame, SectionHeader } from '../ui/primitives';

const CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'IoT & Embedded',
  'Computer Vision & AI',
  'Web Platform',
];

export const ProjectsView: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      <SectionHeader
        kicker="Portfolio Showcase"
        title="Engineered Systems & Case Studies"
        subtitle="Select any card to read the complete engineering case study, methodology, and field documentation."
      />

      {/* Apple Cupertino Segmented Pill Filter */}
      <div className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-card)] p-1.5 shadow-2xs">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-[var(--accent)] text-white shadow-[var(--shadow-pill)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* 2-Column Cupertino Showcase Grid */}
      <div className="grid gap-7 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            onClick={project.caseStudy ? () => setActiveProject(project) : undefined}
            className="flex flex-col justify-between p-7 sm:p-8"
          >
            <div>
              <ProjectVisualFrame project={project} />

              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-xs font-bold tracking-[0.06em] text-[var(--accent)] uppercase">
                  {project.category}
                </span>
                <span className="text-xs font-medium text-[var(--text-muted)]">
                  {project.date}
                </span>
              </div>

              <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                {project.title}
              </h2>
              <p className="mt-1 text-xs font-semibold text-[var(--text-muted)]">
                {project.subtitle}
              </p>

              <p className="mt-3.5 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                {project.description}
              </p>
            </div>

            <div className="mt-6 border-t border-[var(--border-hairline)] pt-5">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              {project.caseStudy && (
                <div className="mt-4 flex items-center justify-between text-xs font-bold text-[var(--accent)]">
                  <span>Read Case Study</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Cupertino Sheet Modal for Case Study */}
      {activeProject && activeProject.caseStudy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setActiveProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="workstation-scroll relative max-h-[88dvh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-[var(--border-hairline)] bg-[var(--bg-card)] p-7 shadow-2xl sm:p-10"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[var(--border-hairline)] pb-6">
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2.5">
                  <Badge variant="accent">{activeProject.category}</Badge>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-muted)]">
                    <Calendar className="h-3.5 w-3.5" />
                    {activeProject.date}
                  </span>
                  {activeProject.location && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-muted)]">
                      <MapPin className="h-3.5 w-3.5" />
                      {activeProject.location}
                    </span>
                  )}
                </div>
                <h2
                  id="case-study-title"
                  className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-3xl"
                >
                  {activeProject.title}
                </h2>
                <p className="mt-1 text-sm font-semibold text-[var(--accent)]">
                  {activeProject.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close case study"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--bg-subtle)] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-7 space-y-7 text-[15px] leading-relaxed text-[var(--text-secondary)]">
              {activeProject.caseStudy.reportUrl && (
                <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-soft)] p-5 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3.5">
                    <FileText className="h-6 w-6 shrink-0 text-[var(--accent)]" />
                    <div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">
                        Published Paper & Engineering Report
                      </div>
                      <div className="text-xs text-[var(--text-secondary)]">
                        Full technical report and experimental evaluation available in PDF.
                      </div>
                    </div>
                  </div>
                  <a
                    href={activeProject.caseStudy.reportUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cupertino-btn-primary inline-flex shrink-0 items-center gap-2 px-4 py-2.5 text-xs"
                  >
                    <span>{activeProject.caseStudy.reportLabel ?? 'Open PDF'}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}

              <div>
                <h3 className="mb-2 text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
                  Overview
                </h3>
                <div className="space-y-2.5">
                  {activeProject.caseStudy.about.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
                  Background & Context
                </h3>
                <div className="space-y-2.5">
                  {activeProject.caseStudy.background.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2.5 text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
                  Key Objectives
                </h3>
                <ul className="space-y-2">
                  {activeProject.caseStudy.objectives.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
                  Architecture & Methodology
                </h3>
                <div className="space-y-2.5">
                  {activeProject.caseStudy.methodology.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
                  Challenges & Engineering Resolution
                </h3>
                <div className="space-y-2.5 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-5">
                  {activeProject.caseStudy.challenge.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {activeProject.caseStudy.images && activeProject.caseStudy.images.length > 0 && (
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
                    <ImageIcon className="h-4 w-4" />
                    <span>Field & Lab Documentation</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
                    {activeProject.caseStudy.images.map((imgSrc, i) => (
                      <a
                        key={i}
                        href={imgSrc}
                        target="_blank"
                        rel="noreferrer"
                        className="group overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]"
                      >
                        <img
                          src={imgSrc}
                          alt={`${activeProject.title} documentation ${i + 1}`}
                          loading="lazy"
                          className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
