import { useSelector, useDispatch } from "react-redux";
import { setReadingList as setReadingListAction } from "../../../redux/reducers/appSlice";
function BookListItem({ book, index, handleClick }) {
  const readingList = useSelector((state) => state.app.readingList);
  const dispatch = useDispatch();

  return (
    <div
      id={`book-${index}`}
      className="relative flex flex-col justify-center items-center max-h-[240px] transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
      onClick={() => {
        dispatch(setReadingListAction(readingList.concat(book)));
        handleClick(book, index);
      }}
    >
      <img
        src={book.cover}
        alt={`Cover of ${book.title}`}
        className="h-full w-full object-cover transition-all duration-300 hover:blur-sm"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm">{book.author.name}</p>
      </div>
    </div>
  );
}

export default BookListItem;
