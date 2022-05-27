import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ImageInfo from './pages/ImageInfo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/images/:imageId' element={<ImageInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
