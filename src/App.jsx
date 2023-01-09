import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import  Home from './Components/Home/Home'
import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'
import Theme from './Components/Theme/Theme'


function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="App" style={{background: theme.background, color: theme.foreground}}>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/home"  element={<Home />} />
          <Route path='/theme' element={<Theme/>} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
