import PersonCard from "./components/PersonCard";
import Button from "./components/Button.jsx";
import ImageCard from "./components/ImageCard.jsx";
import image1 from "./components/image1.jpeg";
import image2 from "./components/duckimg.jpg";
import "./App.css";

function handleClick() {
  console.log("button clicked");
}

function App() {
  return (
    <>
      <PersonCard name="Stephanie" age={21} occupation="Software Developer" />
      <PersonCard
        name="Franklin"
        age={1.5}
        occupation="Dog doing Bulldog things"
      />
      <PersonCard
        name="Lil Duck"
        age={1}
        occupation="Listens to me while I code outloud"
      />
      <Button text="Click Me" onClick={handleClick} />
      <Button text="2nd Button" onClick={handleClick} />
      <div className="image-grid">
        <ImageCard src={image1} alt="Bulldog Frankie" />
        <ImageCard src={image2} alt="My little rubber ducky" />
      </div>
    </>
  );
}

export default App;
