import abi from "./contract/pizza.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import Buy from "./components/Buy";
import Memos from "./components/Memos";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xD045cB68B28331610DedC33FC5e1B0B6BB65915a";
      const contractAbi = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
        }
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        setState({
          provider,
          signer,
          contract,
        });
      } catch (e) {
        console.log(e);
      }
    };
    connectWallet();
  }, []);
  console.log(state);
  return (
    <div className="App">
      <Buy state={state}></Buy>
      <Memos state={state} />
    </div>
  );
}

export default App;
