import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from './components/Footer';
import NotFoundPage from "./pages/NotFoundPage"
function App() {
  return (
<>
<BrowserRouter>
<NavBar/>
  <Routes>
     <Route path='/' index element ={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/projects' element={<Projects/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='*' element={<NotFoundPage/>}/>
  </Routes>
  <Footer/>
</BrowserRouter>
</>
  );
}

export default App;
