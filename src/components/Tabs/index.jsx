import { Tab, TabGroup, TabList } from "@headlessui/react";
import { useEffect, useState } from "react";
import { setTab } from "../../redux/reducers/appSlice";
import { useDispatch, useSelector } from "react-redux";

function BookListTabs({
  availableBooks,
  allBooks,
  readingList,
  setAvailableBooks,
}) {
  const storedSelectedTab = useSelector((state) => state.app.tab);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const genres = ["All"].concat([
      ...new Set(allBooks.map((book) => book.genre)),
    ]);
    setCategories(genres.map((genre) => ({ name: genre })));
  }, [allBooks]);

  useEffect(() => {
    if (allBooks && categories.length > 1) {
      handleFilter(storedSelectedTab, allBooks, categories, readingList);
    }
  }, [storedSelectedTab, allBooks, categories, readingList]);

  function handleFilter(value, allBooks, categories, readingList) {
    if (allBooks) {
      let filteredBooks = value
        ? allBooks.filter((book) => book.genre === categories[value].name)
        : allBooks;

      filteredBooks = filteredBooks.filter(
        (b) => !readingList.some((s) => s.ISBN === b.ISBN)
      );
      setAvailableBooks(filteredBooks);
    }
  }

  return (
    <div className="flex  justify-center pt-10 pb-10 ">
      <TabGroup
        defaultIndex={storedSelectedTab}
        onChange={(value) => {
          dispatch(setTab(value));
        }}
      >
        <TabList className="flex gap-4 flex-wrap justify-center">
          {categories.map(({ name }) => (
            <Tab
              key={name}
              className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white hover:shadow-glow"
            >
              {name}
            </Tab>
          ))}
        </TabList>
      </TabGroup>
    </div>
  );
}
export default BookListTabs;
