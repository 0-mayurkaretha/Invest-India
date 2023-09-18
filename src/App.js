import './App.css';
import { useEffect} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import GeneralPage from "./routes/General"
import HomePage from "./routes/Home"


function App() {

  return (
    <div className="App bg-green-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/general" element={<GeneralPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
