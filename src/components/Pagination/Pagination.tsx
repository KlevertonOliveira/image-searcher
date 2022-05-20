import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

function Pagination({ currentPage, onChangePage }: PaginationProps) {
  return (
    <div className="mt-8 flex justify-center flex-wrap items-center">
      <nav aria-label="Page navigation">
        <ul className="flex list-style-none items-center gap-1 flex-wrap justify-center">
          <li>
            <button
              disabled={currentPage === 1}
              onClick={() => onChangePage(currentPage - 1)}
              className={`page ${currentPage === 1 && 'disabled'}`}
              aria-label='Previous Page'
            >
              <ChevronLeftIcon className='h-5 w-5' />
            </button>
          </li>
          {Array(10).fill('').map((_, index) => (
            <li key={index + 1}>
              <button
                className={`page ${index + 1 === currentPage && 'active'}`}
                onClick={() => onChangePage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              disabled={currentPage === 7}
              onClick={() => onChangePage(currentPage + 1)}
              className={`page ${currentPage === 7 && 'disabled'}`}
              aria-label='Next Page'
            >
              <ChevronRightIcon className='h-5 w-5' />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;