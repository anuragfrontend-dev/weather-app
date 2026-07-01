import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Homepage } from './component/Homepage'
import { Forecast } from './component/Forecast'
import './App.css'

function App() {
 return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/forecast/:city' element={<Forecast />} />
  </Routes>
  </BrowserRouter>
 )
}

export default App
