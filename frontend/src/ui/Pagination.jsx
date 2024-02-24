import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

const Pagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  };

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  if (pageCount <= 1) return null;

  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-lg ml-2">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> records.
      </p>
      <div className="flex gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1
              ? "bg-gray-200 text-gray-600"
              : "bg-blue-500 text-white"
          } px-4 py-2 rounded font-semibold flex items-center gap-1`}
        >
          <HiChevronLeft className="w-6 h-6" />
          <span>Previous</span>
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`${
            currentPage === pageCount
              ? "bg-gray-200 text-gray-600"
              : "bg-blue-500 text-white"
          } px-4 py-2 rounded font-semibold flex items-center gap-1`}
        >
          <span>Next</span>
          <HiChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
