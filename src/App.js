
import Header from './components/Header';
import Home from './pages/Home';
import Footer from "./components/Footer"
import './sass/main.css';


function App() {
  return (
    <div>
      <Header />
      <div className='main-container'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
