
import React from 'react';
import '../styles/RankingBoard.css';

interface User {
  id: number;
  rank: number;
  name: string;
  avatar: string;
  score: number;
}

interface TopRanksProps {
  topUsers: User[];
}

const TopRanks: React.FC<TopRanksProps> = ({ topUsers }) => {
  // Sort users by rank (ensure 1st, 2nd, 3rd are in correct order)
  const sortedTopUsers = [...topUsers].sort((a, b) => a.rank - b.rank);
  
  // We need to ensure we have 3 users before trying to rearrange them
  // Display order should be: 2nd on left, 1st in center, 3rd on right
  const displayOrder = sortedTopUsers.length >= 3 
    ? [sortedTopUsers[1], sortedTopUsers[0], sortedTopUsers[2]]
    : sortedTopUsers; // If we don't have 3 users, just use what we have

  return (
    <div className="top-ranks-section">
      <div className="rewards-button">
        <img src="/lovable-uploads/a0ff8b67-87ca-4eb2-9177-69ee22e7cc8c.png" className="gift-icon" alt="Gift" />
        Rewards
      </div>

      <div className="settlement-timer">Settlement Time: 2 days 01:45:27</div>

      <div className="trophy-container">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmMxMDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cm9waHkiPjxwYXRoIGZpbGw9IiNmZmMxMDciIGQ9Ik0xOCA5VjNjMC0uNi0uNC0xLTEtMUg3QzYuNCAxIDYgMS40IDYgMnY3YzAgNSA0IDkgOSA5czktNCA5LTl6Ii8+PHBhdGggZmlsbD0iI2ZmYzEwNyIgZD0iTTYgM2MtMy4zIDAtNiAyLjctNiA2IDAgMi4xIDEuNyAzLjkgMy44IDRhNi4yIDYuMiAwIDAgMCAyLjItNHYtNnoiLz48cGF0aCBmaWxsPSIjZmZjMTA3IiBkPSJNMTggM2MzLjMgMCA2IDIuNyA2IDYgMCAyLjEtMS43IDMuOS0zLjggNGE2LjIgNi4yIDAgMCAxLTIuMi00VjN6Ii8+PHBhdGggZmlsbD0iI2ZmYzEwNyIgZD0iTTktLjJoNnYzSDl6Ii8+PC9zdmc+" className="trophy-img" alt="Trophy" />
      </div>

      <div className="top-three-container">
        {displayOrder.map((user, idx) => (
          <div key={user.id} className="top-rank-card">
            {user.rank === 1 && (
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmMxMDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jcm93biI+PHBhdGggZmlsbD0iI2ZmYzEwNyIgZD0iTTIgNmw0IDJsNi0zNmwyIDQgMi00IDYgMyA0LTJ2MTJINnpNNiAxOGgxMnYyYTIgMiAwIDAgMS0yIDJIOGEyIDIgMCAwIDEtMi0yeiIvPjwvc3ZnPg==" 
                className="crown-icon" 
                alt="Crown" 
              />
            )}
            <div className="rank-number-circle">{user.rank}</div>
            <div className="avatar-container">
              <img src={user.avatar} className="avatar-img" alt={`${user.name}'s avatar`} />
            </div>
            <div className="username">{user.name}</div>
            <div className="score-container">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmMxMDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cm9waHkiPjxwYXRoIGZpbGw9IiNmZmMxMDciIGQ9Ik0xOCA5VjNjMC0uNi0uNC0xLTEtMUg3QzYuNCAxIDYgMS40IDYgMnY3YzAgNSA0IDkgOSA5czktNCA5LTl6Ii8+PHBhdGggZmlsbD0iI2ZmYzEwNyIgZD0iTTYgM2MtMy4zIDAtNiAyLjctNiA2IDAgMi4xIDEuNyAzLjkgMy44IDRhNi4yIDYuMiAwIDAgMCAyLjItNHYtNnoiLz48cGF0aCBmaWxsPSIjZmZjMTA3IiBkPSJNMTggM2MzLjMgMCA2IDIuNyA2IDYgMCAyLjEtMS43IDMuOS0zLjggNGE2LjIgNi4yIDAgMCAxLTIuMi00VjN6Ii8+PC9zdmc+" 
                className="mini-trophy" 
                alt="Trophy" 
              />
              <span className="score">{user.score.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRanks;
