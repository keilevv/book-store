import ReadingListItem from "./Item";
import "./style.css";
function ReadingList({ readingList }) {
  return (
    <div className="min-w-[300px] py-10 px-5 border-aquamarine-500 border-2 rounded-s">
      <h1 className="text-2xl font-light text-center">Reading List</h1>

      <div className="relative mt-10">
        {readingList.map((book, index) => (
          <ReadingListItem
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
