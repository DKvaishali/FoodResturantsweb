import Layout from "./Components/Layout/Layout";
import { BrowserRouter,Routes,Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="*" element={<PageNotFound/>}/>

     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
