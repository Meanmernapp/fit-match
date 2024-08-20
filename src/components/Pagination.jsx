import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const MAX_VISIBLE_PAGES = 2; // Maximum number of visible page buttons
  let startPage, endPage;

  // Calculate start and end page numbers based on current page and total pages
  if (totalPages <= MAX_VISIBLE_PAGES) {
    // If total pages are less than or equal to the maximum visible pages
    startPage = 1;
    endPage = totalPages;
  } else {
    // Calculate the range of visible page numbers
    const halfMaxVisiblePages = Math.floor(MAX_VISIBLE_PAGES / 2);
    if (currentPage <= halfMaxVisiblePages) {
      startPage = 1;
      endPage = MAX_VISIBLE_PAGES;
    } else if (currentPage + halfMaxVisiblePages >= totalPages) {
      startPage = totalPages - MAX_VISIBLE_PAGES + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfMaxVisiblePages;
      endPage = currentPage + halfMaxVisiblePages;
    }
  }

  // Generate an array of page numbers to display
  const pageNumbers = [...Array(endPage - startPage + 1).keys()].map((index) => startPage + index);

  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="page-link bg-primary text-white"
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
      </li>
      {startPage > 1 && (
        <>
          <li className="page-item">
            <button onClick={() => handlePageChange(1)} className="page-link">
              1
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        </>
      )}
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${number === currentPage ? 'active bg-primary' : ''}`}
        >
          <button onClick={() => handlePageChange(number)} className="page-link">
            {number}
          </button>
        </li>
      ))}
      {endPage < totalPages && (
        <>
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
          <li className="page-item">
            <button onClick={() => handlePageChange(totalPages)} className="page-link">
              {totalPages}
            </button>
          </li>
        </>
      )}
      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="page-link bg-primary text-white"
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
