import TopBar from "./top/TopBar";
import SearchBar from "./search/SearchBar";

export default function Navigation() {
  return (
    <div className="container-xxl my-2 navbar navbar-expand-lg">
      <div className="d-flex flex-column w-100 gap-3 gap-xl-5">
        <TopBar />
        <SearchBar />
      </div>
    </div>
  );
}
