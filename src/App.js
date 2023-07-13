import { Routes, Route } from "react-router-dom";
import Home from "./components/Routes/Home/Home.component";
import Navbar from "./components/Routes/Navigation/NavigationBar.component";
import Authentication from "./components/Routes/Authentication/Authentication.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
