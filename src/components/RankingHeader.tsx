
import React from 'react';
import '../styles/RankingBoard.css';

interface RankingHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeSubTab: string;
  setActiveSubTab: (subTab: string) => void;
}

const RankingHeader: React.FC<RankingHeaderProps> = ({
  activeTab,
  setActiveTab,
  activeSubTab,
  setActiveSubTab
}) => {
  return (
    <div>
      <div className="header">
        <button className="back-button">←</button>
        <div className="tab-container">
          <div
            className={`tab ${activeTab === 'party' ? 'active' : ''}`}
            onClick={() => setActiveTab('party')}
          >
            Party Ranking
          </div>
          <div
            className={`tab ${activeTab === 'live' ? 'active' : ''}`}
            onClick={() => setActiveTab('live')}
          >
            Live Ranking
          </div>
          <div
            className={`tab ${activeTab === 'hourly' ? 'active' : ''}`}
            onClick={() => setActiveTab('hourly')}
          >
            Hourly Ranking
          </div>
          <div
            className={`tab ${activeTab === 'family' ? 'active' : ''}`}
            onClick={() => setActiveTab('family')}
          >
            Family Ranking
          </div>
        </div>
      </div>
      <div className="sub-tab-container">
        <div
          className={`sub-tab ${activeSubTab === 'contribution' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('contribution')}
        >
          Weekly Contribution Ranking
        </div>
        <div
          className={`sub-tab ${activeSubTab === 'charm' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('charm')}
        >
          Weekly Charm Ranking
        </div>
      </div>
    </div>
  );
};

export default RankingHeader;
