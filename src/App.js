import './App.css';
import Header from "../src/components/Header";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='flex flex-col px-5 py-5'>
      <Header />
      {/* <Routes>
        <Route path="/" element={<></>} />
        <Route path="/inbox" element={<></>} />
        <Route path="/withdraw" element={<></>} />
      </Routes> */}
    </div>
  );
}

export default App;
