import { Route, Routes } from 'react-router-dom'
import About from './components/screens/about/About'
import Dashboard from './components/screens/dashboard/Dashboard'
import Home from './components/screens/home/Home'

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/dashboard" Component={Dashboard} />
    </Routes>
  )
}

export default App
