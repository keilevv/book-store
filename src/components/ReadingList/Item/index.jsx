function ReadingListItem({ book, index, readingList }) {
  return (
    <div
      key={index}
      className="absolute transition-transform duration-300 transform hover:translate-y-[-20%] click"
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
        <div className="absolute inset-0 flex flex-col  items-center text-center text-white bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-sm">{book.author.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ReadingListItem;
