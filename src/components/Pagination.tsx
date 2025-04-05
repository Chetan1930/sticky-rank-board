
import React from 'react';
import '../styles/RankingBoard.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Calculate which page numbers to show
  const getPageNumbers = () => {
    let pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Calculate range around current page
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);
    
    // Add ellipsis after page 1 if needed
    if (start > 2) {
      pages.push('...');
    }
    
    // Add pages in the middle
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    // Add ellipsis before last page if needed
    if (end < totalPages - 1) {
      pages.push('...');
    }
    
    // Always show last page if it exists
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="pagination">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span style={{ margin: '0 5px' }}>...</span>
          ) : (
            <button
              className={currentPage === page ? 'active' : ''}
              onClick={() => onPageChange(Number(page))}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}
      
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
