//https://react.dev/learn/responding-to-events
import "./App.css";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    alert("You Clicked Me");
  };

  const handleHover = () => {
    alert("You Hovered Me");
  };

  const handleInputChange = (e) => {
    alert(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted " + e.target[1].value);
    for (let i = 0; i < e.target.length; i++) {
      console.log(e.target[i].value);
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}>
          <legend>UserInfo</legend>
          Name :{" "}
          <input
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleInputChange(e);
              }
            }}
          />
          <br />
          Age : <input type="number" />
          <br />
          <button>Submit</button>
        </fieldset>
      </form>
      <p onMouseOver={handleHover}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
        dolorum?
      </p>
      <button onClick={handleClick}>Click ME</button>
      <br />
      <Button />
    </div>
  );
}

export default App;
