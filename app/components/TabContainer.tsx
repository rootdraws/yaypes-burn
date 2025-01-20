'use client'

import { useState } from 'react'

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabContainerProps {
  tabs: Tab[];
}

export default function TabContainer({ tabs }: TabContainerProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="container">
      <div className="tab-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
} 