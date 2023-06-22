
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Homepage/Home';
function App() {

  return (
    <Router>
    <div className="App">
        
        <div className="content">
          <Home />
        </div> 
    </div>
    </Router>
  );
}

export default App;
