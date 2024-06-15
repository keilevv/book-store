import BackgroundImage from "../../assets/backdrop.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReadingList as setReadingListAction } from "../../redux/reducers/appSlice";
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
  const storedReadingList = useSelector((state) => state.app.readingList);

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    const available = books.filter((b) => !storedReadingList.some((s) => s.ISBN === b.ISBN));

    setAvailableBooks(available);
  }, [books, storedReadingList]);

  useEffect(() => {
  }, [readingList]);

  const addToReadingList = (book) => {
    setAvailableBooks((prevBooks) =>
      prevBooks.filter((b) => b.ISBN !== book.ISBN)
    );
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
          <ReadingList
            readingList={storedReadingList}
            setReadingList={setReadingList}
            setAvailableBooks={setAvailableBooks}
          />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
