import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListSales from './components/ListSales';
import Menu from './components/Menu';
import DiscountForm from './components/DiscountForm.jsx';
import CommunalPays from './components/CommunalPays.jsx';
import { useState } from 'react';


function App() {
  const [tab, setTab] = useState('listSales')

  return (
    <>
      <Header />
      <Menu active={tab} onChange={(current) => {console.log(current); setTab(current)}}  />
      {tab === 'listSales' && (
        <ListSales />
      )}

       {tab === 'discountCards' && (
        <DiscountForm />
      )}

      {tab === 'communalPays' && (
        <CommunalPays />
      )}
      
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
