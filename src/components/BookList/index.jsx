import { useEffect } from "react";
import BookListItem from "./Item";
import "./style.css";
function BookList({ books, addToReadingList, loading, readingList }) {
  const handleClick = (book, index) => {
    const element = document.getElementById(`book-${book.ISBN}`);
    if (element) {
      element.classList.add("translate-x-full");
      setTimeout(() => {
        element.classList.add("opacity-0");
        setTimeout(() => {
          element.classList.add("hidden");
        }, 300);
        addToReadingList(book);
      }, 100);
    }
  };
  useEffect(() => {
    const gridElement = document.getElementById("grid-container");
    if (gridElement) {
      if (readingList.length < 8) {
      }
    }
  }, [readingList]);

  return (
    <div
      id={"grid-container"}
      className="grid grid-cols-[120px,120px] md:grid-cols-[140px,140px,140px] lg:grid-cols-[140px,140px,140px,140px] max-h-[600px] lg:max-h-[900px] lg:mx-0 mx-auto overflow-y-scroll"
    >
      {books.map((book, index) => (
        <BookListItem
          loading={loading}
          book={book}
          index={index}
          key={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default BookList;
