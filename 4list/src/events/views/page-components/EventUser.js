export default function EventUser(props) {
  const showItems = ["name", "email", "phone"];

  let userInfo = [];

  if (props.user) {
    for (let i = 0; i < showItems.length; i += 1) {
      let key = showItems[i];
      userInfo[i] = (
        <div className="d-flex flex-wrap gap-4 me-5 mb-3">
          <div className="fw-bold">
            {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}:
          </div>
          <div className="">{props.user[key]}</div>
        </div>
      );
    }
  }

  return (
    <div className="d-flex flex-column gap-4 fs-4">
      <div className="d-flex flex-wrap gap-5">
        <div className="fw-bolder fs-3">Contact Info:</div>
      </div>
      <hr className="p-0 m-0"/>
      <div className="d-flex flex-wrap">{userInfo}</div>
      <div className="blockquote-footer">
        Please do not spam nor harass the poster 
      </div>
    </div>
  );
}
