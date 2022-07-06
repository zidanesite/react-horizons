import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Hero from './component/Hero';
import Plans from './component/Plans';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Plans text="PLANS"/>
      <Footer/>
    </>
  );
}

export default App;
