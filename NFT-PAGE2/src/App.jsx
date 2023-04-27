import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");
  return (
    <BrowserRouter>
      <div className="bg-purple-100">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route
            path="/"
            element={<Main account={account} setAccount={setAccount} />}
          />
          <Route path="/:tokenId" element={<Detail />} />
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
