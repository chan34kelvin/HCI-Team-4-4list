import TopBar from "./top/TopBar";
import SearchBar from "./search/SearchBar";

export default function Navigation(props) {

  return (
    <div className="container-xxl mt-2 mb-4 navbar navbar-expand-lg">
      <div className="d-flex flex-column w-100 gap-3 gap-xl-5">
        <TopBar login={props.login} setLogin={props.setLogin}/>
        <SearchBar />
      </div>
    </div>
  );
}
