import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/Navbar";

const Home = lazy(() => import("./components/Home"));
const Navigation = lazy(() => import("./components/navigation/Navigation"))
const EventPage = lazy(() => import("./events/controllers/EventPage"))

function App() {
  return (
    <Router>
      <div id="App">
        <Suspense fallback={<h1 className="">loading...</h1>}>
          <Navigation/>
          <Route exact path= "/" component= {Home}/>
          <Route exact path= "/event/:id" component={EventPage}/>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
