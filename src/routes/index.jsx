import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export function RoutesForApp() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}