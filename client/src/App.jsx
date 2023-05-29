import { Routes, Route } from 'react-router-dom';
import Index from './Views/Index';
import Viewer from './Views/Viewer';
import Home from './Views/Home';
import ExpansionPick from './Views/ExpansionPick';
import Player from './Views/Player';
import Info from './Views/Info';
import NotFound from './Views/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Index />}>
        <Route element={<Home />} path='/' />
        <Route element={<Player />} path='/play'/>
        <Route element={<Info />} path='/info' />
        <Route element={<NotFound/>} path='/*'/>
      </Route>
    </Routes>
  );
}

export default App;
