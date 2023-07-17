import List from "../components/Photo/List";
import SingleItem from "../components/Photo/SingleItem";


const PhotoPage = () => {
  return (
    <div className="grid md:grid-cols-[minmax(1px,_1fr)_400px] mb-3">
      <div className="md:order-1 order-2">
        <List />
      </div>
      <div className="md:order-2 order-1 md:border-l-2 border-gray-300 ml-0 pl-0 md:pl-3 md:ml-3 mb-3 md:mb-0">
        <SingleItem />
      </div>
    </div>
  );
};

export { PhotoPage };
