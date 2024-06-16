import BookListItem from "./Item";
import "./style.css";
function BookList({ books, addToReadingList, loading }) {
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

  return (
    <div className="flex flex-wrap gap-4 justif-repeat">
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
