interface PagenationProps {
  totalPage: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ totalPage, currentPage, setPage }: PagenationProps) => {
  const getPageRange = (current: number, last: number, delta: number) => {
    const left = current - delta;
    const right = current + delta + 1;
    const range = [];
    const rangeWithDots = [];

    let l = null;

    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const pageRange = getPageRange(currentPage, totalPage, 2);

  // TODO: 페이지네이션 구현 중 '...'이 있는데 그게 버튼으로 돼있음. 버튼을 없애야됨.

  return (
    <div className='flex justify-center mt-5'>
      {pageRange.map((pageNumber, index) => (
        <button
          key={index}
          className={`px-2 py-1 ${
            pageNumber === currentPage ? 'bg-gray-200' : 'bg-gray-100'
          } text-gray-700`}
          onClick={() => setPage(pageNumber)}
          aria-current={pageNumber === currentPage ? 'page' : false}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
