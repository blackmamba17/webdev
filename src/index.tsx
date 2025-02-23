import ReactDom from "react-dom/client";
import {
  FilmBlock,
  movieDescriptions,
  movieImages,
  movieTitles,
} from "./FilmBlock.tsx";

import "./index.css";

const FilmList = () => {
  return (
    <>
      <h1>amazon best diomerda seller</h1>
      {movieTitles.map((_, index) => {
        return (
          <FilmBlock
            key={index}
            img={movieImages[index]}
            title={movieTitles[index]}
            desc={movieDescriptions[index]}
          >
            <EventExamples />
            <span>{index + 1}</span>
          </FilmBlock>
        );
      })}
    </>
  );
};

const EventExamples = () => {
  return (
    <>
      <form action="">
        <h2>typical form</h2>
        <input
          onChange={() => {
            console.log("stai scrivendo");
          }}
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
          id=""
        />
      </form>
      <button
        onClick={() => {
          alert("gayyy");
        }}
      >
        click me
      </button>
    </>
  );
};

const people = [
  { name: "bob", age: 30, position: "developer" },
  { name: "peter", age: 18, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "inter" },
  { name: "susanna", age: 22, position: "maitress" },
];

//filter create new array and can manipulate the size of new array
const youPeople = people.filter((person) => person.age < 22);
console.log(youPeople);

const seniorDev = people.filter(
  (person) => person.position === "senior developer"
);

console.log(seniorDev);

const oldPeople = people.find((person) => person.age > 2);
console.log(oldPeople);
console.log(oldPeople?.age);

console.log(youPeople[0].age);

const root = ReactDom.createRoot(document.getElementById("root")!);
root.render(<FilmList />);
