
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>Product Page</h1>} />
          <Route path='/add' element={<h1>Product Add Page</h1>} />
          <Route path='/update' element={<h1>Product Update Page</h1>} />
          <Route path='/delete' element={<h1>Product Delete Page</h1>} />
          <Route path='/logout' element={<h1>Logout Page</h1>} />
          <Route path='/register' element={<SignUp/>} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
