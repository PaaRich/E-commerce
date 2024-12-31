import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
