import { BrowserRouter, Routes, Route } from "react-router-dom";
import Advicess from "./features/advicess/advicess.component";
import Cards from "./features/cards/cards.component";
import Navbar from "./core/navbar.component";
import CustomeProvider from "./features/custome-provider/custome-provider";
import { UserProvider } from "./features/profile/services/user-profile.service";
import Profile from "./features/profile/profile.component";
import Pizza from "./features/pizza-menu/pizza-menu";
import ToDoListComponent from "./features/todo-list/todo-list.component";
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Profile />
        <Routes>
          <Route path="/" element={<Advicess />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/custome-provider" element={<CustomeProvider />} />
          <Route path="/pizza-menu" element={<Pizza />} />
          <Route path="/todo-list" element={<ToDoListComponent />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
