import { useSelector, useDispatch } from "react-redux";
import { setReadingList as setReadingListAction } from "../../../redux/reducers/appSlice";
import { useEffect } from "react";
function BookListItem({ book, index, loading, addToReadingList }) {
  const readingList = useSelector((state) => state.app.readingList);
  const dispatch = useDispatch();

  const handleClick = (book, index) => {
    const element = document.getElementById(`book-${book.ISBN}`);
    if (element) {
      setTimeout(() => {
        element.classList.add("opacity-0");
        addToReadingList(book);
      }, 100);
    }

    const readingListElement = document.getElementById("reading-list-scroll");
    if (readingListElement) {
      readingListElement.scrollTo({
        top: readingListElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const bookElement = document.getElementById(`book-${book.ISBN}`);
    if (bookElement && !loading) {
      setTimeout(() => {
        bookElement.classList.remove("opacity-0");
      }, 300);
    }
  }, [book, loading]);

  return (
    <div
      id={`book-${book.ISBN}`}
      className="relative opacity-0 flex flex-col justify-center items-center max-h-[240px] max-w-[140px] transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
      onClick={() => {
        dispatch(setReadingListAction(readingList.concat(book)));
        handleClick(book, index);
      }}
    >
      <img
        src={book.cover}
        alt={`Cover of ${book.title}`}
        className="h-full w-full object-cover transition-all duration-300 hover:blur-sm"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm">{book.author.name}</p>
      </div>
    </div>
  );
}

export default BookListItem;
