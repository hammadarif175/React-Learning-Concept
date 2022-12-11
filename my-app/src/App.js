import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <div style={{
        color: 'white',
        backgroundColor: 'black'
      }}>
      <Navbar title="TextUtils" about='About'/>
      {/* <TextForm heading="Enter the text to analyze below"/> */}
        <About />
      </div>
    </>
  );
}
export default App;
