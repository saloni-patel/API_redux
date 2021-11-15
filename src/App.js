import './App.css';
import RegisterLogin from './components/RegisterLogin';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Display from './components/Display';

function App() {
  return (
    <Router>
      

    <div className="App">
      <Routes>
        <Route exact path="/" element={<RegisterLogin/>} />
        <Route exact path="users" element={<Display/>} />
      </Routes>
    </div>
    </Router>

  );
}

export default App;
