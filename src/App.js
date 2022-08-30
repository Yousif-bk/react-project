import React from "react";
import { Footer, Header, Sidebar } from "./components";
function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
