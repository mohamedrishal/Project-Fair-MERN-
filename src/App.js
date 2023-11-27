import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import { tokenAuthorisationContext } from './Context/TokenAuth';
import { useContext } from 'react';

function App() {

  const {isAuthorized, setIsAuthorized} = useContext(tokenAuthorisationContext)

  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register/>} />
        {/* Product out route  */}
        <Route path='/dashboard'  element={isAuthorized ? <Dashboard/>:<Home/>} />
        <Route path='/projects' element={isAuthorized ? <Projects/>:<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
