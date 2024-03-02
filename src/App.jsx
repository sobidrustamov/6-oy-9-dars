import { Routes, Route } from "react-router-dom";
import { Todos } from "./pages/todos/todos";
import { Users } from "./pages/users/users";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Todos />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
