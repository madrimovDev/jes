import { useLayoutEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useUserContext } from "./Contexts/UserContext";
import { Mainlayout } from "./Pages/Layouts/MainLayout";
import { Login } from "./Pages/Login";

function App() {
  const { username } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    
    function checkUser() {
      if (!username) {
        navigate("/login");
      } else {
        navigate("/");
      }
    }
    setTimeout(() => {
      checkUser();
    }, 2000)

    return () => {
      checkUser();
    };

  }, [username, location.pathname]);

  return (
    <div className="min-h-screen">
      <Routes>
        <Route index element={<Mainlayout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
