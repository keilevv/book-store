import { useEffect, useState } from "react";
import { setAvailableBooks } from "../redux/reducers/appSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
function useBooks() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  function getBooks() {
    setLoading(true);
    axios
      .get("https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev")
      .then((response) => {
        const responseArray = response.data.default.library;
        const bookArray = responseArray.map((book) => {
          return book.book;
        });
        dispatch(setAvailableBooks(bookArray));
        setBooks(bookArray);
        setLoading(false);
      })
      .catch(() => {
        setBooks([]);
        setLoading(false);
      });
  }

  return { books, getBooks, loading };
}
export default useBooks;
