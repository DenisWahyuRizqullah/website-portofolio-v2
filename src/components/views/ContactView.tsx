import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Badge, Card, SectionHeader } from '../ui/primitives';

export const ContactView: React.FC = () => {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="space-y-8">
      <SectionHeader
        kicker="Direct Channels"
        title="Let’s build something meaningful."
        subtitle="Available for full-time engineering roles, research collaborations, and product discussions."
      />

      {/* Primary Contact Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="flex flex-col justify-between p-7">
          <div>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
              <Mail className="h-5 w-5" />
            </div>
            <div className="text-xs font-bold tracking-[0.06em] text-[var(--text-muted)] uppercase">
              Email
            </div>
            <div className="mt-1 break-all text-base font-bold text-[var(--text-primary)]">
              {profile.email}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="cupertino-btn-primary inline-flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-xs"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="cupertino-btn-secondary inline-flex h-9 w-9 items-center justify-center"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </Card>

        <Card className="flex flex-col justify-between p-7">
          <div>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
              <Phone className="h-5 w-5" />
            </div>
            <div className="text-xs font-bold tracking-[0.06em] text-[var(--text-muted)] uppercase">
              Phone & WhatsApp
            </div>
            <div className="mt-1 text-base font-bold text-[var(--text-primary)]">
              {profile.phone}
            </div>
          </div>

          <div className="mt-6">
            <a
              href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="cupertino-btn-secondary inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 text-xs"
            >
              <span>Message on WhatsApp</span>
              <ExternalLink className="h-3.5 w-3.5 text-[var(--accent)]" />
            </a>
          </div>
        </Card>

        <Card className="flex flex-col justify-between p-7">
          <div>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="text-xs font-bold tracking-[0.06em] text-[var(--text-muted)] uppercase">
              Location
            </div>
            <div className="mt-1 text-base font-bold text-[var(--text-primary)]">
              {profile.location}
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-secondary)]">
              Open to on-site, hybrid, and remote engineering positions.
            </p>
          </div>

          <div className="mt-5">
            <Badge variant="status">{profile.status}</Badge>
          </div>
        </Card>
      </div>

      {/* Social Networks & Resumes */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-7 sm:p-8">
          <div className="mb-5 text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
            Social & Developer Profiles
          </div>
          <div className="space-y-3">
            {profile.socials.map((social) => {
              const Icon =
                social.label === 'GitHub'
                  ? Github
                  : social.label === 'LinkedIn'
                  ? Linkedin
                  : Instagram;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-5 py-3.5 text-sm transition-all hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
                >
                  <span className="flex items-center gap-3 font-bold text-[var(--text-primary)]">
                    <Icon className="h-4 w-4 text-[var(--accent)]" />
                    <span>{social.label}</span>
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                    <span>{social.handle}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </Card>

        <Card className="p-7 sm:p-8">
          <div className="mb-5 text-xs font-bold tracking-[0.08em] text-[var(--accent)] uppercase">
            Curriculum Vitae (PDF)
          </div>
          <div className="space-y-3.5">
            {profile.resumes.map((cv) => (
              <a
                key={cv.url}
                href={cv.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">{cv.label}</div>
                    <div className="text-xs text-[var(--text-muted)]">{cv.sublabel}</div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-[var(--accent)]" />
              </a>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
