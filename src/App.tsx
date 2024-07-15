import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/page";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-tg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
