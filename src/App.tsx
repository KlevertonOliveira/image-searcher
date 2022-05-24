import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ImageDetails from './pages/ImageDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/images/:imageId' element={<ImageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
