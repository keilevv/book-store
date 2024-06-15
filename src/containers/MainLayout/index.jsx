import BackgroundImage from "../../assets/backdrop.png";
import { useEffect, useState } from "react";
/* Components */
import BookList from "../../components/BookList";
import Navbar from "../../components/Navbar";
import ReadingList from "../../components/ReadingList";
/* Hooks */
import useBooks from "../../hooks/useBooks";

function MainLayout() {
  const { books, getBooks, loading } = useBooks();
  const [availableBooks, setAvailableBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    setAvailableBooks(books);
  }, [books]);

  const addToReadingList = (book) => {
    setAvailableBooks((prevBooks) =>
      prevBooks.filter((b) => b.ISBN !== book.ISBN)
    );
    setReadingList((prevList) => [...prevList, book]);
  };

  return (
    <div className="min-h-screen min-w-full">
      <Navbar />
      <img
        src={BackgroundImage}
        className="w-full object-cover absolute opacity-70 -z-10"
      />
      <div className="bg-transparent backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-center p-10 mt-100">
          My cool library
        </h1>
        <div className="container  flex gap-8 lg:flex-row flex-col-reverse justify-center px-4 mx-auto">
          <BookList
            books={availableBooks}
            loading={loading}
            addToReadingList={addToReadingList}
          />
          <ReadingList readingList={readingList} />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
