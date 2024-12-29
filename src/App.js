import './App.css';
import './CSS/About.css'
import About from './Components/About';
import Navebar from './Components/Navebar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
   <Navebar About="About Us"/>
   <div>
   < Textform heading="Enter the text to Analyze below"/>
    <About/>
   </div>
    </>
  );
}

export default App;
