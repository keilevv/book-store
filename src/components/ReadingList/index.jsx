import ReadingListItem from "./Item";
import {
  TrashIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setReadingList as setReadingListAction } from "../../redux/reducers/appSlice";
import "./style.css";

function ReadingList({ readingList, setReadingList, setAvailableBooks }) {
  const dispatch = useDispatch();
  return (
    <div className="min-w-[300px] min-h-[300px] lg:min-h-[900px] py-10 px-10  border-aquamarine-500 border-2 rounded-s">
      <h1 className="text-2xl font-light text-center">Lista de lectura</h1>
      {readingList.length ? (
        <div

          onClick={() => dispatch(setReadingListAction([]))}
          className="mx-auto my-10 cursor-pointer flex gap-2 justify-center p-2 rounded-sm hover:shadow-glow hover:bg-aquamarine-500  lg:bg-transparent bg-aquamarine-500 hover:outline  outline-aquamarine-200 transition-all"
        >
          <p className="text-center align-middle text-xl mt-auto">Limpiar</p>
          <TrashIcon className=" max-w-8 my-auto" color="#ADACA7" />
        </div>
      ) : (
        <div>
          <ArrowTopRightOnSquareIcon
            className=" max-w-8 mx-auto mt-10"
            style={{ color: "aquamarine0" }}
          />
          <p className="mt-10 text-center">Agregue títulos haciendo click en ellos</p>
        </div>
      )}
      {readingList.length ? (
        <div
          id={"reading-list-scroll"}
          className={`relative mt-10 mx-auto justify-center flex overflow-y-scroll lg:h-[600px] h-[400px] max-h-[600px]`}
        >
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
      ) : null}
    </div>
  );
}

export default ReadingList;
