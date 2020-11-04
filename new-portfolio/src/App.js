import react from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact components={() => <Home></Home>}></Route>
          <Route path="/" exact components={() => <About></About>}></Route>
          <Route path="/" exact components={() => <Contact></Contact>}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App;
