import Home from './views/Home';
import Experience from './views/Experience';
import Projects from './views/Projects';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
