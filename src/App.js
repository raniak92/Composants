import "./App.css";
import ProfilePhoto from "./composant/profile/profilephoto";
import FullName from "./composant/profile/fullname";
import Adress from "./composant/profile/adress";

function App() {
  return (
    <div className="App">
      <FullName />
      <br />
      <ProfilePhoto />
      <br />
      <Adress />
    </div>
  );
}

export default App;
