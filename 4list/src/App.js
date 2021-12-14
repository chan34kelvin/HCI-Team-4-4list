import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/Navbar";

const Home = lazy(() => import("./components/Home"));
const Navigation = lazy(() => import("./components/navigation/Navigation"))
const EventPage = lazy(() => import("./events/controllers/EventPage"))
const EventList = lazy(() => import("./events/controllers/EventList"))
const EventSearch = lazy(() => import("./events/controllers/EventSearch"))
const Listings = lazy(() => import("./components/Listing"))
const Login = lazy(() => import("./components/login"))

function App() {
  return (
    <Router>
      <div id="App">
        <Suspense fallback={<h1 className="">loading...</h1>}>
          <Navigation/>
          <Route exact path= "/" component= {Home}/>
          <Route exact path= "/event" component={EventList}/>
          <Route exact path= "/event/:id" component={EventPage}/>
          <Route exact path= "/search/event/:key" component={EventSearch}/>
          <Route exact path= "/listing" component={Listings}/>
          <Route exact path= "/login" component={Login}/>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
