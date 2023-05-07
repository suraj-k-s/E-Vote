import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {  Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Candidatelist from "./pages/candidatelist/";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Profile from "./pages/profile";
import Changepassword from "./pages/changepassword";
import Candidateacceptedlist from "./pages/Candidateacceptedlist"
import Candidaterejectedlist from "./pages/Candidaterejectedlist"
import Useracceptedlist from "./pages/Useracceptedlist"
import Userrejectedlist from "./pages/Userrejectedlist"
import Uservotes from "./pages/uservotes"
import Uservoteaccepted from "./pages/uservoteaccepted"
import Uservoterejected from "./pages/uservoterejected"

function App() {
  return (
    <div>
      <Topbar />
      <div className="Agent_container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/candidatelist" element={<Candidatelist />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/candidateacceptedlist" element={<Candidateacceptedlist />} />
          <Route path="/candidaterejectedlist" element={<Candidaterejectedlist />} />
          <Route path="/useracceptedlist" element={<Useracceptedlist />} />
          <Route path="/userrejectedlist" element={<Userrejectedlist />} />
          <Route path="/uservotes" element={<Uservotes />} />
          <Route path="/uservoteaccepted" element={<Uservoteaccepted />} />
          <Route path="/uservoterejected" element={<Uservoterejected />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
