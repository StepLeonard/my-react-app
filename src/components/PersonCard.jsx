function PersonCard({ name, age, occupation }) {
  return (
    <div>
      <h1> {name}</h1>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
}
export default PersonCard;
