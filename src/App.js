import Footer from "./components/Footer";
// import HeaderTeste from "./components/HeaderTeste";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";

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
      </Routes>
      <Footer />
      <SideBar />
      </BrowserRouter>
    </>
  );
}

export default App;
