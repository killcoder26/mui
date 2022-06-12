import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './Video';
import MyApp from './MyApp';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyApp />} />
          <Route path="/new" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
