import { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/Navbar'
import { homeListingsData, personalListingsData, jobsListingsData, communityListingsData,
  forSalesListingsData } from "./components/listings/homeListingsData";

const Home = lazy(() => import('./components/Home'))
const Forum = lazy(() => import('./components/Forum'))
const ForumSearch = lazy(() => import('./components/ForumSearch'))
const Navigation = lazy(() => import('./components/navigation/Navigation'))
const EventPage = lazy(() => import('./events/controllers/EventPage'))
const EventList = lazy(() => import('./events/controllers/EventList'))
const EventSearch = lazy(() => import('./events/controllers/EventSearch'))
const ListingExample = lazy(() => import("./components/Listing"))
const ListingsPage = lazy(() => import('./components/listings/Listings'));
const Listing = lazy(() => import('./components/listings/Listing'));
const ListingsSearch = lazy(() => import("./components/listings/ListingsSearch"))
const Post = lazy(() => import('./components/PostListing'))
const Login = lazy(() => import('./components/login'))

const listingTypes = [{route:'/listings/housing',id:'housing'},{route:'/listings/personal',id:'personal'},
  {route:'/listings/jobs',id:'jobs'},{route:'/listings/community',id:'community'},
  {route:'/listings/forsale',id:'forsale'},{route:'/listings/cars',id:'cars'}];

function App() {
  console.log(sessionStorage.getItem("cookie"))
  const [login, setLogin] = useState(() => false)
  const [area, setArea] = useState(() => ({
    State: "",
    City: "",
  }));
  return (
    <Router basename='/HCI-Team-4'>
      <div id="App">
        <Suspense fallback={<h1 className="">loading...</h1>}>
          <Navigation login={login} setLogin={setLogin} area={area} setArea={setArea} />
          <Route exact path="/" component={Home} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/search/forum/:key" component={ForumSearch} />
          <Route exact path="/event">
            <EventList area={area}/>
          </Route>
          <Route exact path="/search/event/:key">
            <EventSearch area={area}/>
          </Route>
          <Route exact path="/event/:id" component={EventPage} />
          <Route exact path="/listing/:key" component={ListingExample} />
          {listingTypes.map(route => <Route key={route.id} exact path={`/search${route.route}/:key`} component={ListingsSearch}  />)}
          {listingTypes.map(route => <Route key={route.id} exact path={route.route} component={ListingsPage}  />)}
          {listingTypes.map(route => <Route key={route.id} exact path={`${route.route}/:id`} component={Listing}  />)}
          <Route exact path="/post">
            <Post login={login} />
          </Route>
          <Route exact path="/login">
            <Login setLogin={setLogin} />
          </Route>
          <footer style={{ textAlign: 'center' }} className="pt-5 my-5 fs-5">
            HCI Class SFSU CS Dept. Fall 2021 Team 4
          </footer>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
