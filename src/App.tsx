import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PageNotFound } from './pages/404';
import Home from './pages/Home';
import ImageInfo from './pages/ImageInfo';

function App() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/images/:imageId' element={<ImageInfo />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
