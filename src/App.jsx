import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Eletronicos from "./paginas/Eletronicos";
import Cursos from "./paginas/Cursos";
import Home from "./paginas/Home";
import NoPage from "./paginas/noPage";


function App() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>}>
            <Route index element={<Home />} />
            <Route path="/eletronicos" element={<Eletronicos />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}
export default App;
