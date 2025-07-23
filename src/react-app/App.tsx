import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";
import ErrorBoundary from "@/react-app/components/ErrorBoundary";
import LoadingSpinner from "@/react-app/components/LoadingSpinner";
import HomePage from "@/react-app/pages/Home";

// Lazy load pages for better performance
const Motorista = lazy(() => import("@/react-app/pages/Motorista"));
const Passageiro = lazy(() => import("@/react-app/pages/Passageiro"));
const Empresas = lazy(() => import("@/react-app/pages/Empresas"));
const Pay = lazy(() => import("@/react-app/pages/Pay"));
const Food = lazy(() => import("@/react-app/pages/Food"));
const Ajuda = lazy(() => import("@/react-app/pages/Ajuda"));
const Conteudo = lazy(() => import("@/react-app/pages/Conteudo"));

// Loading component for page transitions
function PageLoader() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-600">Carregando...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}
