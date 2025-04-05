
import React from 'react';
import '../styles/RankingBoard.css';

interface User {
  id: number;
  rank: number;
  name: string;
  avatar: string;
  score: number;
}

interface ListRanksProps {
  users: User[];
  lastPlace?: User;
}

const ListRanks: React.FC<ListRanksProps> = ({ users, lastPlace }) => {
  return (
    <div className="list-ranks-section">
      {users.map(user => (
        <div key={user.id} className="rank-item">
          <div className="rank-number">{user.rank}</div>
          <div className="list-avatar-container">
            <img src={user.avatar} className="avatar-img" alt={`${user.name}'s avatar`} />
          </div>
          <div className="list-username">{user.name}</div>
          <div className="list-score-container">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmMxMDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cm9waHkiPjxwYXRoIGZpbGw9IiNmZmMxMDciIGQ9Ik0xOCA5VjNjMC0uNi0uNC0xLTEtMUg3QzYuNCAxIDYgMS40IDYgMnY3YzAgNSA0IDkgOSA5czktNCA5LTl6Ii8+PHBhdGggZmlsbD0iI2ZmYzEwNyIgZD0iTTYgM2MtMy4zIDAtNiAyLjctNiA2IDAgMi4xIDEuNyAzLjkgMy44IDRhNi4yIDYuMiAwIDAgMCAyLjItNHYtNnoiLz48cGF0aCBmaWxsPSIjZmZjMTA3IiBkPSJNMTggM2MzLjMgMCA2IDIuNyA2IDYgMCAyLjEtMS43IDMuOS0zLjggNGE2LjIgNi4yIDAgMCAxLTIuMi00VjN6Ii8+PC9zdmc+" 
              className="list-mini-trophy" 
              alt="Trophy" 
            />
            <span className="list-score">{user.score.toLocaleString()}</span>
          </div>
        </div>
      ))}
      
      {lastPlace && (
        <div className="rank-item last-place">
          <div className="rank-number">{lastPlace.rank}+</div>
          <div className="list-avatar-container">
            <img src={lastPlace.avatar} className="avatar-img" alt={`${lastPlace.name}'s avatar`} />
          </div>
          <div className="list-username">{lastPlace.name}</div>
          <div className="list-score-container">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmMxMDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cm9waHkiPjxwYXRoIGZpbGw9IiNmZmMxMDciIGQ9Ik0xOCA5VjNjMC0uNi0uNC0xLTEtMUg3QzYuNCAxIDYgMS40IDYgMnY3YzAgNSA0IDkgOSA5czktNCA5LTl6Ii8+PHBhdGggZmlsbD0iI2ZmYzEwNyIgZD0iTTYgM2MtMy4zIDAtNiAyLjctNiA2IDAgMi4xIDEuNyAzLjkgMy44IDRhNi4yIDYuMiAwIDAgMCAyLjItNHYtNnoiLz48cGF0aCBmaWxsPSIjZmZjMTA3IiBkPSJNMTggM2MzLjMgMCA2IDIuNyA2IDYgMCAyLjEtMS43IDMuOS0zLjggNGE2LjIgNi4yIDAgMCAxLTIuMi00VjN6Ii8+PC9zdmc+" 
              className="list-mini-trophy" 
              alt="Trophy" 
            />
            <span className="list-score">{lastPlace.score}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListRanks;
