import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <>
      <div className="z-0 min-h-screen">
        <div className="mx-auto min-h-screen max-w-[max(150vh,90vw)] px-4 py-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      <div className="bg-grid fixed top-0 left-0 -z-10 min-h-screen min-w-screen"></div>
      {/* <Lifegame className="fixed top-0 left-0 -z-10 h-full w-full object-cover" /> */}
    </>
  );
}

export default App;
