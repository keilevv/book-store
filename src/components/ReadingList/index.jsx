import ReadingListItem from "./Item";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setReadingList as setReadingListAction } from "../../redux/reducers/appSlice";
import "./style.css";
function ReadingList({ readingList, setReadingList, setAvailableBooks }) {
  const dispatch = useDispatch();
  return (
    <div className="min-w-[300px] py-10 px-10 border-aquamarine-500 border-2 rounded-s">
      <h1 className="text-2xl font-light text-center">Reading List</h1>

      {readingList.length ? (
        <div
          onClick={() => dispatch(setReadingListAction([]))}
          className="max-w-8 mx-auto mt-5 cursor-pointer"
        >
          <TrashIcon className="glow-on-hover" />
        </div>
      ) : null}
      <div className="relative mt-10 mx-auto justify-center flex">
        {readingList.map((book, index) => (
          <ReadingListItem
            setReadingList={setReadingList}
            setAvailableBooks={setAvailableBooks}
            readingList={readingList}
            key={index}
            book={book}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ReadingList;
