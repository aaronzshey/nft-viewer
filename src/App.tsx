import "./App.css";
import OwnersList from "../components/OwnersList";
import Background from "../components/Background";
import Info from "../components/Info";
function App() {
  return (
    <Background>
      <OwnersList owners={["a", "b", "c"]} />
      <Info></Info>
    </Background>
  );
}

export default App;
