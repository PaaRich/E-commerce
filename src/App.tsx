import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import LandingPage from "./Pages/LandingPage";
import UserLayout from "./Services/E-commerce/Pages/Layout/UserLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
      </Route>

      {/* E-commerce */}
      <Route path="/e-commerce" element={<UserLayout />} >
        <Route index element={<h1>LandingPage</h1>}/>
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<h1>AdminLayout</h1>}>

      </Route>
    </Routes>
  );
}

export default App;
