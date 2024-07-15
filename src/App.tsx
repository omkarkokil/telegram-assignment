import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/Chat/page";
import HomePage from "./pages/Home/page";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats/:id" element={<HomePage />} />
          <Route path="/chats-full-view/:id" element={<ChatPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
