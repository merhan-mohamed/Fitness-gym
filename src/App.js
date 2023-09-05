import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Box } from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';




const App = () => (
  
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
      
    </Box>
  
)

export default App;
