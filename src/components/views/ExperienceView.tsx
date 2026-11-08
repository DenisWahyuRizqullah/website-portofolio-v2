import React from 'react';
import { Calendar, MapPin, FileText, ExternalLink, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Badge, Card, SectionHeader } from '../ui/primitives';

export const ExperienceView: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <div className="space-y-8">
      <SectionHeader
        kicker="Career & Academic Journey"
        title="Experience & Research"
        subtitle="Building telecommunications systems in the field, publishing peer-reviewed computer vision research, and deploying edge AI."
      />

      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card key={exp.id} className="p-7 sm:p-9">
            <div className="flex flex-col justify-between gap-4 border-b border-[var(--border-hairline)] pb-6 sm:flex-row sm:items-start">
              <div className="flex items-start gap-4">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.organization}
                    className="h-13 w-13 shrink-0 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] object-contain p-2 shadow-2xs"
                  />
                )}
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                      {exp.role}
                    </h2>
                    <Badge variant="accent">{exp.type}</Badge>
                  </div>
                  <p className="mt-1 text-[15px] font-semibold text-[var(--accent)]">
                    {exp.organization}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1 text-xs font-medium text-[var(--text-muted)] sm:items-end">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{exp.period}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-[var(--text-secondary)]">
              {exp.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              {exp.reportUrl && (
                <a
                  href={exp.reportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cupertino-btn-primary inline-flex items-center gap-2 px-4 py-2 text-xs"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>{exp.reportLabel ?? 'Read Report'}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
