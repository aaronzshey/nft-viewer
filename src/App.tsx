import "./App.css";
import OwnersList from "../components/OwnersList";
import Background from "../components/Background";
import Info from "../components/Info";
import {useEffect, useState} from "react";
import deployContract from "../utils/deploy";



function App() {
  const [address, setAddress] = useState("");
  async function getFactoryAddress() {
    setAddress(await deployContract());
  }
  useEffect(() => {
    getFactoryAddress();
  }, []);

  console.log(address);

  return (
    <Background>
      <OwnersList owners={["a", "b", "c"]} />
      <Info>{address}</Info>
    </Background>
  );
}

export default App;
