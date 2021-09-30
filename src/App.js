import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import BlogDetail from "./components/blog-detail";
import BlogList from './components/blog-item';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <BlogList />
          </Route>
          <Route path="/post" component={BlogDetail} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
