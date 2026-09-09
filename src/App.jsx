
import './App.css'
import Demo_events from './components/Demo_events.jsx'
import Learn_FormCOntrol from './components/Learn_FormCOntrol.jsx'
import Learn_hooks from './components/Learn_hooks.jsx'

import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className='container bg-primary pb-5'>
      
      <Navbar />
      <Demo_events />
      <Learn_hooks />
      <Learn_FormCOntrol />
      
    </div>
  )
}

export default App
