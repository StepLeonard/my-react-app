function Button({ text, onClick }) {
  return (
    // this returns a button that shows the text and runs the onclick function when clicked

    <button onClick={onClick}>{text}</button>
  );
}
// this lets other files use the button component
export default Button;
