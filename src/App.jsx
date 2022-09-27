
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Rooms from './components/Rooms/Rooms';
import Footer from './components/Footer/Footer';
import Arrow from './components/Arrow/Arrow';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Arrow/>
        <Routes>
          <Route path="/" element={
            <Header />
          }  />
          
          
          <Route path="/rooms" element={
            <Rooms />
          } />
        </Routes>
        

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
