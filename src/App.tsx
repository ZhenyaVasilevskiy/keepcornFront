import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from './components/header/Header';
import AboutProduct from './components/AboutProductSection/AboutProduct';
import TopAssistants from './components/TopAssistantsSection/TopAssistants';
import AllAssistants from './components/AllAssistants/AllAssistants';
import MainPage from './pages/MainPage';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
