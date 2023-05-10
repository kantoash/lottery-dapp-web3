import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LotteryPage from "./pages/LotteryPage";
import { isWallectConnected } from './services/blockchain';
import ResultPage from './pages/ResultPage';
import CreatePage from './pages/CreatePage';

function App() {
  useEffect(() => {
    isWallectConnected();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/create/' element={<CreatePage/>} />
        <Route path="/jackpots/:id/" element={<LotteryPage />} />
        <Route path='/results/:id/' element={<ResultPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
