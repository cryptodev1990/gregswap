import './App.css';
import Header from "../src/components/Header";
import Proposal from './pages/Proposal';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='flex flex-col px-5 py-5'>
      <Header />
      <Routes>
        <Route path="/" element={<Proposal />} />
        {/* <Route path="/inbox" element={<></>} />
        <Route path="/withdraw" element={<></>} /> */}
      </Routes>
    </div>
  );
}

export default App;
