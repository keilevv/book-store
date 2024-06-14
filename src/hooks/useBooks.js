import { useEffect, useState } from "react";
import axios from "axios";
function useBooks() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  function getBooks() {
    setLoading(true);
    axios
      .get("https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev")
      .then((response) => {
        setBooks(response.data.default.library);
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
