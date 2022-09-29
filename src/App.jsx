import './App.scss';
import Home from './components/Layout/Home'
import Header from './components/Layout/Header'
import './components/Layout/Home.scss'
import 'bootstrap'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

    </div>
  );
}

export default App;
