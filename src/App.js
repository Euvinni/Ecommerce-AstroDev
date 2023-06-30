import Footer from "./components/Footer";
// import HeaderTeste from "./components/HeaderTeste";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      {/* caminho das rotas */}
      <Routes> 
       {/* minhas rotas*/}
        <Route path="/"  element={<Home />}/> 
        {/* rotas especificas*/}
        <Route path="/product/:id" element={<ProductDetail/>}/>
      
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
