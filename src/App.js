import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Exercises from "./Pages/Exercises/Exercises";
import MyExercises from "./Pages/Exercises/MyExercises";
import Login from "./Pages/Login/Login";
import Error from "./Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Exercises" element={<Exercises />} />
        <Route path="/Exercises/:exerciseId" element={<MyExercises />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
