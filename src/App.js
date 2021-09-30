import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import BlogDetail from "./components/blog-detail";
function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/post" component={BlogDetail} />
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
