
import React from 'react';
import '../styles/RankingBoard.css';
import { useIsMobile } from '../hooks/use-mobile';

const BottomNavigation: React.FC = () => {
  const isMobile = useIsMobile();
  
  // For web view, we'll use text labels instead of symbols
  const navigationItems = [
    { icon: '☰', label: 'Menu' },
    { icon: '□', label: 'Dashboard' },
    { icon: '◁', label: 'Back' }
  ];

  return (
    <div className={`bottom-navigation ${!isMobile ? 'web-navigation' : ''}`}>
      {navigationItems.map((item, index) => (
        <div key={index} className="bottom-nav-item">
          <span className="nav-icon">{item.icon}</span>
          {!isMobile && <span className="nav-label">{item.label}</span>}
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
