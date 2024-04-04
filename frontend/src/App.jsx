import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import Header from "./components/Header";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tarif/:id" element={<DetailPage />} />
        <Route path="/ara" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
