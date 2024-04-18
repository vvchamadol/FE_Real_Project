//import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import UserPages from './pages/userPages';
import Navbar from './components/Navbar';
import Package from './components/package';
import AdminPages from './pages/adminPages';
import Wax from './components/Wax';
import UserInfo from './components/userInfo';
import UserProfile from './components/userProfile';


import { BrowserRouter, Route, Routes } from 'react-router-dom';


//Layout
//import HeaderBar from "./layout/HeaderBar";
import { CssBaseline, Box } from "@mui/material";
//import SideBar from "./layout/SideBar";


function App() {
  return (
  <BrowserRouter>
    <>
      <CssBaseline />
      <div className="app">
       {/*SideBar*/} 
        <main className="content">
          {/*HeaderBar*/} <Navbar/>
          <div className="content_body">
            <Box m="20px">

            <div className='text'>
                  Car Care <br/>
                  บริการล้างรถสุดประทับใจ
            </div>
                     
              <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/userpage' element={<UserPages />} />
                <Route path='/package' element={<Package />} />
                <Route path='/adminpage' element={<AdminPages />} />
                <Route path='/wax' element={<Wax />} />
                <Route path='/userinfo' element={<UserInfo />} />
                <Route path='/userprofile' element={<UserProfile />} />
              </Routes>
            </Box>
          </div>
        </main>
      </div>
    </>
  </BrowserRouter>
  );
}

export default App;
