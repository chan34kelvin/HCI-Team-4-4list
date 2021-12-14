import { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
// const Listing = lazy(() => import("./components/Listing"))
const ListingsPage = lazy(() => import('./components/listings/Listings'));
const Listing = lazy(() => import('./components/listings/Listing'));
const Post = lazy(() => import('./components/PostListing'))
const Login = lazy(() => import('./components/login'))

const listingTypes = [{route:'/listings/housing',id:'housing'},{route:'/listings/personal',id:'personal'},
  {route:'/listings/jobs',id:'jobs'},{route:'/listings/community',id:'community'},
  {route:'/listings/forsale',id:'forsale'}];

function App() {
  const [login, setLogin] = useState(() => false)
  return (
    <Router>
      <div id="App">
        <Suspense fallback={<h1 className="">loading...</h1>}>
          <Navigation login={login} setLogin={setLogin} />
          <Route exact path="/" component={Home} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/search/forum/:key" component={ForumSearch} />
          <Route exact path="/event" component={EventList} />
          <Route exact path="/event/:id" component={EventPage} />
          <Route exact path="/search/event/:key" component={EventSearch} />
          {/* <Route exact path="/listing/:key" component={Listing} /> */}
          {listingTypes.map(route => <Route exact key={route.id} path={route.route} component={ListingsPage}  />)}
          {listingTypes.map(route => <Route exact key={route.id} path={`${route.route}/:id`} component={Listing}  />)}
          <Route exact path="/post">
            <Post login={login} />
          </Route>
          <Route exact path="/login">
            <Login setLogin={setLogin} />
          </Route>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
