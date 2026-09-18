
import './App.css'
import Demo_events from './components/Demo_events.jsx'
import Learn_ArrayUseInUseState from './components/Learn_ArrayUseInUseState.jsx'
import { Learn_ConditionalRendering } from './components/Learn_ConditionalRendering.jsx'
import Learn_FormCOntrol from './components/Learn_FormCOntrol.jsx'
import Learn_hooks from './components/Learn_hooks.jsx'
import Learn_useEffect from './components/Learn_useEffect.jsx'

import Navbar from './components/Navbar.jsx'
import Object_UseState from './components/Object_UseState.jsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className='container bg-primary pb-5'>
      
      {/* <Navbar />
      <Demo_events />
      <Learn_hooks />
      <Learn_FormCOntrol />
      <hr />
      <Learn_ConditionalRendering />
      <hr />
      <Learn_useEffect />
      <hr />
      <Learn_ArrayUseInUseState />
      <hr />  
      <Object_UseState /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Learn_useEffect />} />
          <Route path='/use/effect/' element={<Learn_useEffect />} />
          <Route path='/form/control/' element={<Learn_FormCOntrol />} />
          <Route path='/array/use/state/' element={<Learn_ArrayUseInUseState />} />
          <Route path='/object/use/state/' element={<Object_UseState />} />
        </Routes>
      </BrowserRouter>    
    </div>
  )
}

export default App
