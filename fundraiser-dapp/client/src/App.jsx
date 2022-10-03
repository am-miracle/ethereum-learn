import { EthProvider } from "./contexts/EthContext";
// import Intro from "./components/Intro/";
// import Setup from "./components/Setup";
// import Demo from "./components/Demo";
// import Footer from "./components/Footer";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NewFundraiser from "./components/NewFundraiser";

function App() {
  return (
    <EthProvider>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Fundraiser</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="/new" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">NewFundraiser</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewFundraiser />} />
        </Routes>
        <h1 className="text-blue-700">Fundraiser</h1>
      </BrowserRouter>
    </EthProvider>
  );
}

export default App;


// import React, { useState } from 'react';
// import getWeb3 from "./utils/getWeb3";
// import FundraiserContract from "./contracts/Fundraiser.json"
// import "./App.css"

// const App = () => {
//   const [state, setState] = useState({web3: null, accounts: null, contract: null});
//   const [storageValue, setStorageValue] = useState(0)

//   useEffect(() => {
//     const init = async() => {
//       try{
//         const web3 = await getWeb3();
//         const accounts = await web3.eth.getAccounts();
//         const networkId = await web3.eth.getId();
//         const deployedNetwork = FundraiserContract.networks[networkId];
//         const instance = new web3.eth.Contract(
//           FundraiserContract.abi,
//           deployedNetwork && deployedNetwork.address,
//         );

//         setState({ web3, accounts, contract: instance});
//       } catch(error) {
//         alert(
//           `Failed to load web3, accounts, or contract. Check console for details`,
//         )
//         console.error(error);
//       }
//     }
//     init();
//   }, [])


//   const runExample = async () => {
//     const { accounts, contract } = state;
//   }

//   return (
//     <div>
//       <h1>Fundraiser</h1>
//     </div>
//   )
// }

// export default App