import React from 'react';
import { Cpu, Code2, Wrench, Radio, Eye, Globe } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Card, SectionHeader } from '../ui/primitives';

const GROUP_ICONS = [Cpu, Code2, Wrench];

const PILLARS = [
  {
    title: 'IoT & Embedded Actuation',
    icon: Radio,
    summary:
      'Microcontroller firmware (ESP8266/NodeMCU, Raspberry Pi), MQTT telemetry brokers, stepper motor actuation, and real-time sensor networks.',
  },
  {
    title: 'Computer Vision & Edge AI',
    icon: Eye,
    summary:
      'Mobile template matching, hybrid ResNet-50 + Vision Transformer (ViT) pipelines, and on-device Artificial Neural Networks (ANN) for edge inference.',
  },
  {
    title: 'Web & Systems Engineering',
    icon: Globe,
    summary:
      'Responsive web control interfaces, structured data architectures, and digital platforms built for reliability and human usability.',
  },
];

export const SkillsView: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <div className="space-y-8">
      <SectionHeader
        kicker="Technical Stack"
        title="Capabilities & Tools"
        subtitle="A multidisciplinary foundation combining embedded hardware, machine learning, and modern web interfaces."
      />

      {/* Core Engineering Pillars */}
      <div className="grid gap-6 md:grid-cols-3">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Card key={pillar.title} className="p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
                {pillar.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {pillar.summary}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Categorized Capability Cards */}
      <div className="space-y-6">
        {skills.map((group, index) => {
          const Icon = GROUP_ICONS[index % GROUP_ICONS.length];
          return (
            <Card key={group.code} className="p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3.5 border-b border-[var(--border-hairline)] pb-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
                    {group.category}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">{group.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
