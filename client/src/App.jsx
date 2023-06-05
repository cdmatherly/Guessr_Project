import { Routes, Route } from 'react-router-dom';
import MediaQueryReact from 'media-query-react';
import Index from './Views/Index';
import Viewer from './Views/Viewer';
import Home from './Views/Home';
import ExpansionPick from './Views/ExpansionPick';
import Player from './Views/Player';
import Info from './Views/Info';
import NotFound from './Views/NotFound';

function App() {

  const screenSize = {
    mobile: { 
      minWidth: 320,
      maxWidth: 480,
    },
    mobileLandscape: {
      minWidth: 481,
      maxWidth: 767,
    },
    tablet: {
      minWidth: 768,
      maxWidth: 1024,
    },
    desktop: {
      minWidth: 1025,
      maxWidth: 2500,
    },
  }

  return (
    <MediaQueryReact mediaQueries={screenSize}>
      <Routes>
        <Route element={<Index />}>
          <Route element={<Home />} path='/' />
          <Route element={<Player />} path='/play'/>
          <Route element={<Info />} path='/about' />
          <Route element={<NotFound/>} path='/*'/>
        </Route>
      </Routes>
    </MediaQueryReact>
  );
}

export default App;
