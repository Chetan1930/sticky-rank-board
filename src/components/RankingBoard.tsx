
import React, { useState, useEffect } from 'react';
import RankingHeader from './RankingHeader';
import TopRanks from './TopRanks';
import ListRanks from './ListRanks';
import Pagination from './Pagination';
import BottomNavigation from './BottomNavigation';
import generateMockUsers from '../utils/mockData';
import '../styles/RankingBoard.css';

const USERS_PER_PAGE = 20;

const RankingBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('party');
  const [activeSubTab, setActiveSubTab] = useState('contribution');
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [topUsers, setTopUsers] = useState<any[]>([]);
  const [currentUsers, setCurrentUsers] = useState<any[]>([]);
  const [lastPlaceUser, setLastPlaceUser] = useState<any>(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    try {
      // Generate mock data
      const { users, lastPlaceUser } = generateMockUsers(100);
      setAllUsers(users);
      
      // Extract top 3 users (or fewer if not enough users)
      const top3 = users.filter(user => user.rank <= 3);
      setTopUsers(top3);
      
      setLastPlaceUser(lastPlaceUser);
      
      // Calculate total pages
      const nonTopUserCount = users.length - Math.min(3, top3.length);
      setTotalPages(Math.ceil(nonTopUserCount / USERS_PER_PAGE));
    } catch (error) {
      console.error("Error initializing ranking board:", error);
      // Set default empty arrays to prevent undefined errors
      setAllUsers([]);
      setTopUsers([]);
    }
  }, []);

  useEffect(() => {
    // Update current users based on pagination
    if (allUsers.length > 0) {
      const topCount = Math.min(3, topUsers.length);
      const startIdx = topCount + (currentPage - 1) * USERS_PER_PAGE;
      const endIdx = Math.min(startIdx + USERS_PER_PAGE, allUsers.length);
      const pageUsers = allUsers.slice(startIdx, endIdx);
      setCurrentUsers(pageUsers);
    }
  }, [currentPage, allUsers, topUsers]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="ranking-container">
      <RankingHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeSubTab={activeSubTab}
        setActiveSubTab={setActiveSubTab}
      />
      
      {/* Top 3 ranks - sticky */}
      <TopRanks topUsers={topUsers} />
      
      {/* List of ranks 4-100 with pagination */}
      {currentUsers.length > 0 && <ListRanks users={currentUsers} />}
      
      {/* Show last place user on the last page */}
      {currentPage === totalPages && lastPlaceUser && (
        <ListRanks users={[]} lastPlace={lastPlaceUser} />
      )}
      
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      
      <BottomNavigation />
    </div>
  );
};

export default RankingBoard;
