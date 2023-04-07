import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  const user = true;
  return (
   <div className="App"> 
   <Router>
    <TopBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/register" element={user ? <Home/> : <Register/>}/>
      <Route path="/login" element={user?<Home/> : <Login/>}/>
      <Route path="/write" element={user?<Write/>:<Register/>}/>
      <Route path="/settings" element={user?<Settings/> : <Register/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/post/:postId" element={<Single/>}/>
    </Routes>
   </Router>
   
   </div>
  );
}

export default App;
