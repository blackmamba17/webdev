import { ReactNode } from "react";
import img1 from "./images/book-1.jpg";
import img2 from "./images/book-2.jpg";
import img3 from "./images/book-3.jpg";
import img4 from "./images/book-4.jpg";

const descStyle = {
  color: "red",
  fontSize: "1.5rem",
  padding: "0.5rem",
  textAlign: "center" as const,
};

export const movieTitles = [
  "Inception",
  "The Matrix",
  "The Dark Knight",
  "Interstellar",
  "The Godfather",
  "il porcodio",
];

export const movieDescriptions = [
  "A mind-bending thriller where dreams within dreams blur the line between reality and illusion.",
  "A hacker discovers a dystopian world controlled by sentient machines in a simulated reality.",
  "A billionaire vigilante fights crime in Gotham while facing a dangerous adversary, the Joker.",
  "A journey through space and time as astronauts search for a new home for humanity.",
  "The powerful tale of a mafia family navigating loyalty, betrayal, and power in 1940s America.",
  "il porcodio bastardo",
];

export const movieImages = [img1, img2, img3, img4];
const Desc = (props: { desc: string }) => {
  return <h3 style={descStyle}>{props.desc}</h3>;
};

const Title = (props: { title: string }) => {
  return <h2>{props.title}</h2>;
};

const FilmCover = (props: { img: string; title?: string }) => {
  return <img src={props.img} alt={props.title} />;
};

export const FilmBlock = (props: {
  children?: ReactNode;
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <div style={{ textAlign: "center" }} className="filmContainer">
      <FilmCover img={props.img} title={props.title} />
      <Title title={props.title} />
      <input type="text" name="input" id="input" />
      <button type="button">click me gay diocane</button>
      {props.children}
      <Desc desc={props.desc} />
    </div>
  );
};
