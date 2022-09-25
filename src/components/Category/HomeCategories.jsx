import React from "react";
import { DEFAULT_IMGAGE } from "../../dummy_database/DefaultDummyDatabase";
const CATEGORY = [
  {
    id: 0,
    name: "Lalasad",
    title: "Lala",
    image: DEFAULT_IMGAGE.DEFAULT_IMAGE_1,
  },
  {
    id: 1,
    name: "Lala",
    title: "Lala",
    image: DEFAULT_IMGAGE.DEFAULT_IMAGE_1,
  },
  {
    id: 2,
    name: "Lala",
    title: "Lala",
    image: DEFAULT_IMGAGE.DEFAULT_IMAGE_1,
  },
];
const Category = (props) => {
  return (
    <button className="flex border-2 h-[250px] min-w-[300px] justify-between">
      <div className="p-5 w-[100px] mr-10">
        <h1 className="text-black font-semibolb">{props.name}</h1>
        <h2 className="text-gray-700 text-2xl font-normal">{props.title}</h2>
      </div>
      <div className=" h-[100%] max-w-[250px]">
        <img className="h-[100%]" src={props.image} alt=""></img>
      </div>
    </button>
  );
};
function HomeCategories() {
  return (
    <div className="md:flex justify-between gap-5">
      {CATEGORY.map((item) => (
        <div key={item.id}>
          <Category
            id={item.id}
            title={item.title}
            name={item.name}
            image={item.image}
          ></Category>
        </div>
      ))}
    </div>
  );
}

export default HomeCategories;
