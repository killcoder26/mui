import './App.css';
import Footer from './Footer';
import MyCard from './MyCard';
import Navbar from './Navbar';

function App() {

  return (
    <div >
      <div><Navbar /> </div>
      <div> <MyCard /> </div>
      <div className="footer"><center><Footer /></center> </div>
    </div>
  );
}

export default App;
