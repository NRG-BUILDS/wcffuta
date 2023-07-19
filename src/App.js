
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Homepage/Home';
import Navbar from './components/Navbar';
import BlogPage from './views/PublicityPage/PublicityPage';

function App() {

  return (
    <Router>
    <div className="App">
        <Navbar />
        <main className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/publicity' component={BlogPage} />
            
          </Switch>
        </main> 
    </div>
    </Router>
  );
}

export default App;
