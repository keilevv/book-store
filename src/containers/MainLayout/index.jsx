import BackgroundImage from "../../assets/backdrop.png";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { useSelector } from "react-redux";
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

  const backgroundImage = document.getElementById("background-image");
  if (backgroundImage) {
    setTimeout(() => {
      backgroundImage.classList.remove("opacity-0");
      backgroundImage.classList.add("opacity-70");
    }, 100);
  }

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    const available = books.filter(
      (b) => !storedReadingList.some((s) => s.ISBN === b.ISBN)
    );

    setAvailableBooks(available);
  }, [books, storedReadingList]);

  useEffect(() => {}, [readingList]);

  const addToReadingList = (book) => {
    setAvailableBooks((prevBooks) =>
      prevBooks.filter((b) => b.ISBN !== book.ISBN)
    );
  };

  return (
    <div className="min-h-screen min-w-full pb-10">
      <Navbar />
      <LazyLoad>
        <img
          id="background-image"
          src={BackgroundImage}
          className="w-full object-cover absolute opacity-0 -z-10 transition-opacity duration-300"
        />
      </LazyLoad>
      <div className="bg-transparent backdrop-filter backdrop-blur-lg min-h-screen">
        <h1 className="text-3xl font-bold text-center p-10 mt-100">
          My cool library
        </h1>
        <div className="container flex gap-10 lg:flex-row flex-col-reverse justify-center px-4 mx-auto overflow-x-hidden">
          <BookList
            setAvailableBooks={setAvailableBooks}
            allBooks={books}
            readingList={storedReadingList}
            availableBooks={availableBooks}
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
