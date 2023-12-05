import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contato from "./Components/Contato/Contato";
import Produtos from "./Components/Produtos/Produtos";
import Produto from "./Components/Produto/Produto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
