import { useEffect } from "react";
/* Components */
import BookList from "../../components/BookList";
import Navbar from "../../components/Navbar";
/* Hooks */
import useBooks from "../../hooks/useBooks";

function MainLayout() {
  const { books, getBooks } = useBooks();

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container min-h-screen min-w-full">
      <Navbar />
      <h1 className="text-3xl font-bold text-center p-10">Mis libros</h1>
      <BookList books={books} />
    </div>
  );
}

export default MainLayout;
