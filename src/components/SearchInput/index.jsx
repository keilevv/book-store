import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export default function SearchInput({
  allBooks,
  setAvailableBooks,
  availableBooks,
  readingList,
}) {
  function handleFilter(value) {
    if (allBooks) {
      let filteredBooks = value
        ? allBooks.filter(
            (book) =>
              book.title.toLowerCase().includes(value.toLowerCase()) ||
              book.author.name.toLowerCase().includes(value.toLowerCase()) ||
              book.ISBN.includes(value)
          )
        : allBooks;

      filteredBooks = filteredBooks.filter(
        (b) => !readingList.some((s) => s.ISBN === b.ISBN)
      );
      setAvailableBooks(filteredBooks);
    }
  }
  return (
    <div className="w-full max-w-lg px-4 mx-auto mt-10 mb-5">
      <Field>
        <Input
          onChange={(e) => handleFilter(e.target.value)}
          placeholder="Buscar por título, autor o ISBN"
          className={clsx(
            "placeholder:text-center mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        />
      </Field>
    </div>
  );
}
