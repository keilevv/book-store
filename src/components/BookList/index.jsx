function BookList({ books }) {
  return (
    <div>
      {books.map((book) => {
        return <div key={book.id}>{book.title}</div>;
      })}
    </div>
  );
}

export default BookList;
