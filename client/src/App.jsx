import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import User from './pages/User'


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Team />} />
        <Route path='/' element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

