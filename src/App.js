import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Login from './pages/Login/Login';
import AppointmentPage from './pages/AppointmentPage/AppointmentPage';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Shared/RequireAuth';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <AppointmentPage />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
