import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import Form from "./Component/Form/Form";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet/>
      <Footer></Footer>
    </>
  );
}

export default App;
