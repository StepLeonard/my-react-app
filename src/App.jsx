// These are the components imported. PersonCard Button ImageCard & button
import PersonCard from "./components/PersonCard";
import Button from "./components/Button.jsx";
import ImageCard from "./components/ImageCard.jsx";
// import images from components folder
import image1 from "./components/image1.jpeg";
import image2 from "./components/duckimg.jpg";
import "./App.css";

// make a function to handle the button click
function handleClick() {
  // console log that the button was clicked
  console.log("button clicked");
}
// make a function to display the personcard, imagecard and buttons
function App() {
  return (
    <>
      {/* render each person card */}
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
      {/* renders button with click */}
      <Button text="Click Me" onClick={handleClick} />
      {/* render button with different lable */}
      <Button text="2nd Button" onClick={handleClick} />
      {/* make a div with a class for style the imagecards */}
      <div className="image-grid">
        {/* renders frankies pic */}
        <ImageCard src={image1} alt="Bulldog Frankie" />
        {/* renders lil duck pic */}
        <ImageCard src={image2} alt="My little rubber ducky" />
      </div>
    </>
  );
}

export default App;
