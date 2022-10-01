import { EthProvider } from "./contexts/EthContext";
// import Intro from "./components/Intro/";
// import Setup from "./components/Setup";
import Demo from "./components/Demo";
// import Footer from "./components/Footer";
import GreeterContract from "./contracts/Greeter.json";
import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          {/* <Intro />
          <hr />
          <Setup /> */}
          <hr />
          <Demo />
          {/* <hr />
          <Footer /> */}
        </div>
      </div>
    </EthProvider>
  );
}

// function App() {
//   return (
//     <EthProvider>
//       <div>
//         <header id="App">
//           <h1>Greeter App</h1>
//         </header>
//       </div>
//     </EthProvider>
//   );
// }
export default App;
