import BookListItem from "./Item";
import "./style.css";
function BookList({ books, addToReadingList }) {
  const handleClick = (book, index) => {
    const element = document.getElementById(`book-${index}`);
    if (element) {
      element.classList.add("translate-x-full");
      setTimeout(() => {
        element.classList.add("opacity-0");
        addToReadingList(book);
      }, 100);
    }
  };

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(140px,_1fr))] p-4">
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
