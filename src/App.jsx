import './App.css';
import { scrollSnap } from 'react-scroll-snap';
import Home from './views/Home';
import Experience from './views/Experience';

function App() {
  return (
    <div>
      <scrollSnap snap snapAlign="start" snapVertical>
        <Home />
        <Experience />
      </scrollSnap>
    </div>

  )
}

export default App;
