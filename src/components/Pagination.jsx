import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { state, getCharacters } = useContext(AppContext);

  const totalPages = state.totalPages;
  const current = state.currentPage;

  const windowSize = 10;

  const startWindow = Math.floor((current - 1) / windowSize) * windowSize + 1;
  const endWindow = Math.min(startWindow + windowSize - 1, totalPages);

  const pages = [];
  for (let i = startWindow; i <= endWindow; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
      <button
        disabled={current === 1}
        onClick={() => getCharacters(1)}
        className="px-3 py-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
      >
        « Primero
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => getCharacters(page)}
          className={`cursor-pointer px-4 py-2 rounded ${
            current === page ? "bg-green-500 text-white" : "bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={current === totalPages}
        onClick={() => getCharacters(totalPages)}
        className="px-3 py-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
      >
        Último »
      </button>
    </div>
  );
};

export default Pagination;
