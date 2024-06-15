import BookListItem from "./Item";
import "./style.css";
function BookList({ books, addToReadingList }) {
  const handleClick = (book, index) => {
    const element = document.getElementById(`book-${book.ISBN}`);
    if (element) {
      element.classList.add("translate-x-full");
      setTimeout(() => {
        element.classList.add("opacity-0");
        element.classList.add("hidden");
        addToReadingList(book);
      }, 100);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {books.map((book, index) => (
        <BookListItem
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
