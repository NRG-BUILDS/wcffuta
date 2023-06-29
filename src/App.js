
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Homepage/Home';
import Navbar from './components/Navbar';
import BlogPage from './views/BlogPage/BlogPage';
import Footer from './components/Footer';
function App() {

  return (
    <Router>
    <div className="App">
        <Navbar />
        <main className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={BlogPage} />
            
          </Switch>
        </main> 
        <Footer />
    </div>
    </Router>
  );
}

export default App;
