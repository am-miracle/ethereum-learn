import { useRef, useEffect } from "react";

function Contract({ value }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  return (
    <code>
      {`contract Greeter {
  string value = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value}</strong>
      </span>

      {`;

function greet() external view returns(string memory) {
  return _greeting;
}

function setGreeting(string calldata greeting) external onlyOwner {
  _greeting = greeting;
}
}`}
    </code>
  );
}

export default Contract;
