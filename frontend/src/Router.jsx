import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewPet } from "./pages/NewPet";
import { DefaultLayout } from "./layouts/Default.layout";
import { ViewPet } from "./pages/ViewPet";
import { EditPet } from "./pages/EditPet";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/newPet" element={<NewPet />} />
        <Route path="/Pets/:id" element={<ViewPet />} />
        <Route path="/EditPet/:id" element={<EditPet />} />
      </Route>
    </Routes>
  );
}

