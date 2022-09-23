
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Rooms from './components/Rooms/Rooms';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Header />
          }  />
          
          
          <Route path="/rooms" element={
            <Rooms />
          } />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
