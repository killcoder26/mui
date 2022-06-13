import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyApp from './MyApp';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
