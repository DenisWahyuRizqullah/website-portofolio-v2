import React, { useEffect, useState } from 'react';
import type { NavTab } from './types';
import { AppShell } from './components/layout/AppShell';
import { AboutView } from './components/views/AboutView';
import { ExperienceView } from './components/views/ExperienceView';
import { ProjectsView } from './components/views/ProjectsView';
import { SkillsView } from './components/views/SkillsView';
import { ContactView } from './components/views/ContactView';

const VALID_TABS: NavTab[] = ['about', 'experience', 'projects', 'skills', 'contact'];

function parseHashToTab(hash: string): NavTab {
  const cleaned = hash.replace(/^#\/?/, '').toLowerCase() as NavTab;
  return VALID_TABS.includes(cleaned) ? cleaned : 'about';
}

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>(() =>
    parseHashToTab(window.location.hash)
  );

  // Sync state -> URL hash without page reload
  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `#${tab}`);
  };

  // Listen to external hash changes (deep links / browser navigation)
  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, '', `#${activeTab}`);
    }
    const onHashChange = () => {
      setActiveTab(parseHashToTab(window.location.hash));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <AppShell activeTab={activeTab} onSelectTab={handleSelectTab}>
      {activeTab === 'about' && <AboutView onNavigate={handleSelectTab} />}
      {activeTab === 'experience' && <ExperienceView />}
      {activeTab === 'projects' && <ProjectsView />}
      {activeTab === 'skills' && <SkillsView />}
      {activeTab === 'contact' && <ContactView />}
    </AppShell>
  );
};

export default App;
