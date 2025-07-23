import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import Motorista from "@/react-app/pages/Motorista";
import Passageiro from "@/react-app/pages/Passageiro";
import Empresas from "@/react-app/pages/Empresas";
import Pay from "@/react-app/pages/Pay";
import Food from "@/react-app/pages/Food";
import Ajuda from "@/react-app/pages/Ajuda";
import Conteudo from "@/react-app/pages/Conteudo";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/motorista" element={<Motorista />} />
        <Route path="/passageiro" element={<Passageiro />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/99pay" element={<Pay />} />
        <Route path="/99food" element={<Food />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/blog" element={<Conteudo />} />
        <Route path="/conteudo" element={<Conteudo />} />
      </Routes>
    </Router>
  );
}
