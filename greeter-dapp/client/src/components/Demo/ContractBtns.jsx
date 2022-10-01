import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    // if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    // }
  };

  const greet = async () => {
    const value = await contract.methods.greet().call({ from: accounts[0] });
    setValue(value);
  };

  const setGreeting = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to setGreeting.");
      return;
    }
    const greeting = parseInt(inputValue);
    await contract.methods.setGreeting(greeting).send({ from: accounts[0] });
  };

  return (
    <div className="btns">

      <button onClick={greet}>
        greet()
      </button>

      <div onClick={setGreeting} className="input-btn">
        Greeting(<input
          type="text"
          placeholder="string"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

    </div>
  );
}

export default ContractBtns;
