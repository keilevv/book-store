import { useEffect } from "react";
import BookListItem from "./Item";
import BookListTabs from "../Tabs";
import "./style.css";
import { useSelector } from "react-redux";
function BookList({
  availableBooks,
  loading,
  readingList,
  addToReadingList,
  allBooks,
  setAvailableBooks,
}) {
  const storedSelectedTab = useSelector((state) => state.app.tab);
  useEffect(() => {
    const gridElement = document.getElementById("grid-container");
    if (gridElement) {
      if (readingList.length < 8) {
      }
    }
  }, [readingList]);

  useEffect(() => {
    const listContent = document.getElementById("book-list-content");
    if (listContent && !loading) {
      setTimeout(() => {
        listContent.classList.remove("opacity-0");
      }, 300);
    }
  }, [storedSelectedTab, loading]);

  return (
    <div id="book-list-container">
      <BookListTabs
        readingList={readingList}
        setAvailableBooks={setAvailableBooks}
        availableBooks={availableBooks}
        allBooks={allBooks}
      />
      <div
        id="book-list-content"
        className="rounded-xl opacity-0 bg-white/5 py-10 px-0 lg:px-8 justify-center transition-opacity"
      >
        <div
          id={"grid-container"}
          className="grid justify-center grid-cols-[120px,120px] md:grid-cols-[140px,140px,140px] lg:grid-cols-[140px,140px,140px,140px] max-h-[600px] lg:max-h-[900px] lg:mx-0 mx-auto overflow-y-scroll"
        >
          {availableBooks.length ? (
            availableBooks.map((book, index) => (
              <BookListItem
                key={index}
                loading={loading}
                book={book}
                index={index}
                addToReadingList={addToReadingList}
              />
            ))
          ) : (
            <p className="text-center text-xl w-full">No items</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookList;
