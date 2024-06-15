import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReadingList as setReadingListAction } from "../../../redux/reducers/appSlice";
function ReadingListItem({
  book,
  index,
  readingList,
  setReadingList,
  setAvailableBooks,
}) {
  const storedReadingList = useSelector((state) => state.app.readingList);
  const dispatch = useDispatch();
  useEffect(() => {
    const previousItem = document.getElementById(
      `reading-book-content-${readingList.length - 2}`
    );
    const lastItem = document.getElementById(
      `reading-book-content-${readingList.length - 1}`
    );
    const itemContainer = document.getElementById(`reading-book-${index}`);

    if (previousItem) {
      previousItem.classList.remove("justify-center");
      previousItem.classList.add("pt-8");
    }
    if (lastItem) {
      lastItem.classList.add("justify-center");
    }

    if (itemContainer) {
      itemContainer.classList.remove("opacity-0");
      itemContainer.classList.add("opacity-100");
    }
  }, [readingList]);

  return (
    <div
      id={`reading-book-${index}`}
      key={index}
      className="absolute max-w-[140px] lg:max-w-[200px] transition-all duration-300 opacity-0 hover:translate-y-[-20%]"
      style={{
        top: `${index * 60}px`,
        zIndex: readingList.length + index,
      }}
    >
      <div className="relative flex justify-between items-center p-2 rounded shadow-lg">
        <img
          src={book.cover}
          alt={`Cover of ${book.title}`}
          className="w-full h-full object-cover rounded"
        />
        <div
          id={`reading-book-content-${index}`}
          className="absolute inset-0 flex flex-col  items-center text-center text-white bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <XMarkIcon
            className="absolute top-0 right-0 p-2 text-white cursor-pointer max-h-10"
            onClick={() => {
              dispatch(
                setReadingListAction(
                  storedReadingList.filter((storedBook) => storedBook !== book)
                )
              );
              setReadingList((prev) => prev.filter((_, i) => i !== index));
              setAvailableBooks((prev) => [...prev, book]);
            }}
          />
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-sm">{book.author.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ReadingListItem;
