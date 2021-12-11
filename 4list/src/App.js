import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/Navbar";

const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <Router>
    <div id="App">
      <Suspense fallback={<h1 className="">loading...</h1>}>
        <Route exact path= "/" component= {Home}/>
      </Suspense>
    </div>
  </Router>
  );
}

export default App;
