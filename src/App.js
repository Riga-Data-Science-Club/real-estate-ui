import React from 'react';
import './App.css';
import Home from "./views/Home";
import ConfigProvider from "./components/providers/ConfigProvider";

function App() {
  return (
      <ConfigProvider>
        <Home />
      </ConfigProvider>
  );
}

export default App;
