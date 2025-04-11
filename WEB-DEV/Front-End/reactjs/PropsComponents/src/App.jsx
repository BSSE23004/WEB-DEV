import "./App.css";
import UserCard from "./Components/userCard";

function App() {
  return (
    <div className="app">
      <UserCard
        name="Cheema"
        desc="A passionate developer."
        img="https://images.pexels.com/photos/30638768/pexels-photo-30638768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        style={{ backgroundColor: "lightblue" }}
      />
      <UserCard
        name="Hannan"
        desc="Loves coding and solving problems."
        img="https://images.pexels.com/photos/30535540/pexels-photo-30535540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        style={{ backgroundColor: "lightgreen" }}
      />
      <UserCard
        name="Qadir"
        desc="Curious about technology."
        img="https://images.pexels.com/photos/29792186/pexels-photo-29792186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        style={{ backgroundColor: "lightcoral" }}
      />
    </div>
  );
}

export default App;
