import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import AnimatedRoutes from './AnimatedRoutes';


function App() {
  
  

  return (
    <Router>
      <AnimatedRoutes/>
    </Router>
  )
}

export default App
