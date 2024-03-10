import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import About from "./components/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="log-in" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
