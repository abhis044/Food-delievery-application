import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";
import Header from "./components/Header";
function App() {
  return (
    <Router>
         <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
