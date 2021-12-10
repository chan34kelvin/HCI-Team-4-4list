export default function EventUser(props) {
  const showItems = ["name", "email", "phone"];

  let userInfo = [];

  if (props.user) {
    for (let i = 0; i < showItems.length; i += 1) {
      let key = showItems[i];
      console.log(key);
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
    <div className="d-flex flex-column gap-4 fs-4" id="user">
      <div className="fw-bolder fs-3">
        Contact Info:
        <hr />
      </div>
      <div className="d-flex flex-wrap">{userInfo}</div>
    </div>
  );
}
