import Navbar from './Components/Navbar/Navbar'
import Cancellation from './Components/Cancellation/Cancellation';
import Review from './Components/Review/Review';
import BottomDescription from './Components/Bottom Description/BottomDescription';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cancellation/>
   <Review/>
   <BottomDescription/>
   <Footer/>
    </div>
  );
}

export default App;
