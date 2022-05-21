import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
  totalImages: number;
};

function Pagination({ currentPage, onChangePage, totalImages }: PaginationProps) {

  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);
  const imagesPerPage = 30;

  function calculateTotalPages() {
    return totalImages >= 300 ? 10 : Math.ceil(totalImages / imagesPerPage);
  }

  useEffect(() => {
    setTotalNumberOfPages(calculateTotalPages());
  }, [totalImages])

  return (
    <div className="mt-8 py-6 flex justify-center flex-wrap items-center">
      <nav aria-label="Page navigation">
        <ul className="flex list-style-none items-center gap-1 flex-wrap justify-center">
          <li>
            <Link to='top' smooth duration={1000} onClick={() => onChangePage(currentPage - 1)}>
              <button
                disabled={currentPage === 1}
                className={`page ${currentPage === 1 && 'disabled'}`}
                aria-label='Previous Page'
                title='Previous page'
              >
                <ChevronLeftIcon className='h-5 w-5' />
              </button>
            </Link>
          </li>
          {Array(totalNumberOfPages).fill('').map((_, index) => (
            <li key={index + 1}>
              <Link to='top' smooth duration={1000} onClick={() => onChangePage(index + 1)}>
                <span className={`page ${index + 1 === currentPage && 'active'}`}>
                  {index + 1}
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link to='top' smooth duration={1000} onClick={() => onChangePage(currentPage + 1)}>
              <button
                disabled={currentPage === totalNumberOfPages}
                className={`page ${currentPage === totalNumberOfPages && 'disabled'}`}
                aria-label='Next Page'
                title='Next page'
              >
                <ChevronRightIcon className='h-5 w-5' />
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;