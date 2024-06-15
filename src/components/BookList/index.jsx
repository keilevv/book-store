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
        <div
          id={`book-${index}`}
          key={index}
          className="relative flex flex-col justify-center items-center max-h-[240px] transform transition-all duration-300 hover:scale-105 hover:shadow-glow "
          onClick={(e) => handleClick(book, index, e)}
        >
          <img
            src={book.cover}
            alt={`Cover of ${book.title}`}
            className="h-full w-full object-cover transition-all duration-300 hover:blur-sm"
          />
          <div className="absolute inset-0 flex flex-col  items-center text-center text-white bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-sm">{book.author.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
