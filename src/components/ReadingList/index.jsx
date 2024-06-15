import ReadingListItem from "./Item";
import "./style.css";
function ReadingList({ readingList, setReadingList, setAvailableBooks }) {
  return (
    <div className="min-w-[300px] py-10 px-10 border-aquamarine-500 border-2 rounded-s">
      <h1 className="text-2xl font-light text-center">Reading List</h1>

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
